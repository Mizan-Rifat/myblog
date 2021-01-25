import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'


export default function useUser(userId) { 
    
 

    const [state, setState] = useState({
        user:{},
        posts:[],
        fetching:true,
        loadng:false,
    })
    

    useEffect(() => {

        axios.all([
            axios.get(`${process.env.REACT_APP_DOMAIN}/users/${userId}`),
            axios.get(`${process.env.REACT_APP_DOMAIN}/posts?userId=${userId}`),
        ])
        .then(axios.spread((userResponse,postsResponse)=>{

            const  createdPost = JSON.parse(localStorage.getItem('createdPost'))

            setState({
                ...state,
                user:userResponse.data,
                posts: createdPost && userResponse.data.id == 2 ?  [createdPost,...postsResponse.data] : postsResponse.data,
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


    // return {
    //     user:state.user,
    //     comments:state.comments,
    //     fetching:state.fetching,
    //     loading:state.loading,
    // }

    return [
        state,
    ]
}
