import SearchAndSort from '../SearchAndSort/SearchAndSort'
import CardList from '../CardList/CardList'
// import { useProductList } from './RootLayout'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { setAllProducts } from '../../reducers/productsReducer'

const Products: React.FC = () => {
  // const { productList } = useProductList()
  // const dispatch = useAppDispatch()
  // const { api:{productApi} } = useAppSelector((state) => state)
  // dispatch(setAllProducts({productApi}))
  const { products } = useAppSelector((state) => state)

  return (
    <>
      <SearchAndSort />
      <CardList productList={products} />
    </>
  )
}
export default Products
