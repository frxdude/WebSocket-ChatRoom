import React from 'react';

const Watermark = () => {
    return ( 
        <div style={styles.watermark}>
            B180910040 И.Сайнжаргал
        </div>
     );
}
const styles = {
    watermark: {
        position: "fixed",
        bottom: 5,
        right: 5,
        opacity: 0.5,
        color: "white",
        zIndex: 99
       }
}
 
export default Watermark;