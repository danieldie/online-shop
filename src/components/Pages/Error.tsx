import { NavLink } from 'react-router-dom'
import logo from '../Header/logo.png'

const Error: React.FC = () => {
  return (
    <>
      <header id='header' className='sticky top-0 px-5 z-10'>
        <nav className='grid grid-cols-1'>
          
          <NavLink
            to='/'
            id='logo'
            className='flex justify-center items-center'
          >
            <div>
              <img src={logo} alt='shopify logo' />
            </div>
          </NavLink>
        </nav>
      </header>
      <main className='my-7 p-3 mx-auto text-center border-2 border-gray-400 w-[350px] sm:w-[500px]'>
        <h2 className='text-2xl font-bold my-2'>Sorry :/</h2>
        <p>Something went wrong.</p>
        <p>Please come back later.</p>
      </main>
    </>
  )
}

export default Error
