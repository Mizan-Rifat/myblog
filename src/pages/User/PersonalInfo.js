import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Avatar from '../../components/Avatar';

const useStyles = makeStyles((theme) => ({
 
    paper:{
        padding:20,
        margin:'10px 0'
    },
    personal:{
        textAlign:'center'
    },
    field:{
        marginBottom:5
    },
    value:{
        marginTop:0
    }
}));


export default function PersonalInfo({user}) {


    const classes = useStyles();


    return (

        <Paper className={classes.paper}>

            <div className={classes.personal}>
                <Avatar 
                    src="" 
                    className={classes.large} 
                />
                <h3>{user.name}</h3>
                <small>{user.username}</small>
            </div>

            <div className="">

                <div>
                    <h4 className={classes.field}>Email</h4>
                    <p className={classes.value}>{user.email}</p>
                </div>
                <div className="">
                    <h4 className={classes.field}>Location</h4>
                    <p className={classes.value}>{user.address.street},{user.address.city}</p>
                </div>
                <div className="">
                    <h4 className={classes.field}>Website</h4>
                    <p className={classes.value}>{user.website}</p>
                </div>
                <div className="">
                    <h4 className={classes.field}>Company</h4>
                    <p className={classes.value}>{user.company.name}</p>
                </div>
                <div className="">
                    <h4 className={classes.field}>Phone</h4>
                    <p className={classes.value}>{user.phone}</p>
                </div>

            </div>

        </Paper>
    )
}



