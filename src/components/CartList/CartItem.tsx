import { Card } from '../../types/types'
import { useSetCart } from '../Pages/RootLayout'

const CartItem: React.FC<{
  product: Card | undefined
  quantity: number
  number: number
}> = (props) => {
  const { setCart } = useSetCart()
  const totalPrice = props.product!.price * props.quantity

  const deleteCartHandler = (id: number) => {
    // console.log(`id ${id} deleted from cart`)
    setCart((prevState) => {
      // console.log(prevState.filter((c) => c.id === id))
      return prevState.filter((c) => c.id !== id)
    })
  }

  const increaseCartHandler = (id: number) => {
    // console.log(`id ${id} increased in cart`)
    setCart((prevState) => {
      const prodIndex = prevState.findIndex((c) => c.id === id)
      // console.log(prodIndex);
      if (prodIndex !== -1) {
        return prevState.map((c, i) => {
          if (i === prodIndex) {
            return { ...c, quantity: c.quantity + 1 }
          } else {
            return c
          }
        })
      }
      return [...prevState, { id, quantity: 1 }]
    })
  }

  const decreaseCartHandler = (id: number) => {
    // console.log(`id ${id} defcreased in cart`)
    setCart((prevState) => {
      const prodIndex = prevState.findIndex((c) => c.id === id)
      if (prodIndex !== -1) {
        return prevState
          .map((c, i) => {
            if (i === prodIndex) {
              return { ...c, quantity: c.quantity - 1 }
            } else {
              return c
            }
          })
          .filter((c) => c.quantity > 0)
      }
      return prevState
    })
  }

  return (
    <>
      <tr className='window hidden lg:table-row border-2 border-[#747474]'>
        <td className=''>
          <p>{props.number}</p>
        </td>
        <td className=''>
          <p className='line-clamp-2'>{props.product?.title}</p>
        </td>
        <td className=''>
          <p className='line-clamp-2'>{props.product?.description}</p>
        </td>
        <td className=''>
          <div className='flex justify-center items-center'>
            <button
              className='mx-2 w-7 h-7 rounded-full text-red-400 bg-red-600'
              onClick={() => decreaseCartHandler(props.product!.id)}
            >
              <i className='fa-solid fa-circle-minus'></i>
            </button>
            <p>{props.quantity}</p>
            <button
              className='mx-2 w-7 h-7 rounded-full text-blue-400 bg-blue-600'
              onClick={() => increaseCartHandler(props.product!.id)}
            >
              <i className='fa-solid fa-circle-plus'></i>
            </button>
          </div>
        </td>
        <td className='flex-nowrap '>
          <p>{props.product?.price.toFixed(2)}$</p>
        </td>
        <td>
          <p>{totalPrice.toFixed(2)}$</p>
        </td>
        <td className=''>
          <button
            onClick={() => deleteCartHandler(props.product!.id)}
            className='text-white bg-red-600 rounded-full w-7 h-7'
          >
            <i className='fa-regular fa-trash-can'></i>
          </button>
        </td>
      </tr>

      <tr className='moblie table-row lg:hidden border-2 border-[#747474] '>
        <td className='w-[350px] h-[154px] sm:w-[500px] sm:h-[220px]'>
          <article className='grid grid-cols-7 w-full h-full'>
            <figure className='relative col-span-2 '>
              <img
                src={props.product!.image}
                alt={props.product?.description}
                className='object-contain absolute inset-0 w-full h-full'
              />
            </figure>

            <div className='flex flex-col justify-between items-start h-full col-span-4 pl-2'>
              <h2 className='text-start line-clamp-2 sm:line-clamp-3 font-bold'>
                {props.product!.title}
              </h2>

              <div className='flex justify-center items-center'>
                <p>Quantity:</p>
                <button
                  className='mx-2 w-7 h-7 rounded-full text-red-400 bg-red-600'
                  onClick={() => decreaseCartHandler(props.product!.id)}
                >
                  <i className='fa-solid fa-circle-minus'></i>
                </button>
                <p>{props.quantity}</p>
                <button
                  className='mx-2 w-7 h-7 rounded-full text-blue-400 bg-blue-600'
                  onClick={() => increaseCartHandler(props.product!.id)}
                >
                  <i className='fa-solid fa-circle-plus'></i>
                </button>
              </div>

              <button
                onClick={() => deleteCartHandler(props.product!.id)}
                className='text-white bg-red-600 rounded-full w-7 h-7'
              >
                <i className='fa-regular fa-trash-can'></i>
              </button>
            </div>

            <p className='font-medium col-span-1 text-end'>
              {props.product?.price}$
            </p>
          </article>
        </td>
      </tr>
    </>
  )
}

export default CartItem
