import {useState, useEffect} from 'react'
import CardList from './components/CardList/CardList';
import CartList from './components/CartList/CartList';
import Header from './components/Header/Header';
import SearchAndSort from './components/SearchAndSort/SearchAndSort';
import { getAll as getAllProducts, } from './services/products';
import {Cart, Card} from './components/Card/ProductCard'

function App() {
  const [productList, setProductList] = useState<Card[]>([])
  useEffect(() => {
    ;(async () => {
      const api: Card[] = await getAllProducts()
      // console.log(api);
      setProductList(api)
    })()
  }, [])

  const cart:Cart[] = [
    {id:1, quantity:3},
    {id:2, quantity:2},
    {id:5, quantity:4},
  ]
  return (
    <>
      <Header />
      <SearchAndSort setProductList={setProductList} />
      <CardList productList={productList}/>
      <CartList cart={cart} total={200}/>
    </>
  );
}

export default App;
