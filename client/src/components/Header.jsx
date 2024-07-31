import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'
import { signoutSuccess } from '../redux/user/userSlice'

export default function Header() {

  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { theme } = useSelector(state => state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className='border-b-2 font-outfit'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-medium'>
          <span className='px-2 py-2 border-solid border-2 border-black text-black bg-white dark:text-white dark:bg-black dark:border-white'>
            Blog-web
          </span>
        </Link>
        <form className='border-solid border border-black dark:border-white'>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            style={{ borderRadius: '0px' }}
            className='hidden lg:inline'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button 
            className='w-12 h-11 hidden sm:inline rounded-none' 
            color="gray" 
            pill 
            onClick={() => dispatch(toggleTheme())}
          >
            { theme === 'light' ? <FaMoon /> : <FaSun className='text-white' /> }
            {/* <FaMoon /> */}
          </Button>
          { currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                  <Avatar 
                    alt='user avatar'
                    img={currentUser.profilePicture}
                    className='border-solid border border-gray-200 rounded-none'
                  />
                }
            >
              <Dropdown.Header>
                <span className='block text-sm'>@{ currentUser.username }</span>
                <span className='block text-sm font-medium truncate'>@{ currentUser.email }</span>
                <Link to={'/dashboard?tab=profile'}>
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                </Link>
              </Dropdown.Header>
            </Dropdown>
          ) :
            (
              <Link to='/signin'>
                <Button color="dark" className='rounded-none border-solid border-2 border-black bg-white text-black hover:bg-black hover:text-white'>Sign in</Button>
              </Link>
            )
          }
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
