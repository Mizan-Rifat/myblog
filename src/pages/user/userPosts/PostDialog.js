import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PostForm from './PostForm'


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
    }
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function PostDialog({open,setOpen,post}) {

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.root}
      >

        <DialogTitle id="alert-dialog-title" onClose={handleClose}>
            {
              post ?
              'Update Post'
              :
              'Create New Post'
            }
          </DialogTitle>

        

          <DialogContent dividers>

            
            <PostForm 
              handleClose={handleClose}
              post={post} 
            />
         

          </DialogContent> 

      </Dialog>
    </div>
  );
}
