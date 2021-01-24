import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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

export default function RecipeReviewCard() {
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
