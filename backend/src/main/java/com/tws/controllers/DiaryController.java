package com.tws.controllers;

import com.tws.entities.Diary;
import com.tws.repositories.DiaryRepository;
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
        try {
            if (diaryRepository.findOne(diaryId) != null) {
                diaryRepository.delete(diaryId);

                return new ResponseEntity<>(diaryId, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(diaryId, HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
