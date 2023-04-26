import { createSlice } from '@reduxjs/toolkit'
import { Card } from '../types/types'

const initialState: Card[] = []

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    allProducts(state: Card[], action: { payload: { productApi: Card[] } }) {
      return action.payload.productApi
    },
    serachProducts(
      state: Card[],
      action: { payload: { productApi: Card[]; search: string } }
    ) {
      const regex = new RegExp(action.payload.search, 'i')
      return action.payload.productApi.filter((c) => regex.test(c.title))
    },
    sortProducts(
      state: Card[],
      action: { payload: { productApi: Card[]; category: string } }
    ) {
      return action.payload.productApi.filter(
        (p) => p.category === action.payload.category
      )
    },
  },
})

export const { allProducts, serachProducts, sortProducts } = productSlice.actions

export default productSlice.reducer
