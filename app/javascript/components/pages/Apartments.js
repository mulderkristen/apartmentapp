import React from 'react';
import {Link} from 'react-router-dom';



const Apartments = (props) => {
    return(
        <div>
            <h1>Apartments Component: Find your apartments</h1>
            {props.apartments.map((apartment, index)=>{
                return(
                    <li key={index}>
                    <Link to={`/apartments/${apartment.id}`}>Apartment in {apartment.city}, {apartment.state} for {apartment.price} per month</Link>
                    </li>
                )
            }
            )}
        </div>
    )
}

export default Apartments;
