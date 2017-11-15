package com.tws.controllers;

import com.tws.entities.Diary;
import com.tws.repositories.CommentRepository;
import com.tws.repositories.DiaryRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "日志相关",description = "成长日志相关的接口")
@RestController
@RequestMapping("/api")
public class DiaryController {
    @Autowired
    private DiaryRepository diaryRepository;
    @Autowired
    private CommentRepository commentRepository;


    @ApiOperation(value = "添加一个成长日志")
    @PostMapping("/diary")
    public ResponseEntity addDiary(@RequestBody Diary diary) {
        return new ResponseEntity<>(diaryRepository.save(diary), HttpStatus.OK);
    }

    @ApiOperation(value = "根据用户id查找该用户的所有成长日志")
    @GetMapping("/diaries/{userId}")
    public ResponseEntity diaries(@PathVariable("userId") Long userId) {
        List<Diary> diaries = diaryRepository.findByUserIdOrderByTimeDesc(userId);

        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }

    @ApiOperation(value = "根据成长id删除成长日志")
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

    @ApiOperation(value = "修改成长日志")
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
