import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const SignIn = () => {

  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() }); //id: text-haddle
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page from reloading

    if(!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields.')); //error message
    }

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

        const data = await res.json();

        if(data.success === false) {
          dispatch(signInFailure(data.message));
        }
        
        if(res.ok) {
          dispatch(signInSuccess(data));
          navigate('/');
        }

    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen mt-20 font-outfit'>
      <div className='flex p-10 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 border-solid border border-black dark:border-white'>
        {/* Left */}
        <div className="flex-1">
          <Link to='/' className="font-bold dark:text-white text-4xl">
          <span className='px-2 py-2 border-solid border-2 border-black dark:border-white dark:text-white text-black'>
            Blog-web
          </span>
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              {/* <Label value="Your email" /> */}
              <TextInput 
                type="email"
                placeholder="name@example.com"
                id="email"
                style={{ borderRadius: '0px' }}
                className='border-solid border border-black dark:border-white dark:text-white text-black'
                onChange={handleChange}
              />
            </div>
            <div>
              {/* <Label value="Your password" /> */}
              <TextInput 
                type="password"
                placeholder="Password"
                id="password"
                style={{ borderRadius: '0px' }}
                className='border-solid border border-black dark:border-white dark:text-white text-black'
                onChange={handleChange}
              />
            </div>
            <Button color='dark' className='rounded-none bg-white text-black border-solid border border-black hover:text-white dark:text-white dark:border-white' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't Have an account ?</span>
            <Link to='/sign-up' className='text-blue-500 hover:drop-shadow-sm'>Sign up</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5 rounded-none border-solid  border-red-700' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default SignIn