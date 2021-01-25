import React, { useEffect, useState,useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableHeader from './TableHeader'
import clsx from 'clsx';
import SearchBar from './SearchBar';
import TablePagination from './TablePagination';
import tableReducer from '../../../reducers/TableReducer.js'
import { useQueryState } from 'react-router-use-location-state';



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

export default function Table({data}) {
    const classes = useStyles();
    
    const [state, dispatch] = useReducer(tableReducer, {
        currentData:data,
        allData:data,
    })
    
    const [columns, setColumns] = useState([
        'ID','Name','Email','Website'
    ])

    const [columnQuery,setColumnQuery] = useQueryState('column','');
    const [orderQuery,setOrderQuery] = useQueryState('order','');
    const [searchQuery,setSearchQuery] = useQueryState('search','');
    const [pageQuery,setPageQuery] = useQueryState('page','');
    const [pageSizeQuery,setPageSizeQuery] = useQueryState('pagesize','');


    const [sortOrder, setsortOrder] = useState('asc')

    const handleSort = (column)=>{

        setColumnQuery(column.toLowerCase())

        if(sortOrder == 'asc'){
        setsortOrder('dsc')
        setOrderQuery('dsc')

        }else{
        setsortOrder('asc')
        setOrderQuery('asc')
        }

    }
    
  useEffect(()=>{

    dispatch({
      type:'FILTER_DATA',
      payload:{
          query:searchQuery
      }
    })

  },[searchQuery])
  
  useEffect(()=>{

    if(pageSizeQuery != '' && pageQuery != ''){
      dispatch({
        type:'PAGINATE_DATA',
        payload:{
            start:pageSizeQuery*(pageQuery - 1),
            end:(pageSizeQuery*pageQuery)
        }
      })
    }

  },[pageQuery,pageSizeQuery])
  
  useEffect(()=>{

    dispatch({
      type:'SORT_DATA',
      payload:{
        column:columnQuery,
        order:orderQuery,
      }
    })

  },[columnQuery,orderQuery])

  return (
    <div>

      <SearchBar 
        dispatch={dispatch} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPageQuery={setPageQuery}
        setPageSizeQuery={setPageSizeQuery}
      />

        <table className={classes.table}>

          <tr>
            {
              columns.map((column,index)=>(
                  <TableHeader 
                    label={column}
                    sortOrder={sortOrder}
                    columnOrder={columnQuery}
                    handleSort={handleSort}
                  />
              ))
            }

          </tr>

          {
            state.currentData.map((user,index)=>(
              <tr className={clsx({[classes.even]: index % 2 == 0 })}>
                <td className={classes.th}>
                  
                  {user.id}
                </td>
                <td className={classes.th}>{user.name}</td>
                <td className={classes.th}>{user.email}</td>
                <td className={classes.th}>{user.website}</td>
              </tr>
            ))
          }

        </table>


        

      <TablePagination 
        pageQuery={pageQuery}
        setPageQuery={setPageQuery}
        dataCount={ searchQuery == '' ? state.allData.length : state.currentData.length}
        pageSizeQuery={pageSizeQuery}
        setPageSizeQuery={setPageSizeQuery}
        dispatch={dispatch}
      />

    </div>
  )
}
