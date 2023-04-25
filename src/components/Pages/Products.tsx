import SearchAndSort from '../SearchAndSort/SearchAndSort'
import CardList from '../CardList/CardList'
import { useProductList, useSetCart, useSetProductList } from './RootLayout'

const Products: React.FC = () => {
  const { productList } = useProductList()
  const { setCart } = useSetCart()
  const { setProductList } = useSetProductList()
  
  return (
    <>
      <SearchAndSort setProductList={setProductList} />
      <CardList productList={productList} setCart={setCart} />
    </>
  )
}
export default Products
