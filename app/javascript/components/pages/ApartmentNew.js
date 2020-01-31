import React from 'react';
import {Form, FormGroup} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';

//this will save all our array of cats

class ApartmentNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            success: false,
            form: {
                street: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
                price: '',
                manager_name: '',
                manager_phone: '',
                contact_hours: '',
                description: '',
                user_id: this.props.current_user.id
            }
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.form)
        .then(() => {
            this.setState({success:true})
        })
    }
    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name]= event.target.value
        this.setState({form: form})
    }
    render(){
        let {street, city, state, postal_code, country, price, manager_name, manager_phone, contact_hours, description} = this.state.form
    return(
        <div>
            <h1>New Component: HEYY Apartment NEW</h1>
            <Form>
              <fieldset>
                <legend>Add a new apartment</legend>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Street Address</label>
                            <input name="street" type="text" className="form-control" id="street" aria-describedby="emailHelp" placeholder="Street Address" value={street} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">City</label>
                            <input name="city" type="text" className="form-control" id="city" aria-describedby="emailHelp" placeholder="City" value={city} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">State</label>
                            <input name="state" type="text" className="form-control" id="state" aria-describedby="emailHelp" placeholder="State" value={state} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Postal Code</label>
                            <input name="postal_code" type="text" className="form-control" id="postal_code" aria-describedby="emailHelp" placeholder="Postal Code" value={postal_code} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Country</label>
                            <input name="country" type="text" className="form-control" id="country" aria-describedby="emailHelp" placeholder="Country" value={country} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Price per Month</label>
                            <input name="price" type="text" className="form-control" id="price" aria-describedby="emailHelp" placeholder="Price per Month" value={price} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Manager Name</label>
                            <input name="manager_name" type="text" className="form-control" id="manager_name" aria-describedby="emailHelp" placeholder="Manager Name" value={manager_name} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Manager Phone</label>
                            <input name="manager_phone" type="text" className="form-control" id="manager_phone" aria-describedby="emailHelp" placeholder="Manager Phone" value={manager_phone} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Contact Hours</label>
                            <input name="contact_hours" type="text" className="form-control" id="contact_hours" aria-describedby="emailHelp" placeholder="Contact Hours" value={contact_hours} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                      <label for="exampleTextarea">Description</label>
                      <textarea className="form-control"  rows="3" id="description" type="text" value={description} name="description" onChange={this.handleChange}></textarea>
                    </FormGroup>
                    <Link to={"/apartments"}>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Add Apartment!</button></Link>
             </fieldset>
            </Form>
            {this.state.success &&
                <Redirect to="/apartments" />
            }
        </div>
    )
    }
}

export default ApartmentNew;
