import { useState } from 'react'
import Header from '../Header/Header'
import {
  getAll as getAllProducts,
  getAllCategories,
} from '../../services/products'
import { getOne as getOneUser } from '../../services/users'
import { Card, Cart, User } from '../../types/types'
import {
  Outlet,
  useOutletContext,
  useLoaderData,
} from 'react-router-dom'

const RootLayout: React.FC = () => {
  console.log('redering')

  const { productApi } = useLoaderData() as { productApi: Card[] }
  const { allCategoriesApi } = useLoaderData() as { allCategoriesApi: string[] }

  const [cart, setCart] = useState<Cart[]>([])
  const [productList, setProductList] = useState<Card[]>(productApi)

  return (
    <>
      <Header cart={cart} />
      <Outlet
        context={{
          productApi,
          productList,
          setProductList,
          cart,
          setCart,
          allCategoriesApi,
        }}
      />
    </>
  )
}

export default RootLayout

export function useProductList() {
  return useOutletContext<{ productList: Card[] }>()
}
export function useSetProductList() {
  return useOutletContext<{
    setProductList: React.Dispatch<React.SetStateAction<Card[]>>
  }>()
}
export function useCart() {
  return useOutletContext<{ cart: Cart[] }>()
}
export function useSetCart() {
  return useOutletContext<{
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>
  }>()
}
export function useProductApi() {
  return useOutletContext<{
    productApi: Card[]
  }>()
}
export function useAllCategoriesApi() {
  return useOutletContext<{
    allCategoriesApi: string[]
  }>()
}
export function useUserApi() {
  return useOutletContext<{
    userApi: User
  }>()
}

export async function handler() {
  const promiseArr = await Promise.all([
    getOneUser(1),
    getAllProducts(),
    getAllCategories(),
  ])
  return {
    userApi: promiseArr[0],
    productApi: promiseArr[1],
    allCategoriesApi: promiseArr[2],
  }
  // return defer({
  //   userApi:  getOneUser(1),
  //   productApi:  getAllProducts(),
  //   allCategoriesApi:  getAllCategories(),
  // })
}
