import axios from 'axios'
import { Card } from '../components/Card/ProductCard'

const baseUrl = 'https://fakestoreapi.com/products'

export const getAll = async () => {
  const { data } = await axios.get<Card[]>(`${baseUrl}`)
  return data
}
