
-- INIT --
ALTER TABLE room_users ADD CONSTRAINT fk_ru_roomid FOREIGN KEY (room_id) REFERENCES rooms(id);
ALTER TABLE room_users ADD CONSTRAINT fk_ru_userid FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE room_history ADD CONSTRAINT fk_rh_roomuserid FOREIGN KEY (room_user_id) REFERENCES room_users(id);
ALTER TABLE rooms ADD CONSTRAINT fk_r_createduserid FOREIGN KEY (created_user_id) REFERENCES users(id);


SELECT * FROM users;
SELECT * FROM rooms;
SELECT * FROM room_history;
SELECT * FROM room_users;

DROP TABLE room_users;
DROP TABLE room_history;
DROP TABLE rooms;
DROP TABLE users;

-- Queries --
SELECT * FROM room_users WHERE room_id = (SELECT 1 FROM rooms WHERE room_name = 'hi') AND user_id = 1;