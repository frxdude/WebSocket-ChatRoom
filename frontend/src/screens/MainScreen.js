import React, { Component } from 'react';

const MainScreen = (props) => {
    const {roomId, username} = (props.location && props.location.state) || {};
    return (
        <div style={styles.container}>
            room id: {roomId}
            username: {username}
        </div>
    );
}
 
const styles = {
    container: {
        paddingTop: 60
    }
}
export default MainScreen;