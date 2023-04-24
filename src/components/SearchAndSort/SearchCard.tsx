import { useState,useEffect } from 'react'
import { getAll } from '../../services/products'
import { Card } from '../Card/ProductCard'

const SearchCard: React.FC<{
  setProductList: React.Dispatch<React.SetStateAction<Card[]>>
}> = ({setProductList}) => {
  const [search, setSearch] = useState<string>('')
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch: string = e.target.value
    setSearch(newSearch)
    // console.log(newSearch);
  }
  useEffect(() => {
    let timer = setTimeout(async () => {
      const api = await getAll()
      const regex = new RegExp(search, 'i')
      setProductList(api.filter(c => regex.test(c.title)))
    }, 1000)
    
    return () => {clearTimeout(timer)}
  }, [setProductList, search])

  return (
    <div className='border-2 border-gray-500 rounded-full px-2 py-2 flex items-center justify-start h-16 w-full'>
      <i className='fa-solid fa-magnifying-glass mx-2 text-gray-400 fa-lg'></i>
      <div className='mx-2 relative w-full'>
        <input
          className='peer relative outline-0 border-0 placeholder-transparent hover:cursor-text top-2.5 w-full'
          placeholder='Product Title'
          type='text'
          id='floatingInputGroup1'
          value={search}
          onChange={searchHandler}
        />
        <label
          htmlFor='floatingInputGroup1'
          className='absolute left-0 -top-2.5 text-gray-400 text-sm transition-all hover:cursor-text
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-600
        peer-placeholder-shown:top-0
        peer-focus:-top-2.5
        peer-focus:text-gray-400
        peer-focus:text-sm'
        >
          Product Title
        </label>
      </div>
    </div>
  )
}

export default SearchCard
