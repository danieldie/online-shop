import SearchAndSort from '../SearchAndSort/SearchAndSort';
import CardList from '../CardList/CardList';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { getAll } from '../../services/products';
import { useEffect } from 'react';
import { setAllProducts } from '../../reducers/productsReducer';

const Products: React.FC = () => {
  const { products } = useAppSelector((state) => state);
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      const response = await getAll();
      dispatch(setAllProducts({productApi: response}))
    })();
  }, []);

  return (
    <>
      <SearchAndSort />
      <CardList productList={products} />
    </>
  );
};
export default Products;
