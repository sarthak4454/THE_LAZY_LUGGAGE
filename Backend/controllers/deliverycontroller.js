import axios from 'axios';

export const testPinCodes = async (req, res) => {
  const { pincode } = req.query; // Get pincode from query parameters
  try {
    const response = await axios.get(`https://api.delhivery.com/pincodes/${pincode}`, {
      headers: {
        'Authorization': 'Token 5c080c1981483b931e8c4948dd1cd22e55e2f5b8'
      }
    });
    console.log(response)
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
