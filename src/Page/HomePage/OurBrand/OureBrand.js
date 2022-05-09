import React from 'react';
import samsung from "../../../images/brand/samsung-logo-png-1304.png"
import nokia from "../../../images/brand/nokia-logo-png-1475.png"
import apple from "../../../images/brand/iphone-logo-534.jpg"
import microsoft from "../../../images/brand/microsoft-logo-png-2402.png"

const OurBrand = () => {
    return (


    <div className=" row row-cols-2 row-cols-md-4 px-5 my-5 g-4">
  <div className="col">
    <div className="card  border-0 h-100 shadow-lg rounded ">
      <img src={samsung} alt="" />
      
    </div>
  </div>
  <div className="col">
    <div className="card  border-0  h-100 shadow-lg rounded">
    <img src={apple} alt="" />
      
    </div>
  </div>
  <div className="col">
    <div className="card  border-0 h-100 shadow-lg rounded">
    <img className='mt-4' src={nokia} alt="" />
     
    </div>
  </div>
  <div className="col">
    <div className="card  border-0 h-100 shadow-lg rounded">
    <img src={microsoft} alt="" />
      
    </div>
  </div>
</div>

    );
};

export default OurBrand;