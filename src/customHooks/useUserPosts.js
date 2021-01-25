import React, { useContext, useEffect, useState,useReducer } from 'react';
import axios from 'axios'
import PostsReducer from '../reducers/PostsReducer';


export default function useUserPosts(userId) { 


    const [state, dispatch] = useReducer(PostsReducer,{
        posts:[],
        fetching:true,
        loading:false,
    })
    
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_DOMAIN}/posts?userId=${userId}`)
        .then(response=>{

            dispatch({
                type:'FETCH_POSTS',
                payload:{
                    posts:response.data
                }
            })


        })
        .catch(error=>{
            console.log({error})

            
        })
        
    }, [])


    const createPost = (formData)=>{

        dispatch({
            type:'SET_LOADING_TRUE'
        })

        return new Promise((resolve,reject)=>{
            axios.post(`${process.env.REACT_APP_DOMAIN}/posts`,formData)
            .then(response=>{
    
                dispatch({
                    type:'CREATE_POST',
                    payload:{
                        post:response.data
                    }
                })

                resolve();
    
            })
            .catch(error=>{
                console.log({error})

                reject();
                
            })
        })
        
    }

    const updatePost = (formData)=>{

        dispatch({
            type:'SET_LOADING_TRUE'
        })

        return new Promise((resolve,reject)=>{
            axios.put(`${process.env.REACT_APP_DOMAIN}/posts/${formData.id}`,formData)
            .then(response=>{
    
                dispatch({
                    type:'UPDATE_POST',
                    payload:{
                        post:response.data
                    }
                })

                resolve();
    
            })
            .catch(error=>{
                console.log({error})

                reject();
                
            })
        })

    }


    const deletePost = (postID)=>{

        dispatch({
            type:'SET_LOADING_TRUE'
        })

        return new Promise((resolve,reject)=>{
            axios.delete(`${process.env.REACT_APP_DOMAIN}/posts/${postID}`)
            .then(response=>{
    
                dispatch({
                    type:'DELETE_POST',
                    payload:{
                        postId:postID
                    }
                })

                resolve();
    
            })
            .catch(error=>{
                console.log({error})

                reject();
                
            })
        })

    }

  


    return [
        state,
        createPost,
        updatePost,
        deletePost
    ]
}
