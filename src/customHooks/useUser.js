import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'


export default function useUser(userId) { 
    
    const [state, setState] = useState({
        user:{},
        fetching:true,
        loadng:false,
    })
    
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_DOMAIN}/users/${userId}`)
        .then(response=>{

            setState({
                ...state,
                user:response.data,
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



    return [
        state,
    ]
}
