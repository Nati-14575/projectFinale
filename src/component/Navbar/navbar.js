import { AppBar, ButtonGroup, Button, Toolbar, Typography, TextField, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import React from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search';

const useStyles= makeStyles({
    btn: {
        color: "white",
        fontSize:15,
        '&:hover': {
            backgroundColor: "blue",
            textDecoration: "underline"
        }
    },
    typo: {
        color: "white",
        fontWeight:"bold"
    },
    icon: {
        color: "white"
    },
    appBar: {
        backgroundColor: "#ffbf00",
    }
})

export default function navbar() {
    const classes= useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar color="primary" className="navBar">
                <div className = "top">
                <Typography className= { classes.typo } variant="h6" component="h1" gutterBottom>EWKET</Typography>
                <div className="navigation">
                    <Button className={classes.btn} href="/">Home</Button>
                    <Button className={classes.btn} href="/courses">Courses</Button>
                    <Button className={classes.btn} href="/forum">Forum</Button>
                    <Button className={classes.btn} href="/about">About Us</Button>
                    <Button className={classes.btn} href="/work">Work with Us</Button>
                </div>
                </div>
                <div className='bottom'>
                <SearchIcon className={classes.icon} fontSize="medium" />
                <TextField placeholder="search" type="string"/>
                <div className= "signUp">
                    <Button color="secondary" href="/login">Log In</Button>
                    <Button color="secondary" href="/signup">Sign Up</Button>
                </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}