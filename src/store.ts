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

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
export type RootState = {
  cart: Cart[],
  products: Card[]
  api: ApiType
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store