import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PostsContext } from '..';
// import { PostsContext } from '../pages/user';

export default function DeleteDialog({open,setOpen,postId}) {

    const {postState,deletePost} = useContext(PostsContext);
  

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = ()=>{
        deletePost(postId)
        .then(()=>{
            handleClose();
        })
    }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>

          <DialogContentText id="alert-dialog-description">
            The following action will delete the post.
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" variant='contained' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
