import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // marginTop:50
  },
  action:{
      justifyContent:'flex-end',
      padding:'10px 15px',
  },
}));

export default function LeaveCommentBox() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

      <CardHeader
        title="Leave A Comment"
      />

      <CardContent>
        <TextField
            id="standard-required" 
            multiline
            fullWidth
            variant="outlined"
            rows={3}
 
        />
      </CardContent>

      <CardActions className={classes.action}>
        <Button
            variant='contained'
            color='primary'
        >
            Submit
        </Button>
        
      </CardActions>

      </Card>
  );
}
