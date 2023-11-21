import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //function to add items to cart
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        //function to remove items from cart
        removeFromCart:(state,action)=>{
            return state.filter(item => item.id!= action.payload)
        },
        // function to remove all items from cart
        removeAllItems:(state)=>{
            return state=[]
        }

    }
})

export const{addToCart , removeFromCart ,removeAllItems} = cartSlice.actions

export default cartSlice.reducer