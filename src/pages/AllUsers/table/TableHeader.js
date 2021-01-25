import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles((theme) => ({
    textfield:{
        marginBottom:15
    },
    actions:{
        textAlign:'right'
    },
    table:{
      width:'100%',
      borderCollapse:'collapse'
    },
    th:{
      border: '1px solid #dddddd',
      textAlign: "left",
      padding: '8px',
    },
    even:{
      backgroundColor: '#eee',
    },


    thRoot:{
      display:'flex',
      justifyContent:'space-between'
    },
    sortIcon:{
      position:'relative'
    },
    upIcon:{
      position:'absolute',
      top: '-3px',
      left: '-20px',
    },
    downIcon:{
      position:'absolute',
      top: '3px',
      left: '-20px'
    },
    greyOut:{
      color:'#DDD'
    }
}));

export default function TableHeader({label,handleSort,columnOrder,sortOrder}){
  const classes = useStyles();

  return(
    <th className={classes.th} onClick={()=>handleSort(label)}>

    <div className={classes.thRoot}>
      <div className="">{label}</div>

      {
        label != 'Website' &&
      
        <div className={clsx(classes.sortIcon)}>

          <ArrowDropUpIcon 
            className={clsx(classes.upIcon,{
              [classes.greyOut] : columnOrder != label.toLowerCase() || sortOrder != 'asc'
            })} 
          />
          <ArrowDropDownIcon 
            className={clsx(classes.downIcon,{
              [classes.greyOut] : columnOrder != label.toLowerCase() || sortOrder != 'dsc'
            })} 
          />

        </div>
      }
    </div>

    </th>
  )
}


