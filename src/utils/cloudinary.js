import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


          
cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilepath) =>{
    try {
        if(!localFilepath) return null
        //upload the file on cloudinary

        const response = await cloudinary.uploader.upload
        (localFilepath,{
            resource_type: "auto"
        })
        // file has been upload succesfully
        console.log("file is uploaded on cloudinary", response.url);

        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilepath) // remove the temporarly saved file if file upload operation is failed
        return null;
        
    }

}

export {uploadOnCloudinary}









cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });