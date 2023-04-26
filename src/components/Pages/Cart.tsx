import CartList from '../CartList/CartList'
// import { useCart, useProductApi } from './RootLayout'
import { useAppSelector } from '../../hooks/hooks'

const Products: React.FC = () => {
  // const { cart } = useCart()
  // const { productApi } = useProductApi()  
  const {api:{productApi}, cart} = useAppSelector(state => state)
  return (
    <>
      <CartList cart={cart} productApi={productApi} />
    </>
  )
}
export default Products
