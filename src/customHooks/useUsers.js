import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function useUsers() {    

    const [state, setState] = useState({
        users:[],
        fetching:true,
        loadng:false,
    })
    

    useEffect(() => {

        setState({
            ...state,
            loading:true
        })

        axios.get(`${process.env.REACT_APP_DOMAIN}/users`)
        .then(response=>{

            console.log({response})

            setState({
                ...state,
                users:response.data,
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
        
    }, [])


    return [
        state,
    ]
}
