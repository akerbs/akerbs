import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    // <div>
    //   <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
    //     <span className='font-bold'>Shop 2022</span>

    //     <span>
    //       <Link to='/' className='mr-2'>Home</Link>
    //       <Link to='/portfolio'>Portfolio</Link>
    //       <Link to='/contact'>Contact me</Link>
    //     </span>
    //   </nav>
    // </div>
    <nav className="App-nav">
    <Link to="/" className="header-link">
      home
    </Link>

    <Link to="/portfolio" className="header-link">
      portfolio
    </Link>

    <Link to="/contact" className="header-link">
      contact
    </Link>
  </nav>
  )
};
