import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        padding:5,
        margin:10,
    },
    name:{
        fontWeight:700,
        marginBottom:0
    }
}));

export default function Comment({comment}) {
const classes = useStyles();

    return (
        <div className={classes.root}>
            <p className={classes.name}>
                {comment.name}
            </p>
            <small>{comment.email}</small>

            <p>{comment.body}</p>
            



        </div>
    )
}
