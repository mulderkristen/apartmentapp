import React from 'react';
import {Link} from 'react-router-dom';



const ProtectedApartments = (props) => {
    return(
        <div>
            <h1>Protected Apartments Component: Find your apartments</h1>
            {props.apartments.map((apartment, index)=>{
                return(
                    <>
                    {apartment.user_id == props.current_user.id &&
                    <li key={index}>
                    <Link to={`/myapartments/${apartment.id}`}>Apartment in {apartment.city}, {apartment.state} for {apartment.price} per month</Link>
                    </li>}
                    </>
                )
            }
            )}
        </div>
    )
}

export default ProtectedApartments;
