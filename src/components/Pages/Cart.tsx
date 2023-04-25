import CartList from '../CartList/CartList'
import { useSetCart, useCart } from './RootLayout'

const Products: React.FC = () => {
  const { cart } = useCart()
  const { setCart } = useSetCart()
  return (
    <>
      <CartList cart={cart} setCart={setCart} />
    </>
  )
}
export default Products
