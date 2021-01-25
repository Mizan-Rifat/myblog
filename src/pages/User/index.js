import React, { createContext, useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from '@material-ui/core';
import Avatar from '../../components/Avatar';
import CompContainer from '../../components/CompContainer';
import PostCard from '../../components/PostCard';
import LoadingCircle from '../../components/LoadingCircle';
import useUser from '../../customHooks/useUser';
import { currentUserContext } from '../../App';
import PostDialog from './userPosts/PostDialog';
import useUserPosts from '../../customHooks/useUserPosts';
import PersonalInfo from './PersonalInfo';


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

    const [userState] = useUser(userId)

    const [postState,createPost,updatePost,deletePost] = useUserPosts(userId)

    const {user,loading,fetching} = userState;

    const {posts} = postState;


    const [openDialog, setOpenDialog] = useState(false);

   

    return (
        <Grid container spacing={1} className={classes.root}>

            {
                fetching ? 

                <LoadingCircle />


                :
                <>
                    <Grid item sm={4}>

                        <PersonalInfo user={user} />

                    </Grid>
                    
                    <PostsContext.Provider value={{postState,createPost,updatePost,deletePost}}>
                        <Grid item sm={8}>
                            <CompContainer title={`${user.name}'s Posts`}>

                                {
                                    currentUser.user.id == userId &&
                            
                                    <div className="" style={{textAlign:'right'}} >
                                        <Button 
                                            variant='contained' 
                                            color='primary' 
                                            size='small'
                                            onClick={()=>setOpenDialog(true)}
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

                        <PostDialog 
                            open={openDialog}
                            setOpen={setOpenDialog}
                        />

                    </PostsContext.Provider>
                </>
            }

            
            
        </Grid>
    )
}

