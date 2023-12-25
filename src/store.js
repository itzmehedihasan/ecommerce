import { configureStore } from '@reduxjs/toolkit'
import breadCrumb from './slices/breadCrumb'
import cartSlice from './slices/cartSlice'

export default configureStore({
  reducer: {
    breadCrumb: breadCrumb,
    cart: cartSlice,
  },
})
  //                 npm run dev
