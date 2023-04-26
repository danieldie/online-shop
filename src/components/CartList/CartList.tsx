import { Card, Cart } from '../../types/types'
import CartItem from './CartItem'

const CartList: React.FC<{
  cart: Cart[]
  productApi: Card[]
}> = (props) => {
  const productFinderHandler = (id: number): Card | undefined => {
    const card = props.productApi.find((c) => c.id === id)
    return card
  }

  const totalPrice = props.cart.reduce((total, current) => {
    const product = productFinderHandler(current.id)
    const totalProductPrice = current.quantity * product!.price
    return total + totalProductPrice
  }, 0)

  return (
    <main>
      <table className=' my-10 mx-auto'>
        <thead className='bg-[#9e9e9e] text-white font-sm px-5 hidden lg:table-header-group '>
          <tr className='border-2 border-[#747474]'>
            <th className=''>number</th>
            <th>Title</th>
            <th>description</th>
            <th>Quantity</th>
            <th>price</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((c, i) => (
            <CartItem
              product={productFinderHandler(c.id)}
              quantity={c.quantity}
              key={c.id}
              number={i + 1}
            />
          ))}

          <tr className='window hidden lg:table-row border-2 border-[#747474]'>
            <td>
              <p>Total</p>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <p>{totalPrice.toFixed(2)}$</p>
            </td>
            <td></td>
          </tr>

          <tr className=' mobile lg:hidden table-row border-2 border-[#747474] text-start px-2 '>
            <td className='flex justify-between w-[350px] sm:w-[500px]'>
              <p>Total </p>
              <p>{totalPrice.toFixed(2)}$</p>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default CartList
