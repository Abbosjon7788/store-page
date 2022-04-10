import { createSlice } from "@reduxjs/toolkit";

const root = createSlice({
     name: 'reducer',
     initialState: {
          totalPrice: 0,

     },
     reducers: {
          setTotalPrice: (state, action) => {
               state.totalPrice += action.payload
          },
     }
})



export default root.reducer
export const { setTotalPrice } = root.actions