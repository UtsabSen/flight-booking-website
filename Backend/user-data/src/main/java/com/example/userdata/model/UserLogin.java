package com.example.userdata.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "flight-login")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserLogin {

    @Id
    private String id;

    private String email;
    private String password;
}
