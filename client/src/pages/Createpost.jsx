import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Createpost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type="text" placeholder='Title' required id='title' className="flex-1 border border-black dark:border-white" style={{borderRadius: '0px'}} />
                <Select style={{borderRadius: '0px'}} className="border border-black dark:border-white">
                    <option value='uncategorized' disabled selected>Select a category</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='React.js'>React.js</option>
                    <option value='Next.js'>Next.js</option>
                </Select>
            </div>
            <div className="flex gap-4 items-center justify-between border border-black dark:border-white p-3">
                <FileInput type='file' accept="image/*" style={{borderRadius: '0px'}} className="border border-black dark:border-gray-300"/>
                <Button type='button' color='dark' size='sm' style={{borderRadius: '0px'}} className="bg-white hover:text-white text-black border-black dark:bg-gray-600 dark:text-white dark:border-white">
                    Upload Image
                </Button>
            </div>
            <ReactQuill 
                theme="snow" 
                placeholder='Write something amazing...' 
                className="h-72 mb-12" 
                required
            />
            <Button type='submit' color='dark' className="rounded-none bg-white text-black border-black dark:bg-black dark:text-white dark:border-white hover:text-white">
                Publish
            </Button>
        </form>
    </div>
  )
}
