/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.DTO;

import com.cs314.lab3.Model.User;

public class JoinReturnDTO {
    private boolean loggedIn;
    private User user;

    public JoinReturnDTO() {
    }

    public JoinReturnDTO(boolean loggedIn, User user) {
        this.loggedIn = loggedIn;
        this.user = user;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
