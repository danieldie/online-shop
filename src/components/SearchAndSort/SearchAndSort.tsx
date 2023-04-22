import SearchCard from './SearchCard'
import SortCards from './SortCards'

export default function SearchAndSort() {
  return (
    <header
      id='cards-limit'
      className='lg:grid lg:grid-cols-3 lg:my-10 lg:gap-12 gap-5 px-5 my-12 flex flex-col justify-between items-center w-full'
    >
      <SearchCard />

      <SortCards
        list={['all', 'one', 'two', 'three', 'fourrrrrrrrrrrrrrrrrrr', 'fiveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee']}
      />

      <span className=''></span>
    </header>
  )
}
