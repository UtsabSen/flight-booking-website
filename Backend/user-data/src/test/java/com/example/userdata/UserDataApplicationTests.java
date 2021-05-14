package com.example.userdata;

import static org.mockito.Mockito.when;
//import static org.junit.Assert.assertEquals;

import com.example.userdata.controller.UserController;
import com.example.userdata.model.User;
import com.example.userdata.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserDataApplicationTests {

    @Autowired
    private UserController userController;
    
    @MockBean
    private UserRepository userRepository;

    @Test
    public void contextLoads() {
        when(userRepository.findAll()).thenReturn(
                Stream.of(new User("", "Utsab", "Sen", "Male", "1999-06-10", 8768855268L, "utsab7", "utsabsen1999@gmail.com", "abcd123", "Customer"),
                        new User("","Arnab","Pratihar","Male","1998-07-06",8670907938L,"arnab6","arnab@gmail.com","pass123","Admin")
                ).collect(Collectors.toList())
        );
        Assertions.assertEquals(2, userController.getUsers().size());
    }

}
