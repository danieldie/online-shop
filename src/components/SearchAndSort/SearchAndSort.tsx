import SearchCard from './SearchCard'
import SortCards from './SortCards'
// import {
//   useSetProductList,
//   useProductApi,
//   useAllCategoriesApi,
//   useProductList,
// } from '../Pages/RootLayout'
import { useLoaderData } from 'react-router-dom'
import { Card } from '../../types/types'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'

const SearchAndSort: React.FC = () => {
  // const { setProductList } = useSetProductList()
  // const { productApi } = useProductApi()
  // const { allCategoriesApi } = useAllCategoriesApi()
  const {api:{productApi, allCategoriesApi}, products:productList} = useAppSelector(state => state)
  // const { productList } = useProductList()
  // const {} = useAppSelector(state => state)

  return (
    <header
      id='cards-limit'
      className='lg:grid lg:grid-cols-3 lg:my-10 lg:gap-12 gap-5 px-5 my-12 flex flex-col justify-between items-center w-full'
    >
      <SearchCard productApi={productApi} />

      <SortCards
        productApi={productApi}
        allCategoriesApi={allCategoriesApi}
        productList={productList}
      />

      <span className=''></span>
    </header>
  )
}

export default SearchAndSort
