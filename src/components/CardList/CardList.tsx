import { useState, useEffect } from 'react'
import ProductCard from '../Card/ProductCard'
import { getAll } from '../../services/products'
import { Card } from '../Card/ProductCard'

const CardList: React.FC<{}> = () => {
  const [productList, setProductList] = useState<Card[]>([])
  useEffect(() => {
    ;(async () => {
      const api: Card[] = await getAll()
      // console.log(api);
      setProductList(api)
    })()
  }, [])

  return (
    <main className='flex flex-wrap justify-around items-center gap-x-5 gap-y-3 mb-10'>
      {productList.map((p) => (
        <ProductCard {...p} key={p.id} />
      ))}
    </main>
  )
}

export default CardList
