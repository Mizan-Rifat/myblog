import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'


export default function useUser(userId) { 
    
    const [state, setState] = useState({
        user:{},
        fetching:true,
        loadng:false,
    })
    
    useEffect(() => {

        console.log(JSON.parse(localStorage.getItem('createdPosts')))

        // localStorage.setItem('createdPosts',JSON.stringify([
        //     {
        //         body: "adaddelectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus↵accusamus in eum beatae sitvel qui neque voluptates ut commodi qui incidunt↵ut animi commodi",
        //         id: 101,
        //         title: "dad et ea vero quia laudantium autem",
        //         userId: 2,
        //     }
        // ]))

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
