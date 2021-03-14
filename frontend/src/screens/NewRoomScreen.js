import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import history from '../history.js'
import Watermark from '../components/WaterMark.js'
import MyAlert from '../components/MyAlert.js';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(https://cdn.pocket-lint.com/assets/images/151711-apps-feature-best-zoom-backgrounds-fun-virtual-backgrounds-for-zoom-meetings-image1-5a8dysaweh.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper1: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewRoomScreen(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    text: "",
    type: ""
  });
  const [values, setValues] = useState(
    {
      username: "",
      roomName: "",
      roomPassword: "",
      userLimit: 10
    }
  );

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({
      open: false,
      text: "",
      type: ""
    });
  };

  const createHandle = () => {
    axios
    .post(
      '/room',
      values,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    )
    // public static final int ROOM_CREATED = 1; // tested
    // public static final int ROOM_DOESNT_EXIST = 2; // tested
    // public static final int ROOM_ALREADY_EXISTS = 3; // tested
    // public static final int ROOM_DELETED = 4; // tested
    // public static final int ROOM_NOT_FOUND = 5; // tested
    // public static final int ROOM_PASSWORD_INCORRECT = 6; // tested
    // public static final int USER_ALREADY_EXISTS = 7; // tested
    // public static final int NEW_USER = 8; // tested
    .then(response => {
      var messageCode = response.data.messageCode;
      if(messageCode == 1)
      {
        history.push('/MainScreen', values);
        setAlert({
          text: "Амжилттай үүслээ",
          type: "success",
          open: true,
        });
      }
      else if(messageCode == 3)
        setAlert({
          text: "Ийм нэртэй өрөө аль хэдийн үүссэн байна",
          type: "info",
          open: true,
        });
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={12} square style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Chathouse
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Өрөөний нэр"
              name="roomName"
              autoFocus
              // error ={values.roomName.length === 0 ? true : false }
              value={values.roomName}
              onChange={handleValues}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Орох хүний дээд хязгаар"
              name="userLimit"
              // error ={values.userLimit.length === 0 ? true : false }
              value={values.userLimit}
              onChange={handleValues}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Нууц үг"
              name="roomPassword"
              type="password"
              // error ={values.roomPassword.length === 0 ? true : false}
              value={values.roomPassword}
              onChange={handleValues}
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={createHandle}
            >
              Нээх
            </Button>
          </form>
        </div>
      </Grid>
      <Watermark/>
      <MyAlert alert={alert} handleClose={handleAlertClose}/>
    </Grid>
  );
}