import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompContainer from '../components/CompContainer';
import { TextField,Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    textfield:{
        marginBottom:15
    },
    actions:{
        textAlign:'right'
    }
}));

export default function CreatePost() {
const classes = useStyles();

    return (
        <CompContainer title='Create New Post'>

            <TextField 
                fullWidth
                label='Post Title'
                variant="outlined"
                className={classes.textfield}
            />

            <TextField
                id="standard-required" 
                multiline
                fullWidth
                variant="outlined"
                rows={4}
                label='Post Description'
                className={classes.textfield}
    
            />

            <div className={classes.actions}>
                <Button variant='contained' color='Primary'>Submit</Button>
            </div>

        </CompContainer>
    )
}
