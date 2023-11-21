import { createSlice } from "@reduxjs/toolkit";




const wishlistSlice = createSlice({
    name:'wishtlist',
    initialState:[],//to store more than one value
    reducers:{
        //actions
        //function to add items to the state
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishList:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})


export const {addToWishlist,removeFromWishList} = wishlistSlice.actions

export default wishlistSlice.reducer