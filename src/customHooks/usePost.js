import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios'
import PostReducer from '../reducers/PostReducer';


export default function usePost(postId) {    


    const [state, dispatch] = useReducer(PostReducer,{
        post:{},
        comments:[],
        fetching:true,
        loadng:false,
    })
    

    useEffect(() => {

        axios.all([
            axios.get(`${process.env.REACT_APP_DOMAIN}/posts/${postId}`),
            axios.get(`${process.env.REACT_APP_DOMAIN}/comments?postId=${postId}`),
        ])
        .then(axios.spread((postResponse,commentsResponse)=>{

            dispatch({
                type:'SET_POST',
                payload:{
                    post:postResponse.data,
                    comments:commentsResponse.data,
                }
            })

           

        }))
        .catch(error=>{
            console.log({error})
        })
        
    }, [])


    


    return [
        state,
    ]
}
