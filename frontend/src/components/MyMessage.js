import React from 'react';

const MyMessage = (props) => {
    return ( 
        <div style={{float:"right", maxWidth:"40%", wordWrap: "break-word", marginTop:5, padding: 10, borderTopRightRadius:20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, backgroundColor:"red"}}>
            {props.message}
        </div>
     );
}
const styles = {
    watermark: {
        bottom: 5,
        right: 5,
        opacity: 0.5,
        color: "white",
        zIndex: 99
       }
}
 
export default MyMessage;