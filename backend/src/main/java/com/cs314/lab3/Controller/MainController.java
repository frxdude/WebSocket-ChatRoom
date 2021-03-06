/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.Controller;

import com.cs314.lab3.DTO.CreateRoomDTO;
import com.cs314.lab3.DTO.JoinDTO;
import com.cs314.lab3.DTO.JoinReturnDTO;
import com.cs314.lab3.DTO.PassCheckDTO;
import com.cs314.lab3.Model.ChatMessage;
import com.cs314.lab3.Model.Room;
import com.cs314.lab3.Model.RoomUser;
import com.cs314.lab3.Repository.RoomRepository;
import com.cs314.lab3.Repository.RoomUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MainController {
    @Autowired
    RoomRepository roomRepo;
    @Autowired
    RoomUserRepository roomUserRepo;

    public static final int ROOM_CREATED = 1; // tested
    public static final int ROOM_DOESNT_EXIST = 2; // tested
    public static final int ROOM_ALREADY_EXISTS = 3; // tested
    public static final int ROOM_DELETED = 4; // tested
    public static final int ROOM_NOT_FOUND = 5; // tested
    public static final int ROOM_PASSWORD_INCORRECT = 6; // tested
    public static final int USER_ALREADY_EXISTS = 7; // tested
    public static final int NEW_USER = 8; // tested

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    LocalDateTime now = LocalDateTime.now();

    @MessageMapping("/register/{roomName}")
    @SendTo("/cs314/{roomName}")
    public ChatMessage register(@Payload ChatMessage ch, SimpMessageHeaderAccessor headerAccessor
            ,@DestinationVariable String roomName) {
        headerAccessor.getSessionAttributes().put("username", ch.getSender());
        return ch;
    }

    @MessageMapping("/send/{roomName}")
    @SendTo("/cs314/{roomName}")
    public ChatMessage sendMessage(@Payload ChatMessage ch, @DestinationVariable String roomName) {
        System.out.println("my message is here " + ch.getContent());
        return ch;
    }

    @DeleteMapping("/room/{roomName}")
    public ResponseEntity<?> deleteRoom(@PathVariable String roomName) {
        Room tempRoom = roomRepo.findByRoomName(roomName);
        JoinReturnDTO responseData = new JoinReturnDTO();
        if (tempRoom != null) {
            roomRepo.delete(tempRoom);
            responseData.setMessage("Room deleted");
            responseData.setMessageCode(ROOM_DELETED);
            return new ResponseEntity<>(responseData, HttpStatus.OK);
        }
        responseData.setMessage("Room not found");
        responseData.setMessageCode(ROOM_NOT_FOUND);
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("/room")
    public ResponseEntity<?> createRoom(@RequestBody CreateRoomDTO body) {
        JoinReturnDTO responseData = new JoinReturnDTO();
        if (roomRepo.findByRoomName(body.getRoomName()) != null) {
            responseData.setLoggedIn(false);
            responseData.setMessage("Room already exists");
            responseData.setMessageCode(ROOM_ALREADY_EXISTS);
            return new ResponseEntity<>(responseData, HttpStatus.OK);
        }

        Room room = new Room();
        room.setRoomName(body.getRoomName());
        room.setRoomPassword(body.getRoomPassword());
        room.setUserLimit(body.getUserLimit());
        roomRepo.save(room);

        RoomUser roomUser = new RoomUser();
        roomUser.setUsername(body.getUsername());
        roomUser.setRoomId(room.getId());
        roomUser.setJoinedDate(dtf.format(now));
        roomUserRepo.save(roomUser);

        Room room1 = roomRepo.findById(room.getId()).orElse(null);
        room1.setCreatedUserId(roomUser.getId());
        roomRepo.save(room);

        if(room1.getRoomPassword() != "" && room1.getRoomPassword() != null)
            responseData.setHasPassword(true);
        responseData.setLoggedIn(true);
        responseData.setMessage("Room created");
        responseData.setMessageCode(ROOM_CREATED);
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody JoinDTO joinDTO) {
        String username = joinDTO.getUsername(),
                roomName = joinDTO.getRoomName();
        JoinReturnDTO responseData = new JoinReturnDTO();
        Room tempRoom = roomRepo.findByRoomName(roomName);

        if (tempRoom == null) {
            responseData.setMessage("Room doesn't exist");
            responseData.setMessageCode(ROOM_DOESNT_EXIST);
            responseData.setLoggedIn(false);
            return new ResponseEntity<>(responseData, HttpStatus.OK);
        }

        long roomId = tempRoom.getId();

        RoomUser rous = roomUserRepo.isAvailableToJoin(username, roomId);
        if (rous != null) {
            responseData.setMessage("User already exists");
            responseData.setMessageCode(USER_ALREADY_EXISTS);
            responseData.setLoggedIn(false);
            return new ResponseEntity<>(responseData, HttpStatus.OK);
        }

        String tempPasswordCheck = tempRoom.getRoomPassword();
        if(tempPasswordCheck != "" && tempPasswordCheck != null)
        {
            Room tempRoomCheck = roomRepo.isPasswordCorrect(joinDTO.getPassword(),roomId);
            if(tempRoomCheck == null)
            {
                responseData.setHasPassword(true);
                responseData.setLoggedIn(false);
                responseData.setMessage("Incorrect Password");
                responseData.setMessageCode(ROOM_PASSWORD_INCORRECT);
                return new ResponseEntity<>(responseData, HttpStatus.OK);
            }

        }

        RoomUser newRoomUser = new RoomUser();
        newRoomUser.setUsername(username);
        newRoomUser.setJoinedDate(dtf.format(now));
        newRoomUser.setRoomId(roomId);
        roomUserRepo.save(newRoomUser);

        responseData.setMessage("New User");
        responseData.setMessageCode(NEW_USER);
        responseData.setLoggedIn(true);
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }
}
