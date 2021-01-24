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

export default function PostCard({post,action=false}) {
const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Link
                variant="h6"
                href='#'
                >
                {post.title}
            </Link>
            <small>{}</small>

            <p>{post.body}</p>

            {
                action &&
                
                <div className={classes.actions}>
                    <Button variant='contained' color='info' size='small' style={{marginRight:5}}>Edit</Button>
                    <Button variant='contained' color='secondary' size='small'>Delete</Button>
                </div>
            
            }


        </Paper>
    )
}
