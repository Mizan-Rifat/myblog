import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'


export default function useUserPosts(userId) { 
    
    const [state, setState] = useState({
        posts:[],
        fetching:true,
        loadng:false,
    })
    
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_DOMAIN}/posts?userId=${userId}`)
        .then(response=>{

            setState({
                ...state,
                posts:response.data,
                loading:false,
                fetching:false,
            })

        })
        .catch(error=>{
            console.log({error})

            setState({
                ...state,
                loading:false,
                fetching:false,
            })
        })
        
    }, [])


    const createPost = (formData)=>{

        setState({
            ...state,
            loading:true,
        })
        
        axios.post(`${process.env.REACT_APP_DOMAIN}/posts`,formData)
        .then(response=>{

            setState({
                ...state,
                posts:[response.data,...state.posts],
                loading:false,
                fetching:false,
            })

        })
        .catch(error=>{
            console.log({error})
            
        })
    }


    return [
        state,
        createPost,
    ]
}
