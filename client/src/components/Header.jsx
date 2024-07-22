import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {

  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2 font-outfit'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-medium dark:text-white'>
          <span className='px-2 py-2 border-solid border-2 border-black text-black bg-white'>
            Blog-web
          </span>
        </Link>
        <form>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            style={{ borderRadius: '0px', border: '2px solid black' }}
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-11 hidden sm:inline rounded-none' color="gray" pill>
            <FaMoon />
          </Button>
          <Link to='/signin'>
            <Button color="dark" className='rounded-none border-solid border-2 border-black bg-white text-black hover:bg-black hover:text-white'>Sign in</Button>
          </Link>
          <Navbar.Toggle />
        </div>
          <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
              <Link to='/'>Home</Link>
            </Navbar.Link >
            <Navbar.Link active={path === '/about'} as={'div'}>
              <Link to='/about'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
              <Link to='/projects'>Projects</Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}
