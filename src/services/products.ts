import axios from 'axios'
import { Card } from '../components/Card/ProductCard'

const baseUrl = 'https://fakestoreapi.com/products'

export const getAll = async () => {
  const { data } = await axios.get<Card[]>(`${baseUrl}`)
  return data
}

export const getAllCategories = async () => {
  const { data } = await axios.get<string[]>(`${baseUrl}/categories`)
  return data
}

export const getOneCategory = async (category:string) => {
  const { data } = await axios.get<Card[]>(`${baseUrl}/category/${category}`)
  return data
}
