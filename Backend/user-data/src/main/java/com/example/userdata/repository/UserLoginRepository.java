package com.example.userdata.repository;

import com.example.userdata.model.User;
import com.example.userdata.model.UserLogin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserLoginRepository extends MongoRepository<UserLogin, String> {

}
