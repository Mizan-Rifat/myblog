import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link, Paper } from '@material-ui/core';
import PostDialog from '../pages/user/userPosts/PostDialog';
import DeleteDialog from '../pages/user/userPosts/DeleteDialog';


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

    const [openDialog, setOpenDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

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
                <>
                    <div className={classes.actions}>
                        <Button 
                            variant='contained' 
                            color='info' 
                            size='small' 
                            style={{marginRight:5}}
                            onClick={()=>{setOpenDialog(true)}}
                        >
                            Edit
                        </Button>
                        <Button 
                            variant='contained' 
                            color='secondary' 
                            size='small'
                            onClick={()=>{setOpenDeleteDialog(true)}}
                        >
                            Delete
                        </Button>
                    </div>

                    <PostDialog

                        open={openDialog}
                        setOpen={setOpenDialog}
                        post={post}

                    />

                    <DeleteDialog
                        open={openDeleteDialog}
                        setOpen={setOpenDeleteDialog}
                        postId={post.id}
                    />
                </>
            }


        </Paper>
    )
}
