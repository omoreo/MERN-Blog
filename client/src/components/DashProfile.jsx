import { Button, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"

export default function Dashprofile() {

  const { currentUser } = useSelector(state => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if(imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    console.log('uploading image');
  }

  // console.log(imageFile, imageFileUrl);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <input 
          type="file" accept="image/*/" 
          onChange={handleImageChange} 
          className="border border-solid border-black dark:border-white" 
          ref={filePickerRef} 
          hidden 
        />
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden" onClick={() => filePickerRef.current.click()}>
          <img 
            src={imageFileUrl || currentUser.profilePicture} 
            alt='user-profile' 
            className="w-full h-full border-2 border-gray-800 dark:border-gray-200" 
          />
        </div>
        <TextInput
          type='text'
          id='username'
          placeholder="username"
          defaultValue={currentUser.username}
          style={{ borderRadius: '0px' }}
          className="border border-solid border-black dark:border-white"
        />
        <TextInput
          type='email'
          id='email'
          placeholder="email"
          defaultValue={currentUser.email}
          style={{ borderRadius: '0px' }}
          className="border border-solid border-black dark:border-white"
        />
        <TextInput
          type='password'
          id='password'
          placeholder="Password"
          style={{ borderRadius: '0px' }}
          className="border border-solid border-black dark:border-white"
        />
        <Button 
          type='submit' 
          color='dark' 
          style={{ borderRadius: '0px' }} 
          className="bg-white text-black hover:text-white border border-solid border-black dark:border-white dark:text-white">
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer hover:text-red-800 duration-300 ease-in dark:hover:text-red-300 ">Delete Account</span>
        <span className="cursor-pointer hover:text-red-800 duration-300 ease-in dark:hover:text-red-300 ">Sign out</span>
      </div>
    </div>
  )
}
