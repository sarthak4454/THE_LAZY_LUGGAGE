// import React, { useState, useEffect } from 'react';
// import './Header.css';
// import MenuSharpIcon from '@mui/icons-material/MenuSharp';
// import SearchSharpIcon from '@mui/icons-material/SearchSharp';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import { useLocation, useNavigate } from 'react-router-dom';
// import SlidingPanel from '../../screens/SlidingPanel/SlidingPanel';
// import CloseIcon from '@mui/icons-material/Close';

// const Header = () => {
//   const location = useLocation();
  
//   const [scrolled, setScrolled] = useState(false);
//   const [isPanelOpen, setIsPanelOpen] = useState(false); 

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navigate = useNavigate(); 

//   const handleMenuToggle = () => {
//     navigate("/menu2");
//   };

//   const accountIconClickHandler = () => {
//     navigate("/account");
//   };

//   const cartIconHandler = () => {
//     setIsPanelOpen(true); 
//   };

//   const togglePanel = () => {
//     setIsPanelOpen(prev => !prev); 
//   };

//   const crossiconheader = ['/menu2' ];

//   const nocrossiconheader = !crossiconheader.includes(location.pathname);
//   return (
//     <>
//       {nocrossiconheader && (
//         <>
//           <nav className={`Header ${scrolled ? 'scrolled' : ''}`}>
//             <div className="header-left">
//               <MenuSharpIcon
//                 className="menu-toggle"
//                 style={{ color: scrolled ? 'black' : 'white' }}
//                 onClick={handleMenuToggle}
//               />
//               <h1 className='logo'style={{ color: scrolled ? 'black' : 'white' }}> THE LAZY LUGGAGE</h1>
//             </div>
//             <div className="navbar-right">
//               <SearchSharpIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} />
//               <AccountCircleRoundedIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} onClick={accountIconClickHandler} />
//               <ShoppingCartRoundedIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} onClick={cartIconHandler} />
             
//             </div>

//           </nav>
//           <SlidingPanel isOpen={isPanelOpen} togglePanel={togglePanel} />
//         </>
//       )}

//       {location.pathname === '/menu2' && (
//         <>
//           <nav className="Header" style={{ position: "fixed" , backgroundColor: "white"}}>
//             <div className="header-left">
//               <CloseIcon className="close-icon" onClick={() => navigate(-1)} />
//             </div>
//           </nav>
          
//         </>
//       )}
//     </>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import SlidingPanel from '../../screens/SlidingPanel/SlidingPanel';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleMenuToggle = () => {
    navigate("/menu2");
  };

  const accountIconClickHandler = () => {
    navigate("/account");
  };

  const cartIconHandler = () => {
    setIsPanelOpen(true);
  };

  const togglePanel = () => {
    setIsPanelOpen(prev => !prev);
  };

  const menuheader = ['/menu2'];
  const scrollheader = ['/'];
  const restheaders = !(scrollheader.includes(location.pathname)) && !(menuheader.includes(location.pathname));

  return (
    <>
      {scrollheader.includes(location.pathname) && (
        <>
          <nav className={`Header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-left">
              <MenuSharpIcon
                className="menu-toggle"
                style={{ color: scrolled ? 'black' : 'white' }}
                onClick={handleMenuToggle}
              />
              <h1 className='logo' style={{ color: scrolled ? 'black' : 'white' }}> THE LAZY LUGGAGE</h1>
            </div>
            <div className="navbar-right">
              <SearchSharpIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} />
              <AccountCircleRoundedIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} onClick={accountIconClickHandler} />
              <ShoppingCartRoundedIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} onClick={cartIconHandler} />
            </div>
          </nav>
          <SlidingPanel isOpen={isPanelOpen} togglePanel={togglePanel} />
        </>
      )}

      {menuheader.includes(location.pathname) && (
        <>
          <nav className="Header" style={{ position: "fixed", backgroundColor: "white" }}>
            <div className="header-cross">
              <CloseIcon fontSize="lg" className="close-icon" onClick={() => navigate(-1)} />
            </div>
          </nav>
        </>
      )}

      {restheaders && (
        <>
         
          <nav className="Header" style={{ position: "fixed", backgroundColor: "white" }}>
            <div className="header-left">
              <MenuSharpIcon
                className="menu-toggle"
                style={{ color:"black" }}
                onClick={handleMenuToggle}
              />
              <h1 className='logo' style={{ color:"black" }}> THE LAZY LUGGAGE</h1>
            </div>
            <div className="navbar-right">
              <SearchSharpIcon className="right-icons" style={{ color:"black" }}/>
              <AccountCircleRoundedIcon className="right-icons" style={{ color:"black" }}onClick={accountIconClickHandler} />
              <ShoppingCartRoundedIcon className="right-icons" style={{ color:"black" }} onClick={cartIconHandler} />
            </div>
          </nav>
          <SlidingPanel isOpen={isPanelOpen} togglePanel={togglePanel} />
         
        </>
      )}
    </>
  );
};

export default Header;
