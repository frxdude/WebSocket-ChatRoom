/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.DTO;

public class JoinDTO {
    private String username;
    private long roomId;

    public JoinDTO() {
    }

    public JoinDTO(String username, long roomId) {
        this.username = username;
        this.roomId = roomId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getRoomId() {
        return roomId;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }
}
