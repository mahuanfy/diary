package com.tws.controllers;

import com.tws.entities.Comment;
import com.tws.entities.Diary;
import com.tws.entities.User;
import com.tws.repositories.CommentRepository;
import com.tws.repositories.DiaryRepository;
import com.tws.repositories.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "日志评论相关",description = "日志评论的相关接口")
@RestController
@RequestMapping("/api")
public class CommentController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DiaryRepository diaryRepository;

    @ApiOperation(value = "添加一条评论信息")
    @PostMapping("/comment")
    public ResponseEntity addComment(@RequestBody Comment comment) {
        User user = userRepository.findOne(comment.getUser().getId());
        comment.setUser(user);
        Diary diary = diaryRepository.findOne(comment.getDiaryId());
        diary.getCommentList().add(comment);

        diaryRepository.save(diary);

        return new ResponseEntity<>(comment, HttpStatus.OK);
    }
}
