import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state,action) => {

        if(state.cartItem.length > 0 ){

            let arr = []
            state.cartItem.map(item =>{
                // console.log(item.title);
                if(item.title == action.payload.title){
                    item.Quantity = item.Quantity+1
                    arr.push(item.title)
                }
            });
            if(arr.indexOf(action.payload.title) == -1){
                state.cartItem.push(action.payload)
            }
        }else{
            state.cartItem.push(action.payload);
        }
    },
    increment: (state,action) => {
          state.cartItem.map(item =>{
              if(item.title == action.payload.title){
                  item.Quantity = item.Quantity+1
              }
          });
    },
    decrement: (state,action) => {
          state.cartItem.map((item,index) =>{
              if(item.title == action.payload.title){
                if(item.Quantity >0){
                  item.Quantity = item.Quantity-1
                }if(item.Quantity==0){
                  state.cartItem.splice(index,1)
                }
              }
          });
    },
    remove: (state,action) => {
      state.cartItem.map((item,index) =>{
        if(item.title==action.payload.title){
          state.cartItem.splice(index,1)
        }
      })
    },
  

  },
})


export const {addToCart,increment,decrement,remove} = cartSlice.actions

export default cartSlice.reducer

  //                 npm run dev
