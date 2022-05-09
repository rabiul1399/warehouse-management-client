import React from 'react';
import samsung from "../../../images/brand/samsung-logo-png-1304.png"
import nokia from "../../../images/brand/nokia-logo-png-1475.png"
import apple from "../../../images/brand/iphone-logo-534.jpg"
import microsoft from "../../../images/brand/microsoft-logo-png-2402.png"

const OurBrand = () => {
    return (

<div className=' row row-cols-2 row-cols-md-4   mt-5'>
<div className=' card  shadow-lg p-3  mb-5 bg-body rounded    '>
    <img className='rounded' src={samsung} alt="" />
 </div>

<div className=' card shadow-lg p-4 mb-5 bg-body rounded    '>
    <img className='rounded' src={nokia} alt="" />
    </div>
<div className=' card shadow-lg p-1  mb-5 bg-body rounded   '>
    <img className='rounded' src={apple} alt="" />
    </div>
<div className=' card shadow-lg  mb-5 bg-body rounded '>
    <img className='rounded' src={microsoft} alt="" />
    </div>


    </div>

    );
};

export default OurBrand;