import SearchCard from './SearchCard'
import SortCards from './SortCards'
import {
  useSetProductList,
  useProductApi,
  useAllCategoriesApi,
} from '../Pages/RootLayout'

const SearchAndSort: React.FC = () => {
  const { setProductList } = useSetProductList()
  const { productApi } = useProductApi()
  const { allCategoriesApi } = useAllCategoriesApi()

  return (
    <header
      id='cards-limit'
      className='lg:grid lg:grid-cols-3 lg:my-10 lg:gap-12 gap-5 px-5 my-12 flex flex-col justify-between items-center w-full'
    >
      <SearchCard setProductList={setProductList} productApi={productApi} />

      <SortCards
        setProductList={setProductList}
        productApi={productApi}
        allCategoriesApi={allCategoriesApi}
      />

      <span className=''></span>
    </header>
  )
}

export default SearchAndSort
