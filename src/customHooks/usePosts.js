import React, { useEffect, useState } from 'react';
import axios from 'axios'



export default function usePosts() {    
  

    const [state, setState] = useState({
        posts:[],
        fetching:true,
        loadng:false,
        page:1,
        limit:10,
    })
    

    useEffect(() => {

        setState({
            ...state,
            loading:true
        })

        axios.get(`${process.env.REACT_APP_DOMAIN}/posts?_page=${state.page}&_limit=${state.limit}`)
        .then(response=>{

            console.log({response})

            setState({
                ...state,
                posts:[...state.posts,...response.data],
                fetching:false,
                loading:false
            })
            
        })
        .catch(error=>{
            console.log({error})
            setState({
                ...state,
                fetching:false,
                loading:false
            })
        })
        
    }, [state.page])


    const loadMore = ()=>{
        setState({
            ...state,
            page:state.page + 1
        })
    }

    return [
        state,
        loadMore
    ]
}
