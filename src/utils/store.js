import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * create Store
 *  - configureStore() - RTX
 *
 * provide my store to app
 *  - <Provider store = {store}> -import from react-redux
 *
 * Slice
 * -RTX - createSlice({
 *        name:"",
 *        initialState:
 * reducers:{
 * addItem: (state,action)=>{state=action.payload}}
 * })
 * export const {addItem, removeItem} = cartSlice.actions;
 * export default cartSlice.reducer;
 *
 * put that slice into store
 *   -{
 *       reducer:{
 *       cart: cartSlice,
 * user: userSlice}}
 */
