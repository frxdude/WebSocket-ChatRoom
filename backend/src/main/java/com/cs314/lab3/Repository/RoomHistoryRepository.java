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
import org.springframework.stereotype.Repository;

@Repository
public interface RoomHistoryRepository extends JpaRepository<RoomHistory, Long> {
}
