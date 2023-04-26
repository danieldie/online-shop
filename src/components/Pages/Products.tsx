import SearchAndSort from '../SearchAndSort/SearchAndSort'
import CardList from '../CardList/CardList'
import { useAppSelector } from '../../hooks/hooks'

const Products: React.FC = () => {
  const { products } = useAppSelector((state) => state)

  return (
    <>
      <SearchAndSort />
      <CardList productList={products} />
    </>
  )
}
export default Products
