import { createContext, useContext, useReducer, useState ,useEffect } from "react";

const Reducer = (state,action) =>{
    if(action.type==='FIND'){
        console.log('Reducer Entered');
        return {...state}
    }
}

const initState = {
    posts:posts,
}

const usePostContext = () =>{
    return useContext(PostContext)
}

const PostContext = createContext();

const PostProvider = ({children}) =>{

    const [state,dispatch] = useReducer(Reducer,initState);

    const filterFind = (word) =>{
        console.log('filerFind');
        dispatch({type:"FIND",payload:word})
    }

    return (
        <PostContext.Provider value={{...state,filterFind}}>
            {children}
        </PostContext.Provider>
    )
}
export {PostProvider,PostContext,usePostContext};