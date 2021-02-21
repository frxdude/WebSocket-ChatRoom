package com.cs314.lab3.Model;

import javax.persistence.*;

@Entity
@Table(name = "RoomHistory")
public class RoomHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long roomUserId;
    private String date;
    private String text;

    public RoomHistory() {
    }

    public RoomHistory(long id, long roomUserId, String date, String text) {
        this.id = id;
        this.roomUserId = roomUserId;
        this.date = date;
        this.text = text;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getRoomUserId() {
        return roomUserId;
    }

    public void setRoomUserId(long roomUserId) {
        this.roomUserId = roomUserId;
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
