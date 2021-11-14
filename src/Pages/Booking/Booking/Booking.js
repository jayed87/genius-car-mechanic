import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { id } = useParams();
    // const { id } = props;
    return (
        <div>
            <h2>This is Booking page : {id}</h2>
        </div>
    );
};

export default Booking;