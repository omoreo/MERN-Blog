import { Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function DashSidebar() {

  const location = useLocation();
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    // console.log(tabFromUrl);

    if(tabFromUrl) {
      setTab(tabFromUrl);
    }
    
  }, [location.search])

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/sign-out', {
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
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item 
              active={ tab === 'profile' } 
              icon={HiUser} 
              label={'User'} 
              labelColor='dark' 
              className='rounded-none'
              as="div"
              
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer rounded-none' onClick={handleSignout}>
            Sign out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
