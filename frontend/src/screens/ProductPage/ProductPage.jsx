// import React from 'react';
// import './Productpage.css';
// import img from './trial.webp';

// function ProductPage() {
//   return (
//     <div className="product-page">
//       <div className="fixed-section">
//         <h1>Elder Shirt Shortsleeve</h1>
//         <p>Price: 320 EUR</p>
//         <form>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" />
//           <label htmlFor="size">Select Size:</label>
//           <select id="size" name="size">
//             <option value="44">44</option>
//             <option value="46">46</option>
//             <option value="48">48</option>
//             <option value="50">50</option>
//             <option value="52">52</option>
//             <option value="54">54</option>
//           </select>
//         </form>
//       </div>
//       <div className="scrollable-section">
//         {[img, img, img, img, img, img].map((src, index) => (
//           <img key={index} src={src} alt={`Product Image ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
import React from 'react';
import './Productpage.css';
import img from './trial.webp';

function ProductPage() {
  return (
    <div className="product-page">
      <div className="fixed-section">
        <h1>Elder Shirt Shortsleeve</h1>
        <p>Price: 320 EUR</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="size">Select Size:</label>
          <select id="size" name="size">
            <option value="44">44</option>
            <option value="46">46</option>
            <option value="48">48</option>
            <option value="50">50</option>
            <option value="52">52</option>
            <option value="54">54</option>
          </select>
        </form>
      </div>
      <div className="scrollable-section">
        {[img, img, img, img, img, img].map((src, index) => (
          <img key={index} src={src} alt={`Product Image ${index + 1}`} />
        ))}
      </div>
     
    </div>
  );
}

export default ProductPage;
