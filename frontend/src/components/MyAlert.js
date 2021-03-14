import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const MyAlert = (props) => {
    return ( 
        <Snackbar open={props.alert.open} autoHideDuration={1500} onClose={props.handleClose}>
         <Alert severity={props.alert.type} onClose={props.handleClose}>{props.alert.text}</Alert>
       </Snackbar>
     );
}
export default MyAlert;