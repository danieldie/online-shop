import SearchCard from './SearchCard'
import SortCards from './SortCards'
import { Card } from '../Card/ProductCard'

const SearchAndSort: React.FC<{setProductList:React.Dispatch<React.SetStateAction<Card[]>>}> = (props) => {
  return (
    <header
      id='cards-limit'
      className='lg:grid lg:grid-cols-3 lg:my-10 lg:gap-12 gap-5 px-5 my-12 flex flex-col justify-between items-center w-full'
    >
      <SearchCard setProductList={props.setProductList}/>

      <SortCards setProductList={props.setProductList}/>

      <span className=''></span>
    </header>
  )
}

export default SearchAndSort
