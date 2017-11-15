package com.tws.controllers;

import com.tws.entities.ExcellentDiary;
import com.tws.repositories.ExcellentDiaryRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "优秀日志",description = "优秀日志相关接口")
@RestController
@RequestMapping("/api")
public class ExcellentController {

    @Autowired
    private ExcellentDiaryRepository excellentDiaryRepository;

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
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
