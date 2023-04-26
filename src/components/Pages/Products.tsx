import SearchAndSort from '../SearchAndSort/SearchAndSort'
import CardList from '../CardList/CardList'
import { useProductList } from './RootLayout'

const Products: React.FC = () => {
  const { productList } = useProductList()

  return (
    <>
      <SearchAndSort />
      <CardList productList={productList} />
    </>
  )
}
export default Products
