import React from 'react';

const TheirMessage = (props) => {
    return ( 
        <div style={{float:"left", maxWidth:"40%", wordWrap: "break-word", marginTop:5, padding: 10, borderTopRightRadius:20, borderBottomRightRadius:20, borderTopLeftRadius: 20, backgroundColor:"green"}}>
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
 
export default TheirMessage;