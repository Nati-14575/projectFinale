import { TextField, Typography, Button } from '@material-ui/core'
import React, { useState, useEffect} from 'react'
import './login.css';
import { makeStyles } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const useStyle = makeStyles({
    input: {
        marginBottom: 20,
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        color: 'black'
    },
    typo: {
        fontSize: 30,
        margin: 20
    },
    submit: {
        margin: 20,
        width: '30%',
        alignSelf: 'center'
    }
})

export default function login() {
    const classes= useStyle();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    let handleSubmit = () => {
        console.log(email, password);
    }

    return (
        <div className="container">
            <div className="loginContainer">
                <Typography variant="h5" component="h3" className={classes.typo}>Login to your Ewket account</Typography>
                <form onSubmit={handleSubmit} noValidate autoComplete="off" className="loginForm">
                    <TextField className={classes.input} required label="Email" placeholder='Enter your email' type="email" variant="outlined" onChange={(event)=> setEmail(event.target.value)}/>
                    <TextField className={classes.input} required label="Password" placeholder='Enter your password' type="password" variant="outlined" onChange={(event)=> setPassword(event.target.value)}/>
                    <Button type="submit" color="primary" variant="contained" className={classes.submit} endIcon={<KeyboardArrowRightIcon />}>Log In</Button>
                </form>
                <div className="underForm">
                    <a href="#" style={{color: "red"}} className="link">Forgot Password?</a>
                    <a href="#" style={{color: "green"}} className="link">Create new account?</a>
                </div>
            </div>
        </div>
    )
}
