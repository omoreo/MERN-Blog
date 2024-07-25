import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

const FooterCom = () => {
  return (
    <Footer container className='font-outfit border-t-2 rounded-none'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='grid w-full justify-between sm:flex md:gird-cols-1'>
            <div className='mt-5'>
            <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-medium dark:text-white'>
              <span className='px-2 py-2 border-solid border-2 border-black text-black bg-white dark:text-white dark:bg-black dark:border-white'>
                Blog-web
              </span>
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href='/about'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                    My Blog
                  </Footer.Link>
                  <Footer.Link
                    href='#'
                    // target='_blank'
                    // rel='noopener noreferrer'
                    >
                    Dummy
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href='https://github.com/omoreo'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                    Github
                  </Footer.Link>
                  <Footer.Link
                    href='#'
                    // target='_blank'
                    // rel='noopener noreferrer'
                    >
                    Dummy
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="#"
                    >
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link
                    href='#'
                  >
                    Terms &amp; Conditions
                  </Footer.Link>
              </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href="#" by="My Blog" year={new Date().getFullYear()} />
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
              <div className='hover:scale-125 ease-in duration-300'>
                <Footer.Icon href="#" icon={BsFacebook} className='text-gray-600 hover:text-blue-600 ease-out hover:ease-in-out duration-800 dark:text-white dark:hover:text-blue-600' />
              </div>
              <div className='hover:scale-125 ease-in duration-300'>
                <Footer.Icon href="#" icon={BsInstagram} className='text-gray-600 hover:text-pink-400 dark:text-white dark:hover:text-pink-400' />
              </div>
              <div className='hover:scale-125 ease-in duration-300'>
                <Footer.Icon href="#" icon={BsGithub} className='text-gray-600 hover:text-gray-800 easeo-ut hover:ease-in duration-800 dark:text-white '/>
              </div>
            </div>
          </div>
        </div>
    </Footer>
  )
}

export default FooterCom