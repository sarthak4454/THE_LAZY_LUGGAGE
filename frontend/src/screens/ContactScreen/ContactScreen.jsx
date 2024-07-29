import React , {useState} from 'react';
import './ContactScreen.css';
import image2 from './img1.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactScreen = () => {
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
   
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <div className="contact-screen">
    
        <h1>Contact Us</h1>

        <div className="contact-form">
        <div className="for-container">
        <form>
        <div className="input-group">
       
          <input
            type="text"
            id="firstName"
            value={inputValues.firstName}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="firstName"
            className={inputValues.firstName ? 'filled' : ''}
          >
            First Name
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="lastName"
            value={inputValues.lastName}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="lastName"
            className={inputValues.lastName ? 'filled' : ''}
          >
            Last Name
          </label>
        </div>
        <div className="input-group">
          <input
            type="email"
            id="email"
            value={inputValues.email}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="email"
            className={inputValues.email ? 'filled' : ''}
          >
            Email
          </label>
        </div>
        
       
     
       
       
        
        <button type="submit" className='contact-btn'>Contact Us</button>
        </form>
        </div>

        <div className="contact-info">
            <div id="contact-email" className="contact-info-container">
                 <h4>Contact</h4>
                  <p>LazyLuggage@gmail.com</p>
            </div>

            <div id="contact-location" className="contact-info-container">
                  <h4>Based in</h4>
                  <p>Delhi, India</p>
            </div>

            <div id="contact-icons" className="contact-info-container">
               <InstagramIcon/>
               <WhatsAppIcon/>
               <MailOutlineIcon/> 
            </div>
        </div>
        </div>
      <div className="contact-image">
          
           
      </div>
        
    </div>
  )
}

export default ContactScreen