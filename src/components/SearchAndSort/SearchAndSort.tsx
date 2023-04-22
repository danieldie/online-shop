import SearchCard from './SearchCard'
import SortCards from './SortCards'

export default function SearchAndSort() {
  return (
    <header
      id='cards-limit'
      className=' md:grid md:grid-cols-3 md:my-10 md:gap-12 gap-5 px-5 my-12 flex flex-col justify-between items-center w-full'
    >
      <SearchCard />

      <SortCards
        list={['all', 'one', 'two', 'three', 'fourrrrrrrrrrrrrrrrrrr']}
      />

      <span className=''></span>
    </header>
  )
}
