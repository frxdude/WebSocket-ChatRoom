package com.cs314.lab3.Model;

import javax.persistence.*;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nickname;
    private String username;
    private String createdDate;
    private long roomId;
    private boolean isNew;

    public User() {
    }

    public User(long id, String nickname, String username, String createdDate, long roomId, boolean isNew) {
        this.id = id;
        this.nickname = nickname;
        this.username = username;
        this.createdDate = createdDate;
        this.roomId = roomId;
        this.isNew = isNew;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public long getRoomId() {
        return roomId;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }

    public boolean isNew() {
        return isNew;
    }

    public void setNew(boolean aNew) {
        isNew = aNew;
    }
}
