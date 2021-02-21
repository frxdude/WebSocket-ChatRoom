/**
 * Author_code: B180910040
 * Author_name: I.Sainjargal
 * Created_Date&Time: 2021/2/20 23:47
 * Last_Modified_Date&Time: 2021/2/21 03:31
 * Lab: 2-5
 */
package com.cs314.lab3.Repository;

import com.cs314.lab3.Model.RoomHistory;
import com.cs314.lab3.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface RoomHistoryRepository extends JpaRepository<RoomHistory, Long> {

//    public static final String IS_AvailableToJoin =
//            "SELECT EXISTS(SELECT user_id, password FROM user_auth ua " +
//                    "WHERE ua.user_id = :userId AND ua.password = :password)";
//
//    @Query(value = IS_AvailableToJoin, nativeQuery = true)
//    public BigInteger toLogin(@Param("userId") long userId, @Param("roomId") long roomId);
//    public boolean isAvailableToJoin(long userId, long roomId);
}
