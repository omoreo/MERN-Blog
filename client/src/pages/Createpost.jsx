import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Createpost() {

    const [file, setFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setImageUploadError] = useState(null);
    const [formData, setFormData] = useState({});

    const handleUploadImage = async () => {
        try {
            if(!file){
                setImageUploadError('Please select an image to upload');
                return;
            }
            setImageUploadError(null);
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setImageUploadProgress(progress.toFixed(0));
                },
                (error) => {
                    setImageUploadError('Image upload failed');
                    setImageUploadProgress(null);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUploadProgress(null);
                        setImageUploadError(null);
                        setFormData({ ...formData, image: downloadURL });
                    });
                }
            );

        } catch (error) {
            setImageUploadError('Image upload failed');
            setImageUploadProgress(null);
            console.log(error);
        }
    };

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
                <FileInput 
                    type='file' 
                    accept="image/*" 
                    style={{borderRadius: '0px'}} 
                    className="border border-black dark:border-gray-300"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <Button 
                    type='button' 
                    color='dark' 
                    size='sm' 
                    style={{borderRadius: '0px'}} 
                    className="bg-white hover:text-white text-black border-black dark:bg-gray-600 dark:text-white dark:border-white"
                    onClick={handleUploadImage}
                    disabled={imageUploadProgress}
                >
                    {
                        imageUploadProgress ? 
                        <div className="w-16 h-16">
                            <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`} />
                        </div>
                        : 'Upload Image'
                    }
                </Button>
            </div>
            {imageUploadError &&
                <Alert color='failure'>
                    {imageUploadError}
                </Alert>
            }
            {formData.image && (
                <img
                    src={formData.image}
                    alt='upload'
                    className="w-full h-72 object-cover"
                />
            )}
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