package com.example.userdata.controller;

import com.example.userdata.model.User;
import com.example.userdata.model.UserLogin;
import com.example.userdata.repository.UserLoginRepository;
import com.example.userdata.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserLoginRepository userLoginRepository;

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/c-user")
    public List<UserLogin> getUsersLogin(){
        return userLoginRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUsers(@PathVariable String id){
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/add-user")
    public User setUser(@RequestBody User user){
        return userRepository.save(user);
    }


//    public User findByEmail(String email){
//        return ;
//    }

    @PostMapping("/login")
    public User putUsers(@RequestBody UserLogin userLogin){
        List<User> userDB = userRepository.findAll();
        for (User ob: userDB) {
            if(ob.getEmail().equals(userLogin.getEmail()) && ob.getPassword().equals(userLogin.getPassword())){
                return ob;
            }
        }
        User emptyUser = new User();
        emptyUser.setId("");
        emptyUser.setFirstName("");
        emptyUser.setLastName("");
        emptyUser.setGender("");
        emptyUser.setDob("");
        emptyUser.setPhone(0L);
        emptyUser.setUsername("");
        emptyUser.setEmail("");
        emptyUser.setPassword("");
        emptyUser.setRole("");
        return emptyUser;
    }

    @PutMapping("/update-user")
    public User putMapping(@RequestBody User newUser){
        User oldUser = userRepository.findById(newUser.getId()).orElse(null);
        oldUser.setFirstName(newUser.getFirstName());
        oldUser.setLastName(newUser.getLastName());
        oldUser.setGender(newUser.getGender());
        oldUser.setDob(newUser.getDob());
        oldUser.setPhone(newUser.getPhone());
        oldUser.setUsername(newUser.getUsername());
        oldUser.setEmail(newUser.getEmail());
        oldUser.setPassword(newUser.getPassword());
        oldUser.setRole(newUser.getRole());
        userRepository.save(oldUser);
        return oldUser;
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable String id){
        userRepository.deleteById(id);
        return id;
    }
}
