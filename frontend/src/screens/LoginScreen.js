import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import history from '../history.js'
import Watermark from '../components/WaterMark.js'
import { StarRateSharp } from '@material-ui/icons';

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
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

  const [values, setValues] = useState(
    {
      username: "",
      roomId: ""
    }
  );

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandle = () => {
    if(values.roomId == 21 && values.username == "frx")
    {
      history.push('/MainScreen', values);
    }
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
            Нэвтрэх
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Өрөөний дугаар"
              name="roomId"
              autoFocus
              value={values.roomId}
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
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={loginHandle}
            >
              Үргэлжлүүлэх
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
      <Watermark/>
    </Grid>
  );
}