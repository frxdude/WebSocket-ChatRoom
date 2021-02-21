package com.cs314.lab3.Repository;

import com.cs314.lab3.Model.RoomUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomUserRepository extends JpaRepository<RoomUser, Long> {

    public static final String IS_AvailableToJoin =
            "SELECT * FROM room_users WHERE room_id = :roomId " +
                    "AND username = :username";

    public RoomUser findByRoomId(long roomId);
    public List<RoomUser> findByUsername(String username);

    @Query(value = IS_AvailableToJoin, nativeQuery = true)
    public RoomUser isAvailableToJoin(@Param("username") String username, @Param("roomId") long roomId);

}
