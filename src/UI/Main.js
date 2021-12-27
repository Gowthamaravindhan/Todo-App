import React from "react";
import {makeStyles} from '@material-ui/core';
import {CssBaseline} from '@material-ui/core';

import Header from "./Header";


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url('https://image.freepik.com/free-photo/dark-wall-empty-room-with-plants-floor-3d-rendering_41470-3847.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#5c6bc0',
    },
  }));

  export default function App() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
      </div>
    );
  }