import React, {useState, useEffect} from 'react';

const MyMessage = (props) => {
    const [recentSender, setRecentSender] = useState("");
    useEffect(()=>{
        setRecentSender(props.sender);
    });
    return ( 
        <div style={{display:"flex",flexDirection: "column", float:"right",maxWidth:"40%", }}>
            {
                console.log("Recent: ",recentSender),
                console.log("now sender: ",props.sender),
                recentSender != props.sender &&
                <div style={styles.sender}>
                    {props.sender}
                </div>
            }
            <div style={styles.message}>
                {props.message}
            </div> 
        </div>
     );
}
const styles = {
    container: {
        flexDirection: "column"
    },
    message: { 
        wordWrap: "break-word", 
        marginTop:5, 
        padding: 10, 
        borderTopRightRadius:20, 
        borderBottomLeftRadius: 20, 
        borderTopLeftRadius: 20, 
        backgroundColor:"red",
    },
    sender: {
        flex: "end",
        marginTop:5, 
    }
}
 
export default MyMessage;