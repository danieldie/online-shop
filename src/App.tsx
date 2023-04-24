import CardList from './components/CardList/CardList';
import CartList from './components/CartList/CartList';
import Header from './components/Header/Header';
import SearchAndSort from './components/SearchAndSort/SearchAndSort';
import {Cart} from './components/Card/ProductCard'

function App() {
  const cart:Cart[] = [
    {id:1, quantity:3},
    {id:2, quantity:2},
    {id:5, quantity:4},
  ]
  return (
    <>
      <Header />
      <SearchAndSort />
      <CardList />
      <CartList cart={cart} total={200}/>
    </>
  );
}

export default App;
