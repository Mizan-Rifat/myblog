import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    avatar:{
        overflow: 'hidden',
        borderRadius: '50%',
        height: '100px',
        width: '100px',
        background: 'red',
        display: 'inline-block',
    },
    img:{
        height:100
    }
}));

export default function Avatar() {
const classes = useStyles();

    return (
            <div className={classes.avatar}>
                <img src="/avatar.png" alt="" className={classes.img} />
            </div>
            
    )
}
