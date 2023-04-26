import { createSlice } from '@reduxjs/toolkit'
import { Card, User, ApiType } from '../types/types'

const initialState: ApiType = {
  productApi: [],
  allCategoriesApi: [],
  userApi: null,
}

const cartSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setProductApi(state, action: { payload: { productApi: Card[] } }) {
      // console.log('api');
      state.productApi = action.payload.productApi
    },
    setAllCategoriesApi(
      state,
      action: { payload: { allCategoriesApi: string[] } }
    ) {
      state.allCategoriesApi = action.payload.allCategoriesApi
    },
    setUserApi(state, action: { payload: { userApi: User } }) {
      state.userApi = action.payload.userApi
    },
  },
})

export const { setProductApi, setAllCategoriesApi, setUserApi } =
  cartSlice.actions

export default cartSlice.reducer
