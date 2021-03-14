/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.Repository;

import com.cs314.lab3.Model.RoomHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomHistoryRepository extends JpaRepository<RoomHistory, Long> {

    public static final String GET_HistoryByRoomId =
            "SELECT * FROM room_history rh INNER JOIN room_users ru " +
                    "ON rh.room_user_id = ru.id WHERE ru.room_id = :roomId";

    @Query(value = GET_HistoryByRoomId, nativeQuery = true)
    public List<RoomHistory> getHistoryByRoomId(@Param("roomId") long roomId);
}
