import React, { createContext, useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from '@material-ui/core';
import Avatar from '../../components/Avatar';
import CompContainer from '../../components/CompContainer';
import PostCard from '../../components/PostCard';
import useUser from '../../customHooks/useUser';
import { currentUserContext } from '../../App';


const useStyles = makeStyles((theme) => ({
    root:{
        margin:'20px 0px'
    },
    paper:{
        padding:10,
        margin:'10px 0'
    },
    personal:{
        textAlign:'center'
    }
}));

export const PostsContext = createContext();


export default function User(props) {


    const classes = useStyles();
       
    const currentUser = useContext(currentUserContext);

    const userId = props.match.url === '/profile' ? currentUser.user.id : props.match.params.id;

    const [state] = useUser(userId)

    const {user,posts,loading,fetching} = state;


    return (
        <Grid container spacing={1} className={classes.root}>

            {
                fetching ? 

                <p>fetching</p>

                :
                <>
                    <Grid item sm={4}>

                        <Paper className={classes.paper}>

                            <div className={classes.personal}>
                                <Avatar 
                                    src="" 
                                    className={classes.large} 
                                />
                                <h3>{user.name}</h3>
                                <small>{user.email}</small>
                            </div>
                            <div className="">

                                <div className="">
                                    <h4>Location</h4>
                                    <p>{user.address.street},{user.address.city}</p>
                                </div>
                                <div className="">
                                    <h4>Website</h4>
                                    <p>{user.website}</p>
                                </div>
                                <div className="">
                                    <h4>Company</h4>
                                    <p>{user.company.name}</p>
                                </div>
                                <div className="">
                                    <h4>Phone</h4>
                                    <p>{user.phone}</p>
                                </div>

                            </div>

                            

                        </Paper>

                    </Grid>
                    
                    <Grid item sm={8}>
                        <CompContainer title={`${user.name}'s Posts`}>

                            {
                                currentUser.user.id == userId &&
                            
                                <div className="" style={{textAlign:'right'}} >
                                    <Button 
                                        variant='contained' 
                                        color='primary' 
                                        size='small'
                                    >
                                        Crete new Post
                                    </Button>
                                </div>
                            }

                            {
                                posts.map(post=>(
                                
                                    <PostCard 
                                        post={post}
                                        action={currentUser.user.id == userId} 
                                    />
                                ))
                            }
                        </CompContainer>
                        
                    </Grid>

                </>
            }

            
            
        </Grid>
    )
}

