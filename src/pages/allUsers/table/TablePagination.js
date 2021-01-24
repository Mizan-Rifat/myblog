import React,{useState,useEffect} from 'react';
import { Pagination } from '@material-ui/lab';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'flex-end',
    alignItems:'center'
  },
}));

export default function TablePagination({pageQuery,setPageQuery,dataCount,pageSizeQuery,setPageSizeQuery}) {

  const classes = useStyles();

  const handlePageSizeChange = (event) => {
    setPageSizeQuery(event.target.value);
    setPageQuery(1)

  };

  const handleChangePage = (e,page)=>{
    setPageQuery(page)
  
  }

  return (

    <div className={classes.root}>

        <p>Rows per page : </p>

        <Select
          native
          value={pageSizeQuery}
          style={{margin:'0 10px'}}
          onChange={handlePageSizeChange}
          
        >
          
          <option value={dataCount}>All</option>
          {
            dataCount > 5 &&  <option value={5}>5</option>
          }
          {
            dataCount > 3 &&  <option value={3}>3</option>
          }
        </Select>

        <Pagination 
          count={!pageSizeQuery ? 1 : Math.ceil(dataCount/pageSizeQuery)}
          page={!pageQuery ? 1 : parseInt(pageQuery)} 
          color="primary"
          onChange={handleChangePage} 

        />

    </div>
  );
}
