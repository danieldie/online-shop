import CartList from '../CartList/CartList'
import { useAppSelector } from '../../hooks/hooks'

const Products: React.FC = () => { 
  const {api:{productApi}, cart} = useAppSelector(state => state)
  return (
    <>
      <CartList cart={cart} productApi={productApi} />
    </>
  )
}
export default Products
