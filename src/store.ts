import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer'
import userReducer from './reducers/cartReducer'
import productReducer from './reducers/cartReducer'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
  },
})

export default store