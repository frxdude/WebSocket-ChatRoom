/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.Repository;

import com.cs314.lab3.Model.Room;
import com.cs314.lab3.Model.RoomUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    public static final String IS_PasswordCorrect =
            "SELECT * FROM rooms WHERE id = :roomId " +
                    "AND room_password = :roomPassword";

    public Room findByRoomName(String roomName);

    @Query(value = IS_PasswordCorrect, nativeQuery = true)
    public Room isPasswordCorrect(@Param("roomPassword") String roomPassword, @Param("roomId") long roomId);
}
