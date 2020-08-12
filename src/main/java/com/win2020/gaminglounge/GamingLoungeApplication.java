package com.win2020.gaminglounge;

import com.win2020.gaminglounge.models.User;
import com.win2020.gaminglounge.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GamingLoungeApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(GamingLoungeApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    // test to make sure users can be added to the database
    @Override
    public void run(String... args) throws Exception {
        this.userRepository.save(new User("mizew", "bransonperkins@gmail.com"));
        this.userRepository.save(new User("nelley", "noellebrinkley@gmail.com"));
    }
}
