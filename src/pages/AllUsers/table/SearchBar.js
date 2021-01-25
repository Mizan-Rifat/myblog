import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'flex-end',
  },
  margin: {
    margin: theme.spacing(2),
  },
  textField: {
    width: '25ch',
  },
}));

export default function SearhBar({dispatch,searchQuery,setSearchQuery,setPageSizeQuery,setPageQuery}) {
  const classes = useStyles();

  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setPageSizeQuery('');
    setPageQuery('')
  };

  const handleClear=()=>{
    setSearchQuery('')
    setPageSizeQuery('');
    setPageQuery('')
    dispatch({
      type:'FILTER_DATA',
      payload:{
          query:''
      }
  })
  }


  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Search</InputLabel>
          <Input
            id="standard-adornment-password"
            value={searchQuery}
            onChange={handleChange}

            onFocus={()=>{setFocused(true)}}
            onBlur={()=>{setFocused(false)}}
      
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClear}
                >
                    {
                        focused || searchQuery.length > 0 ?
                         <ClearIcon />
                         :
                        <SearchIcon />
                    }
                  
                </IconButton>
              </InputAdornment>
            }

          />
        </FormControl>
    </div>
  );
}
