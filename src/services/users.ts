import axios from 'axios'
import { User } from '../types/types'

const baseUrl = 'https://fakestoreapi.com/users'

export const getOne = async (id:number) => {
  const { data } = await axios.get<User>(`${baseUrl}/${id}`)
  return data
}
