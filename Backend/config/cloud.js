// const cloudinary = require("cloudinary").v2;


// const cloudinaryConnect = () =>
// {
//     try
//     {   cloudinary.config({ 
//         cloud_name: process.env.CLOUD_NAME, 
//         api_key: process.env.CLOUD_APIKEY, 
//         api_secret: process.env.CLOUD_SECRET
//         });
    

//         console.log(cloud_name);
//         console.log(api_key);
//         console.log(api_secret);
//     }
//     catch(error)
//     {
//         console.log(error)

//     }
// }


// module.exports = cloudinaryConnect;


const cloudinary = require("cloudinary").v2;

const cloudinaryConnect = () => {
    try {
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.CLOUD_APIKEY, 
            api_secret: process.env.CLOUD_SECRET
        });

      
    } catch (error) {
        console.log(error);
    }
}

module.exports = cloudinaryConnect;
