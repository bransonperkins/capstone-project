package com.win2020.gaminglounge.controllers;

import com.win2020.gaminglounge.models.User;
import com.win2020.gaminglounge.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Cross Origin will connect React App to the SpringBoot App
// SpringBoot app will start and run on port 8080 but open port 3000 to see what our user will see
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }
}
