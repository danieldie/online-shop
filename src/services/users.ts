import axios from 'axios'
import { User } from '../components/Header/Header'

const baseUrl = 'https://fakestoreapi.com/users'

export const getOne = async (id:number) => {
  const { data } = await axios.get<User>(`${baseUrl}/${id}`)
  return data
}
