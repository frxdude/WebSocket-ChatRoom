import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SockJS from 'sockjs-client'; // Note this line
import Stomp from 'stompjs';
import MyMessage from '../components/MyMessage.js';
import TheirMessage from '../components/TheirMessage.js';
import JoinScreen from '../components/JoinScreen.js';
import WaterMark from '../components/WaterMark.js';

const socket = new SockJS('/B180910040');
const stompClient = Stomp.over(socket);
const headers = {"Access-Control-Allow-Origin": "*",
                "Content-Type": "text/event-stream; charset=UTF-8"};
const MainScreen = (props) => {
    const {roomName, username} = (props.location && props.location.state) || {};
    const [text, setText] = useState("");
    const [joined, setJoined] = useState(false);
    const [messages, setMessages] = useState([]);
    const handleValue = (e) => {
        setText(e.target.value);
    }
    const handleSend = () => {
        var data = {
            room: roomName,
            sender: username,
            content: text,
            type: "CHAT" 
        }
        stompClient.send(`/lab3/send/${roomName}`, {}, JSON.stringify(data));
        setText("");
    }
    const handleLeave = () => {
        var data = {
            room: roomName,
            sender: username,
            content: text,
            type: "LEAVE"
        }
        stompClient.send(`/lab3/send/${roomName}`, {}, JSON.stringify(data));
    }
    useEffect(() => {
      let isMounted = true;
      if (isMounted)
      stompClient.connect(headers, () => {
           stompClient.subscribe(
            `/cs314/${roomName}`, onmessage, headers,
          );
        },onunhandledrejection);
      return () => { isMounted = false };
      }, []);

    socket.onopen = function() {
      console.log('open');
      var data = {
          room: roomName,
          sender: username,
          type: "JOIN" 
      }

    stompClient.send("/lab3/register", {}, JSON.stringify(data));
    };

    socket.onmessage = function(e) {
        const json = JSON.parse("{"+e.data.split("{")[1].slice(0,-1));
        // setMessage({ sender: json.sender, message: json.content });
        const temp = {sender: json.sender, message: json.content };
        console.log(json.type);
        if(json.type === 'JOIN')
        {
          let data = {sender: "System", message: "Welcome "+json.sender, room: json.room, type: "CHAT" };
          stompClient.send(`/lab3/send/${json.room}`, {}, JSON.stringify(data));
          setMessages([...messages, {sender: "System", message: "Welcome "+json.sender, room: json.room }]);
        }
        else if(json.type === 'CHAT')
        {
          setMessages([...messages, temp]);
        }
        else if(json.type === 'LEAVE')
          stompClient.unsubscribe("sub-0");
    };
    
    socket.onclose = function() {
        console.log('close');
    };
    socket.onunhandledrejection = function() {
      console.log("CANT CONNEC TO SOCKET");
    }
    return (
        <div style={styles.container}>
            room id: {roomName} 
            username: {username}
            {/* {
              !joined && <JoinScreen setJoined={setJoined}/>
            } */}
            <div style={{flexDirection:"column",display:"flex", height: 525, overflowY: "scroll"}}>
            {
              messages.length > 0 && messages.map((item, key) => {
                return(
                  <div key={key}>
                    {
                      (item.sender  == username)?
                        <MyMessage message = {item.message}/>
                        :
                        <TheirMessage message = {item.message}/>
                    }
                  </div>
                );
              })
            }
            </div>
            <div style={styles.bottomContainer}>
              <TextField
                variant="outlined"
                margin="normal"
                size="small"
                // fullWidth
                // halfWidth
                label="Message"
                name="message"
                autoFocus
                multiline
                rowsMax={4}
                value={text}
                onChange={handleValue}
              />
              <Button
                // fullWidth
                size="small"
                variant="contained"
                color="primary"
                onClick={handleSend}
                disabled={text == "" ? true : false}
              >
                Send
              </Button>
              <Button
                // fullWidth
                size="small"
                variant="contained"
                color="secondary"
                onClick={handleLeave}
              >
                Leave
              </Button>
            </div>
            <WaterMark/>
        </div>
    );
}
 
const styles = {
    container: {
      paddingTop: 60,
    },
    joinContainer: {
      height: "100vh",
      width: "100%",
      backgroundColor: "black",
      zIndex: 200,
    },
    bottomContainer: {
      backgroundColor: "white",
      width: "40%",
      left: "50%",
      transform: 'translateX(-50%)',
      position: "absolute",
      bottom: 20,
      display: "flex",
      flexDirection: "column",
    }
}
export default MainScreen;