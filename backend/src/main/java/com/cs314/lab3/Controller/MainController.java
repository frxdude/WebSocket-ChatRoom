/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.Controller;

import com.cs314.lab3.DTO.JoinDTO;
import com.cs314.lab3.DTO.JoinReturnDTO;
import com.cs314.lab3.Model.ChatMessage;
import com.cs314.lab3.Model.User;
import com.cs314.lab3.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/chat")
public class MainController {
    @Autowired
    UserRepository userRepo;

    @MessageMapping("/register")
    @SendTo("/cs314/public")
    public ChatMessage register(@Payload ChatMessage ch, SimpMessageHeaderAccessor headerAccessor){
        headerAccessor.getSessionAttributes().put("username", ch.getSender());
        return ch;
    }

    @MessageMapping("/send")
    @SendTo("/cs314/public")
    public ChatMessage sendMessage(@Payload ChatMessage ch){
        return ch;
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody JoinDTO joinDTO){
//        User theUser = userRepo.findByUsername(joinDTO.getUsername());
//        JoinReturnDTO responseData = new JoinReturnDTO();
//        if(theUser != null)
//        {
//            responseData.setLoggedIn(true);
//            responseData.setUser(theUser);
//            return new ResponseEntity<>(responseData, HttpStatus.OK);
//        }
//        responseData.setLoggedIn(false);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
