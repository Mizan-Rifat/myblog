import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PostsContext } from '..';
import Notify from '../../../customHooks/useNotify'


const useStyles = makeStyles((theme) => ({
    textfield:{
        marginBottom:15
    },
    actions:{
        padding:'12px 24px'
    },
    root:{
        '& .MuiDialog-paper':{
            minWidth:'650px'
        }
    },
    formDisable:{
        pointerEvents:'none',
        opacity:'.5'
    },
    progressContainer:{
        position: 'absolute',
        top: '35%',
        left: '44%',
    },
    dNone:{
        display:'none'
    }
}));



export default function PostForm({handleClose,post}) {
    const classes = useStyles();

    const toast = Notify();

    const {postState,createPost,updatePost} = useContext(PostsContext);


    const [formData, setFormData] = useState({
        title: post ? post.title : '',
        body: post ? post.body : '',
        userId:2
    })


    const handleChange = (e,field)=>{

        setFormData({
            ...formData,
            [field] : e.target.value
        })
    }

    const handleSubmit =(e)=>{
      e.preventDefault()

      if(post){
          updatePost({
              ...formData,
              id:post.id
          })
          .then(()=>{
            handleClose();
            toast('Post Updated.','success')
          })
        .catch(error=>{
            handleClose();
            toast('This post can not be updated.','error')
        })
      }else{
        createPost(formData)
        .then(()=>{
            handleClose();
            toast('Post Created.','success')
        })
        .catch(error=>{
            handleClose();
            toast('Something went wrong.','error')
        })
      }

    }

  return (
    <div style={{position:'relative'}}>

        <form onSubmit={handleSubmit} className={clsx({[classes.formDisable] : postState.loading })}>

            <TextField 
                fullWidth
                required
                label='Post Title'
                variant="outlined"
                className={classes.textfield}
                onChange={(e)=>handleChange(e,'title')}
                value={formData.title}
            />

            <TextField
                required
                id="standard-required" 
                multiline
                fullWidth
                variant="outlined"
                rows={4}
                label='Post Description'
                className={classes.textfield}
                onChange={(e)=>handleChange(e,'body')}
                value={formData.body}
            />


            <div className="" style={{textAlign:'right'}}>
            
                <Button variant='contained' type='submit' color='Primary'>Submit</Button>

            </div>
        </form>

        <div className={clsx({[classes.progressContainer] : postState.loading,[classes.dNone] : !postState.loading })}>
            <CircularProgress />
        </div>

    </div>
  );
}
