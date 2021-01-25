import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function usePost(postId) {    

    const [state, setState] = useState({
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

            setState({
                ...state,
                post:postResponse.data,
                comments:commentsResponse.data,
                loading:false,
                fetching:false,
            })

        }))
        .catch(error=>{
            console.log({error})

            setState({
                ...state,
                loading:false,
                fetching:false,
            })
        })
        
    }, [])


    return [
        state,
    ]
}
