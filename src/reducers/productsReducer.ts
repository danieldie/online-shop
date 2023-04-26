import { createSlice } from '@reduxjs/toolkit'
import { Card } from '../types/types'

const initialState: Card[] = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts(state, action: { payload: { productApi: Card[] } }) {
      // console.log('products')
      return action.payload.productApi
    },
    setSerachedProducts(
      state,
      action: { payload: { productApi: Card[]; search: string } }
    ) {
      // console.log('products')
      const regex = new RegExp(action.payload.search, 'i')
      return action.payload.productApi.filter((c) => regex.test(c.title))
    },
    setSortedProducts(
      state,
      action: { payload: { productApi: Card[]; category: string } }
    ) {
      // console.log('products')
      return action.payload.productApi.filter(
        (p) => p.category === action.payload.category
      )
    },
  },
})

export const { setAllProducts, setSerachedProducts, setSortedProducts } =
  productsSlice.actions

export default productsSlice.reducer
