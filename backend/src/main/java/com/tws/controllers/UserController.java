package com.tws.controllers;

import com.tws.entities.User;
import com.tws.repositories.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(value = "用户信息相关")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @ApiOperation("用户登录")
    @GetMapping("/user")
    public ResponseEntity<?> login(String name, String password) {
        User user = userRepository.findByNameAndPassword(name, password);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }

        return new ResponseEntity<>(user, HttpStatus.NO_CONTENT);
    }
    @ApiOperation("查找全部用户")
    @GetMapping("/users")
    public ResponseEntity<?> users() {
        List<User> users = (List<User>) userRepository.findAll();

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}
