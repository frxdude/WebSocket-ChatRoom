package com.cs314.lab3.Model;

import javax.persistence.*;

@Entity
@Table(name = "Rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String roomName;
    private String roomPassword;
    private int userLimit;
    private long createdUserId;

    public Room() {
    }

    public Room(long id, String roomName, String roomPassword, int userLimit, long createdUserId) {
        this.id = id;
        this.roomName = roomName;
        this.roomPassword = roomPassword;
        this.userLimit = userLimit;
        this.createdUserId = createdUserId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getRoomPassword() {
        return roomPassword;
    }

    public void setRoomPassword(String roomPassword) {
        this.roomPassword = roomPassword;
    }

    public int getUserLimit() {
        return userLimit;
    }

    public void setUserLimit(int userLimit) {
        this.userLimit = userLimit;
    }

    public long getCreatedUserId() {
        return createdUserId;
    }

    public void setCreatedUserId(long createdUserId) {
        this.createdUserId = createdUserId;
    }
}
