import React, { useEffect, useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../components/PostCard';
import axios from 'axios';
import usePosts from '../../customHooks/usePosts';
import { Button, CircularProgress } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    lmBtn:{
        display:'flex',
        justifyContent:'center'
    }
}));

export default function Landing() {

    const classes = useStyles();

    const [posts, loadMore] = usePosts();


    return (
        <div>

            {
                posts.fetching ? 

                 <p>Fetching</p>

                 :

                posts.posts.map(post=>(
                    <PostCard key={post.id}  post={post} />
                ))
            }

            {
                posts.page < 10 &&

                <div className={classes.lmBtn} style={{  padding: '25px 0' }}>
                    <div style={{position: 'relative',display:'inline-block'}}>

                        <Button
                            variant='contained'
                            color='primary'
                            style={{ width: '200px', borderRadius: '0px' }}
                            onClick={loadMore}
                            disabled={posts.fetching || posts.loading}
                        >
                            load more
                        </Button>
                        {
                            posts.fetching || posts.loading ?

                            <CircularProgress
                                size={24}
                                style={{
                                    position: 'absolute',
                                    left: '89px',
                                    top: '6px',
                                }}
                            />
                            : ''
                        }
                    </div>
                </div>
            }

            
            
        </div>
    )
}
