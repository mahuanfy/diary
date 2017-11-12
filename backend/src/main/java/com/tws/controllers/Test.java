package com.tws.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Api(value = "Test", description = "this is a simple description")
@RestController
public class Test {

    @ApiOperation("this is a method description")
    @GetMapping("index")
    public ResponseEntity<?> index(String index) {
        Map body = new HashMap();
        body.put("data", 222222);
        return new ResponseEntity<>(index, HttpStatus.OK);
    }
}
