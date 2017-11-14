package com.tws.controllers;

import com.tws.entities.Diary;
import com.tws.entities.Follow;
import com.tws.entities.User;
import com.tws.repositories.DiaryRepository;
import com.tws.repositories.FollowerRepository;
import com.tws.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class FollowerController {

    @Autowired
    private FollowerRepository followerRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DiaryRepository diaryRepository;

    @GetMapping("/followers/{userId}")
    public ResponseEntity allFollowers(@PathVariable("userId") long userId) {
        Map result = new HashMap();
        List diariesData = new ArrayList<>();
        List<Long> ids = followerRepository.findFollowerIdByUserId(userId);
        List<User> followers = (List<User>) userRepository.findAll(ids);
        for (User user : followers) {
            Map<String, Object> temp = new HashMap<>();
            List<Diary> diaries = diaryRepository.findByUserId(user.getId());
            temp.put("follower", user);
            temp.put("diaries", diaries);
            diariesData.add(temp);
        }
        result.put("followers", followers);
        result.put("followersDiaries", diariesData);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/follower")
    public ResponseEntity follow(@RequestBody Follow follow) {
        followerRepository.save(follow);
        return new ResponseEntity<>(follow, HttpStatus.OK);
    }

    @DeleteMapping("/follower/{userId}/{followerId}")
    public ResponseEntity unfollow(@PathVariable("userId") Long userId, @PathVariable("followerId") Long followerId) {
        followerRepository.deleteFollow(userId, followerId);

        return new ResponseEntity<>(userId, HttpStatus.OK);
    }
}
