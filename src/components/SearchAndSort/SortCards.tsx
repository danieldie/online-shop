import { useRef, memo } from 'react'
import { Card } from '../../types/types'

const SortCards: React.FC<{
  setProductList: React.Dispatch<React.SetStateAction<Card[]>>
  productApi: Card[]
  allCategoriesApi: string[]
  productList: Card[]
}> = (props) => {
  const list = ['all categories', ...props.allCategoriesApi]
  const uniqueCurrentCategories = new Set(
    props.productList.map((p) => p.category)
  )
  const categoryName = useRef<string>(
    uniqueCurrentCategories.size === 1
      ? uniqueCurrentCategories.values().next().value
      : list[0]
  )
  const revealDropdownRef = useRef<boolean>(false)

  const showListHandler = () => {
    if (!revealDropdownRef.current) {
      const ul = document.querySelector('#dropdown-ul')
      const up = document.querySelector('#up')
      const down = document.querySelector('#down')
      // console.log(i);
      ul?.classList.remove('hidden')
      up?.classList.remove('hidden')
      down?.classList.add('hidden')
      revealDropdownRef.current = true
    } else {
      const ul = document.querySelector('#dropdown-ul')
      const up = document.querySelector('#up')
      const down = document.querySelector('#down')
      // console.log(i);
      ul?.classList.add('hidden')
      up?.classList.add('hidden')
      down?.classList.remove('hidden')
      revealDropdownRef.current = false
    }
  }

  const sortCardsHandler = async (category: string) => {
    if (
      category === 'all categories' ||
      !list.includes(category.toLowerCase())
    ) {
      props.setProductList(props.productApi)
      categoryName.current = list[0]
    } else {
      props.setProductList(
        props.productApi.filter((p) => p.category === category)
      )
      categoryName.current = category
    }
    revealDropdownRef.current = true
    showListHandler()
  }

  return (
    <div className='grid w-full h-16 relative'>
      <button
        id='category-button'
        className='capitalize dropdown px-4 md:px-2 flex items-center justify-between text-black bg-white border-0 border-b-2 border-gray-400'
        type='button'
        onClick={showListHandler}
        data-dropdown-toggle='dropdown'
      >
        {categoryName.current}
        <i className='fa-solid fa-caret-up hidden' id='up'></i>
        <i className='fa-solid fa-caret-down' id='down'></i>
      </button>
      <ul
        className='hidden dropdown-menu absolute transition-all top-16 right-0 '
        id='dropdown-ul'
      >
        {list!.map((i) => (
          <li key={i}>
            <button
              className='capitalize w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
              onClick={() => sortCardsHandler(i)}
            >
              {i}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(SortCards)
