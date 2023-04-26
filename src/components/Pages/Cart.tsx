import CartList from '../CartList/CartList'
import { useCart, useProductApi } from './RootLayout'

const Products: React.FC = () => {
  const { cart } = useCart()
  const { productApi } = useProductApi()  

  return (
    <>
      <CartList cart={cart} productApi={productApi} />
    </>
  )
}
export default Products
