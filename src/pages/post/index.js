import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeaveCommentBox from './LeaveCommentBox';
import { Divider } from '@material-ui/core';
import { Link, Paper } from '@material-ui/core';
import Comment from './Comment';
import CompContainer from '../../components/CompContainer';
import LoadingCircle from '../../components/LoadingCircle';
import usePost from '../../customHooks/usePost';

const useStyles = makeStyles((theme) => ({
    root:{
        padding:20,
        margin:10,
    }
}));

export default function Post(props) {

    const classes = useStyles();

    const postID = props.match.params.id;
    

    const [post] = usePost(postID);


    return (
        <>

            {
                post.fetching ? 

                <LoadingCircle />

                :
                <CompContainer title='Post'>
                    <h4>
                        {post.post.title}
                    </h4>

                    <p>{post.post.body}</p>

                    <Divider style={{marginTop:50}}/>

                    <div className="">

                        <h3>Comments</h3>
                        {
                            post.comments.map(comment=>(
                                <Comment key={comment.id} comment={comment} />
                            ))
                        }
                    </div>

                    <LeaveCommentBox />
                </CompContainer>
            }
        </>
    )
}
