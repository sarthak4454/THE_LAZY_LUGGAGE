import React, { useState } from 'react';
import './UserInfo.css';



const UserInfo = () => {
   const [inputValues, setInputValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      zipCode: '',
      city: '',
      oldPassword: '',
      newPassword: '',
    });
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setInputValues((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    };
  return (
     <div className="user-info">
        <div className='user-containers' id="user-left">
          <h1>Account Information</h1>
        </div>
        <div className='user-containers' id="user-right">
        <p >Account Information</p>

        <div className="form-container">
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
        <div className="input-group">
          <input
            type="tel"
            id="phoneNumber"
            value={inputValues.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="phoneNumber"
            className={inputValues.phoneNumber ? 'filled' : ''}
          >
            Phone Number
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="streetAddress"
            value={inputValues.streetAddress}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="streetAddress"
            className={inputValues.streetAddress ? 'filled' : ''}
          >
            Street Address
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="zipCode"
            value={inputValues.zipCode}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="zipCode"
            className={inputValues.zipCode ? 'filled' : ''}
          >
            Zip Code
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="city"
            value={inputValues.city}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="city"
            className={inputValues.city ? 'filled' : ''}
          >
            City
          </label>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="oldPassword"
            value={inputValues.oldPassword}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="oldPassword"
            className={inputValues.oldPassword ? 'filled' : ''}
          >
            Old Password
          </label>
        </div>
        <div className="input-group">
          <input
            type="password"
            id="newPassword"
            value={inputValues.newPassword}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="newPassword"
            className={inputValues.newPassword ? 'filled' : ''}
          >
            New Password
          </label>
        </div>
        <button type="submit">Update Information</button>
        </form>
        </div>
         </div>
     </div>
  )
}

export default UserInfo