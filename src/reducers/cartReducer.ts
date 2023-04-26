import { createSlice } from '@reduxjs/toolkit'
import { Cart } from '../types/types'

const initialState: Cart[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state: Cart[], action: { payload: { id: number } }) {
      const prodIndex = state.findIndex((c) => c.id === action.payload.id)
      if (prodIndex !== -1) {
        return state.map((c, i) => {
          if (i === prodIndex) {
            return { ...c, quantity: c.quantity + 1 }
          } else {
            return c
          }
        })
      }
      return [...state, { id: action.payload.id, quantity: 1 }]
    },
    decreaseFromCart(state: Cart[], action: { payload: { id: number } }) {
      const prodIndex = state.findIndex((c) => c.id === action.payload.id)
      if (prodIndex !== -1) {
        return state
          .map((c, i) => {
            if (i === prodIndex) {
              return { ...c, quantity: c.quantity - 1 }
            } else {
              return c
            }
          })
          .filter((c) => c.quantity > 0)
      }
      return state
    },
    deleteFromCart(state: Cart[], action: { payload: { id: number } }) {
      return state.filter((c) => c.id !== action.payload.id)
    },
  },
})

export const { addToCart, decreaseFromCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer
