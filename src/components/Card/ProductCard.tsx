import { Card, Cart } from '../../types/types'

interface Pcard extends Card {
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>
}

const ProductCard: React.FC<Pcard> = (props) => {
  const addCardHandler = (id: number) => {
    // console.log(`id ${id} increased/added in cart`)
    props.setCart((prevState) => {
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

  return (
    <article className='h-[450px] w-[350px] shadow-gray-300 shadow-lg p-0 shrink-0 m-3 flex flex-col rounded-sm'>
      <figure className='w-full h-2/5'>
        <img
          alt={props.title}
          src={props.image}
          className='object-contain w-full h-full'
        />
      </figure>
      <div className='px-4 py-2 h-3/5 flex flex-col justify-between'>
        <h2 className='font-semibold text-lg text-justify line-clamp-2'>
          {props.title}
        </h2>
        <p className='text-justify line-clamp-4 text-sm text-gray-500'>
          {props.description}
        </p>
        <div className='flex justify-between items-center'>
          <p className='text-gray-500'>price: {props.price} $</p>
          <button
            onClick={() => addCardHandler(props.id)}
            className='bg-blue-600 text-white px-5 py-1 rounded-sm'
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
