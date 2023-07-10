import logo from './logo.png'
import { User, Cart } from '../../types/types'
import { NavLink } from 'react-router-dom'
import { memo } from 'react'

let Header: React.FC<{ cart: Cart[]; userApi: User }> = (props) => {
  const cartQuantity = props.cart.reduce((total, current) => {
    return total + current.quantity
  }, 0)

  return (
    <header id='header' className='sticky top-0 px-5 z-10'>
      <nav className='grid grid-cols-3 '>
        <NavLink
          to='/'
          id='user-detail'
          className='flex justify-start items-center'
        >
          <div className='flex items-center justify-start'>
            <i className='fa-regular fa-circle-user fs-2 fa-2xl'></i>
            <p className='mb-0 ms-2 hidden sm:block'>
              Hi, {props.userApi.name.firstname}
            </p>
          </div>
        </NavLink>

        <NavLink to='/' id='logo' className='flex justify-center items-center'>
          <div>
            <img src={logo} alt='shopify logo' />
          </div>
        </NavLink>

        <NavLink to='/cart' id='cart' className='flex justify-end items-center'>
          <div className='flex items-center justify-end'>
            <p className='mb-0 mr-2' id='cart-text'>
              Cart
            </p>
            <div
              className='text-white bg-red-600 circle flex items-center justify-center'
              id='cart-number'
            >
              {cartQuantity}
            </div>
          </div>
        </NavLink>
      </nav>
    </header>
  )
}

Header = memo(Header)

export default Header
