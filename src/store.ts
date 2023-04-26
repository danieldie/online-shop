import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer'
import productsReducer from './reducers/productsReducer'
import apiReducer from './reducers/apiReducer'
import { Card, Cart, ApiType } from './types/types'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    api: apiReducer,
  },
})

export type RootState = {
  cart: Cart[]
  products: Card[]
  api: ApiType
}

export type AppDispatch = typeof store.dispatch

export const dispatch = store.dispatch

export default store
