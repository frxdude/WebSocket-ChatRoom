
USE lab3;
-- INIT --
ALTER TABLE room_users ADD CONSTRAINT fk_ru_roomid FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE;
ALTER TABLE room_history ADD CONSTRAINT fk_rh_roomuserid FOREIGN KEY (room_user_id) REFERENCES room_users(id);
# ALTER TABLE rooms ADD CONSTRAINT fk_r_createduserid FOREIGN KEY (created_user_id) REFERENCES room_users(id);
ALTER TABLE rooms ADD CONSTRAINT uniq_roomname UNIQUE (room_name);
ALTER TABLE room_users ADD CONSTRAINT uniq_riduid UNIQUE (room_id, username);


SELECT * FROM rooms;
SELECT * FROM room_history;
SELECT * FROM room_users;

DROP TABLE room_users;
DROP TABLE room_history;
DROP TABLE rooms;

UPDATE rooms SET id = 1 WHERE created_user_id=100;
-- Testing --
SELECT * FROM room_users WHERE room_id = (SELECT id FROM rooms WHERE room_name = 'hi') AND (SELECT id FROM lab3.users WHERE username = 'hi') = 1;
INSERT INTO users(id,username) VALUES(1,'B180910040');
INSERT INTO rooms(id,created_user_id, room_name, room_password, user_limit) VALUES(1,1,'test','test',3);
INSERT INTO room_users(id, joined_date, room_id, user_id) VALUES(1,'2021-02-22',1,1);
DELETE FROM users WHERE id = 1;
DELETE FROM room_users WHERE id = 1;
DELETE FROM rooms WHERE id = 1;
