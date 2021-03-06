/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.DTO;

public class JoinReturnDTO {
    private boolean loggedIn;
    private boolean hasPassword;
    private int messageCode;
    private String message;

    public JoinReturnDTO() {
    }

    public JoinReturnDTO(boolean loggedIn, int messageCode, boolean hasPassword, String message) {
        this.loggedIn = loggedIn;
        this.messageCode = messageCode;
        this.hasPassword = hasPassword;
        this.message = message;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public int getMessageCode() {
        return messageCode;
    }

    public void setMessageCode(int messageCode) {
        this.messageCode = messageCode;
    }

    public boolean isHasPassword() {
        return hasPassword;
    }

    public void setHasPassword(boolean hasPassword) {
        this.hasPassword = hasPassword;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
