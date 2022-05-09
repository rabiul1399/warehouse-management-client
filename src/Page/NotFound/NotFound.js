import React from 'react';
import img from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2>This page Not Found</h2>
            <img className='w-50 mx-auto' src={img} alt="" />
        </div>
    );
};

export default NotFound;