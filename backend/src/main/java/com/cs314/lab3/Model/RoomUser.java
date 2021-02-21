package com.cs314.lab3.Model;

import javax.persistence.*;

@Entity
@Table(name = "RoomUsers")
public class RoomUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long roomId;
    private long userId;
    private String joinedDate;

    public RoomUser() {
    }

    public RoomUser(long id, long roomId, long userId, String joinedDate) {
        this.id = id;
        this.roomId = roomId;
        this.userId = userId;
        this.joinedDate = joinedDate;
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

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getJoinedDate() {
        return joinedDate;
    }

    public void setJoinedDate(String joinedDate) {
        this.joinedDate = joinedDate;
    }
}
