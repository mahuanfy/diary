package com.tws.controllers;

import com.tws.entities.Diary;
import com.tws.entities.ExcellentDiary;
import com.tws.repositories.DiaryRepository;
import com.tws.repositories.ExcellentDiaryRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "优秀日志")
@RestController
@RequestMapping("/api")
public class ExcellentController {

    @Autowired
    private ExcellentDiaryRepository excellentDiaryRepository;
    @Autowired
    private DiaryRepository diaryRepository;

    @ApiOperation(value = "查找所有的优秀日志")
    @GetMapping("/excellentDiaries")
    public ResponseEntity getExcellentDiaries() {
        Iterable<ExcellentDiary> diaries = excellentDiaryRepository.findAll();
        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }

    @ApiOperation(value = "根据优秀日志id删除优秀日志")
    @DeleteMapping("/excellentDiary/{id}")
    public ResponseEntity deleteExcellentDiaries(@PathVariable("id") long id) {
        excellentDiaryRepository.deleteByExcellentId(id);
        return new ResponseEntity<>(id, HttpStatus.NO_CONTENT);
    }

    @ApiOperation(value = "添加优秀日志")
    @PostMapping("/excellentDiary")
    public ResponseEntity recommend(@RequestBody ExcellentDiary excellentDiary) {
        ExcellentDiary has = excellentDiaryRepository.findByDiaryId(excellentDiary.getDiary().getId());
        if (has == null) {
            Diary diary = diaryRepository.findOne(excellentDiary.getDiary().getId());
            excellentDiary.setDiary(diary);
            excellentDiaryRepository.save(excellentDiary);
        }

        return new ResponseEntity<>(excellentDiary, HttpStatus.CREATED);
    }

}

