package com.cs314.lab3.Model;

import javax.persistence.*;

@Entity
@Table(name = "RoomUsers")
public class RoomUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long roomId;
    private String joinedDate;
    private String username;

    public RoomUser() {
    }

    public RoomUser(long id, long roomId, String joinedDate, String username) {
        this.id = id;
        this.roomId = roomId;
        this.joinedDate = joinedDate;
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getRoomId() {
        return roomId;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }

    public String getJoinedDate() {
        return joinedDate;
    }

    public void setJoinedDate(String joinedDate) {
        this.joinedDate = joinedDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
