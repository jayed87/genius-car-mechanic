import React from 'react';
import { Link } from 'react-router-dom';
import NotFountPic from '../../images/404.png';
const NotFound = () => {
    return (
        <div>
            <img style={{ width: "100%" }} src={NotFountPic} alt="pic" />
            <Link to="/home">Go to HOme</Link>
        </div>
    );
};

export default NotFound;