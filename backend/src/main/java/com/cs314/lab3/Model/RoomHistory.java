package com.cs314.lab3.Model;

import javax.persistence.*;

@Entity
@Table(name = "RoomHistory")
public class RoomHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long roomId;
    private long userId;
    private String date;
    private String text;

    public RoomHistory() {
    }

    public RoomHistory(long id, long roomId, long userId, String date, String text) {
        this.id = id;
        this.roomId = roomId;
        this.userId = userId;
        this.date = date;
        this.text = text;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
