package com.tws.controllers;

import com.tws.entities.Follow;
import com.tws.entities.User;
import com.tws.repositories.FollowerRepository;
import com.tws.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FollowerController {

    @Autowired
    private FollowerRepository followerRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/followers/{userId}")
    public ResponseEntity allFollowers(@PathVariable("userId") long userId) {
        List<Long> ids = followerRepository.findFollowerIdByUserId(userId);
        Iterable<User> followers = userRepository.findAll(ids);

        return new ResponseEntity<>(followers, HttpStatus.OK);
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
