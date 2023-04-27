import { Card } from '../../types/types'
import { addToCart } from '../../reducers/cartReducer'
import { useAppDispatch } from '../../hooks/hooks'
import { useState, memo } from 'react'

let ProductCard: React.FC<Card> = (props) => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [text, setText] = useState<string>('text-center')
  const [dot, setDot] = useState<string>('hidden')

  const dispatch = useAppDispatch()

  const addCardHandler = (id: number) => {
    setDisabled(true)
    setText('hidden')
    setDot('flex, justify-center, items-center')

    setTimeout(() => {
      dispatch(addToCart({ id }))
      setText('text-center')
      setDot('hidden')
      setDisabled(false)
    }, 1000)
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
            disabled={disabled}
            id='add-to-cart'
            onClick={() => addCardHandler(props.id)}
            className='bg-blue-600 text-white px-5 py-1 rounded-sm w-32 h-9 disabled:opacity-50 transition-all disabled:cursor-wait'
          >
            <div className={dot}>
              <i className='fa-solid fa-circle fa-beat-fade '></i>
              <i className='fa-solid fa-circle fa-beat-fade mx-2'></i>
              <i className='fa-solid fa-circle fa-beat-fade '></i>
            </div>
            <p className={text}>Add to cart</p>
          </button>
        </div>
      </div>
    </article>
  )
}

ProductCard = memo(ProductCard)

export default ProductCard
