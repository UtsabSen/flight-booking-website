package com.example.userdata.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "flight-users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String gender;
    private String dob;
    private Long phone;
    private String username;
    private String email;
    private String password;
    private String role;

}
