import React from 'react';
import {Link} from 'react-router-dom';


const ApartmentShow = (props) => {
    const cardWidth = {"width": "400px"}
    const { id } = props.match.params
    const apartment = props.apartments.find((apartment) => apartment.id == parseInt(id))

    const nextApartmentIndex = props.apartments.indexOf(apartment)+1
    const nextApartment = props.apartments[nextApartmentIndex] ? props.apartments[nextApartmentIndex].id : props.apartments[0].id

    const lastApartmentIndex = props.apartments.indexOf(apartment)-1
    const lastApartment = props.apartments[lastApartmentIndex] ? props.apartments[lastApartmentIndex].id : props.apartments[props.apartments.length - 1].id


    return (
        <div className= "container">
            <div className= "row">
                <div className="col d-flex justify-content-center">

                    <div className="card border-primary mb-3 text-center" style={cardWidth} >
                        <div className="card-header text-left">Street: {apartment.street}, {apartment.city}</div>
                            <div className="card-body">
                                <h4 className="card-title"> {apartment.management_name}</h4>
                                <p className="card-text text-left">{apartment.description}</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className= "row d-flex justify-content-center justify-content-space-evenly">
                <div className="d-flex align-items-end">
                    <div className= "col-sm">
                        <Link to={`/apartments/${lastApartment}`}>
                        <button className="btn btn-primary"> Back </button></Link>
                    </div>
                    <div className= "col-sm">
                        <Link to={`/apartments/${nextApartment}`}>
                        <button className="btn btn-primary"> Next </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default ApartmentShow;
