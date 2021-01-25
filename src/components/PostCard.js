import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        padding:20,
        margin:'10px 0',
    },
    actions:{
        textAlign:'right'
    }
}));

export default function PostCard({post}) {
const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Link
                variant="h6"
                href='#'
                >
                {post.title}
            </Link>

            <p>{post.body}</p>


        </Paper>
    )
}
