const File = require('../models/FileModel');
const FileModel = require('../models/FileModel');
const cloudinary = require("cloudinary").v2;

function isfiletypesupported(type,supportedtypes)
{
    return supportedtypes.includes(type);
}

async function uploadFiletoCloudinary(file,folder)
{
    const options = {folder};

    
    const result = await cloudinary.uploader.upload(file.tempFilePath , options);

    return result;

}

const imageUpload = async(req,res) =>
{
   try
   { 
    const {name , tags , email} = req.body;

    console.log(name,tags,email);

     
    // Log req.files to see the incoming file data
    const filepostman = req.files.file;
    console.log( filepostman );

    // Check if file is undefined
    if (!filepostman) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded"
        });
    }

    

    const  supportedTypes = ["jpg" , "jpeg" , "png"];

    const fileType = filepostman.name.split('.')[1].toLowerCase();

    if(!isfiletypesupported(fileType,supportedTypes))
    {
        return res.status(400).json
        (
            {
                message : "File Format not supported"
            }
        )
    }
     
   const response = await uploadFiletoCloudinary(filepostman,"LazyLuggage");
   console.log({response});
   
   const fileData = await File.create(
    {
        name, tags , email , 
        imageURL : response.secure_url,
    }
   )
   res.json({
    success : true,message : "Image Uploaded" ,
    
   })
     
   }
   catch(error)
   {
           console.error(error);
           res.status(400).json(
            {
                success : false,
                message : "Something went wrong"
            }
           )
   }
}

module.exports = { imageUpload }