package com.tws.controllers;

import com.tws.entities.Comment;
import com.tws.entities.Diary;
import com.tws.repositories.CommentRepository;
import com.tws.repositories.DiaryRepository;
import com.tws.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DiaryController {
    @Autowired
    private DiaryRepository diaryRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/diary")
    public ResponseEntity addDiary(@RequestBody Diary diary) {
        return new ResponseEntity<>(diaryRepository.save(diary), HttpStatus.OK);
    }

    @GetMapping("/diaries/{userId}")
    public ResponseEntity diaries(@PathVariable("userId") Long userId) {
        List<Diary> diaries = diaryRepository.findByUserIdOrderByTimeDesc(userId);

        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }

    @DeleteMapping("/diary/{diaryId}")
    public ResponseEntity deleteById(@PathVariable("diaryId") long diaryId) {
        if (diaryRepository.findOne(diaryId) != null) {
            commentRepository.deleteByDiaryId(diaryId);
            diaryRepository.delete(diaryId);

            return new ResponseEntity<>(diaryId, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(diaryId, HttpStatus.NO_CONTENT);
        }

    }

    @PutMapping("/diary")
    public ResponseEntity modify(@RequestBody Diary diary) {
        Diary oldDiary = diaryRepository.findOne(diary.getId());
        if (oldDiary != null) {
            oldDiary.setContent(diary.getContent());
            oldDiary.setTime(diary.getTime());

            diary = diaryRepository.save(oldDiary);
            return new ResponseEntity<>(diary, HttpStatus.OK);
        }
        return new ResponseEntity<>(diary, HttpStatus.NO_CONTENT);
    }
}
