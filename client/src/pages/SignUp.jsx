import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-10 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 border-solid border border-black'>
        {/* Left */}
        <div className="flex-1">
          <Link to='/' className="font-bold dark:text-white text-4xl">
          <span className='px-2 py-2 border-solid border-2 border-black text-black'>
            Blog-web
          </span>
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="Your username" />
              <TextInput 
                type="text"
                placeholder="Username"
                id="username"
                style={{ borderRadius: '0px' }}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput 
                type="email"
                placeholder="Email"
                id="email"
                style={{ borderRadius: '0px' }}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput 
                type="password"
                placeholder="Password"
                id="password"
                style={{ borderRadius: '0px' }}
              />
            </div>
            <Button color='dark' className='rounded-none bg-white text-black border-solid border-2 border-black hover:text-white' type='submit'>
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp