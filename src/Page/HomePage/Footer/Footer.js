import React from 'react';
import logo1 from '../../../images/logo/Facebook.png'
import logo2 from '../../../images/logo/Github.png'
import logo3 from '../../../images/logo/twitter.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='sticky-bottom mt-5 bg-dark text-white py-5'>
            
          <div className='d-flex justify-content-around'>

          <small>Ggrocery © {year}  All Rights Reserved.</small>

<div>
    <img width={30} className='me-4' src={logo1} alt="" />
    <img width={25} className='me-4' src={logo2} alt="" />
    <img width={22} className='me-2' src={logo3} alt="" />
</div>
          </div>
        </div>
    );
};

export default Footer;