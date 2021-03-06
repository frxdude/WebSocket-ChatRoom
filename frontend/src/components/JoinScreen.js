import { Button } from '@material-ui/core';
import global from '../assets/global.gif'
import React from 'react';

const JoinScreen = (props) => {
    return ( 
        <div style={styles.join}>
            <img src={global} alt="join"  height="80%" style={{
                positio: "absolute",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto" }}/>
            <Button style={{position: "absolute", top: "50%", left:"50%"}} variant="contained" color="primary" onClick={() => {props.setJoined(true)}}>Join Conversation</Button>
        </div>
     );
}
const styles = {
    join: {
        zIndex: 1
       }
}
 
export default JoinScreen;