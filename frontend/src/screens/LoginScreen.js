import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import history from '../history.js'
import Watermark from '../components/WaterMark.js'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import connect from '../helper/Sock.js'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(https://techcrunch.com/wp-content/uploads/2020/03/getty-video-call-chat.jpg?w=1390&crop=1)`,
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

export default function LoginScreen(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };


  const [values, setValues] = useState(
    {
      username: "",
      roomName: "",
      password: ""
    }
  );

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandle = () => {
    axios
    .post(
      '/join',
      values,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    )
    .then(response => {
      if(response.data.messageCode == 8)
        history.push('/MainScreen', values);
      else if(response.data.hasPassword === true)
        handleModal(true);
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
              value={values.roomname}
              onChange={handleValues}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Нэвтрэх нэр"
              name="username"
              value={values.username}
              onChange={handleValues}
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginHandle}
            >
              Харилцах
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Шинээр өрөө нээх"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => handleModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper1}>
            <h2 id="transition-modal-title">Тухайн өрөө нь нууц үгээр хамгаалагдсан байна.</h2>
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              required
              fullWidth
              label="Өрөөний нууц үг"
              name="password"
              value={values.password}
              onChange={handleValues}
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginHandle}
            >
              Confirm
            </Button>
          </div>
        </Fade>
      </Modal>
      <Watermark/>
    </Grid>
  );
}