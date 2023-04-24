import axios from 'axios'
import { Card } from '../components/Card/ProductCard'

const baseUrl = 'https://fakestoreapi.com'

export const getAll = async () => {
  const { data } = await axios.get<Card[]>(`${baseUrl}/products`)
  return data
}
