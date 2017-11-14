package com.tws.controllers;

import com.tws.entities.ExcellentDiary;
import com.tws.repositories.ExcellentDiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ExcellentController {

    @Autowired
    private ExcellentDiaryRepository excellentDiaryRepository;

    @GetMapping("/excellentDiaries")
    public ResponseEntity getExcellentDiaries() {
        Iterable<ExcellentDiary> diaries = excellentDiaryRepository.findAll();
        return new ResponseEntity<>(diaries, HttpStatus.OK);
    }

    @DeleteMapping("/excellentDiary/{id}")
    public ResponseEntity deleteExcellentDiaries(@PathVariable("id") long id) {
        excellentDiaryRepository.deleteByExcellentId(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
