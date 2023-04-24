import ProductCard from '../Card/ProductCard'
import { Card } from '../Card/ProductCard'

const CardList: React.FC<{productList:Card[]}> = (props) => {

  return (
    <main className='flex flex-wrap justify-around items-center gap-x-5 gap-y-3 mb-10'>
      {props.productList.map((p) => (
        <ProductCard {...p} key={p.id} />
      ))}
    </main>
  )
}

export default CardList
