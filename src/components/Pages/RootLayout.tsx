import Header from '../Header/Header'
import {
  getAll as getAllProducts,
  getAllCategories,
} from '../../services/products'
import { getOne as getOneUser } from '../../services/users'
import { User } from '../../types/types'
import { Outlet, useLoaderData } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { setAllProducts } from '../../reducers/productsReducer'
import {
  setAllCategoriesApi,
  setProductApi,
  setUserApi,
} from '../../reducers/apiReducer'
import { AppDispatch } from '../../store'

const RootLayout: React.FC = () => {
  const { userApi } = useLoaderData() as { userApi: User }

  console.log('RootLayout')

  const { cart } = useAppSelector((state) => state)

  return (
    <>
      <Header cart={cart} userApi={userApi} />

      <Outlet />
    </>
  )
}

export default RootLayout

export async function handler(dispatch: AppDispatch) {
  const promiseArr = await Promise.all([
    getOneUser(1),
    getAllProducts(),
    getAllCategories(),
  ])
  dispatch(setAllProducts({ productApi: promiseArr[1] }))
  dispatch(setAllCategoriesApi({ allCategoriesApi: promiseArr[2] }))
  dispatch(setProductApi({ productApi: promiseArr[1] }))
  dispatch(setUserApi({ userApi: promiseArr[0] }))
  return {
    userApi: promiseArr[0],
    productApi: promiseArr[1],
    allCategoriesApi: promiseArr[2],
  }
}
