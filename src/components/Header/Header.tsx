import logo from './logo.png'

export default function Header() {
  return (
    <header id='header' className='grid grid-cols-3 px-5 sticky top-0 z-10'>
      <div id='user-detail' className='flex justify-start items-center'>
        <div className='flex items-center justify-start'>
          <i className='fa-regular fa-circle-user fs-2 fa-2xl'></i>
          <p className='mb-0 ms-2 hidden sm:block'>Hi, James</p>
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
