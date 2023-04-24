import logo from './logo.png'
import { useState, useEffect } from 'react'
import { getOne } from '../../services/users'

export interface User {
  address: {
    geolocation: {
      lat: string
      long: string
    }
    city: string
    street: string
    number: number
    zipcode: string
  }
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  phone: string
  __v: number
}

export default function Header() {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    ;(async () => {
      const userApi = await getOne(1)
      // console.log(userApi)
      setUser(userApi)
    })()
  }, [])
  return (
    <header id='header' className='grid grid-cols-3 px-5 sticky top-0 z-10'>
      <div id='user-detail' className='flex justify-start items-center'>
        <div className='flex items-center justify-start'>
          <i className='fa-regular fa-circle-user fs-2 fa-2xl'></i>
          {user ? (
            <p className='mb-0 ms-2 hidden sm:block'>
              Hi, {user?.name.firstname}
            </p>
          ) : (
            <p className='mb-0 ms-2 hidden sm:block'>Hi, User</p>
          )}
        </div>
      </div>

      <div id='logo' className='flex justify-center items-center'>
        <div>
          <img src={logo} alt='shopify logo' />
        </div>
      </div>

      <div id='cart' className='flex justify-end items-center'>
        <div className='flex items-center justify-end'>
          <p className='mb-0 mr-2' id='cart-text'>
            Cart
          </p>
          <div
            className='text-white bg-red-600 circle flex items-center justify-center'
            id='cart-number'
          >
            0
          </div>
        </div>
      </div>
    </header>
  )
}
