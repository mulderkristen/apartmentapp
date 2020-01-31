import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';

//pages
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import ProtectedApartments from './pages/ProtectedApartments';
import ApartmentNew from './pages/ApartmentNew';
import ApartmentShow from './pages/ApartmentShow';
import ProtectedApartmentShow from './pages/ProtectedApartmentShow';


class MainApp extends React.Component {
    constructor(props) {
       super(props)
       this.state= {
           apartments: []
       }
       this.getApartments()
   }
   componentDidMount(){
       this.getApartments()
   }

   createApartment = (apartment)=> {
       return fetch('/apartments', {
           body: JSON.stringify(apartment),
           headers: {
               'Content-Type': 'application/json'
           },
           method: "POST"
       })
       .then((response) => {
           if(response.ok){
               return this.getApartments()
           }
       })
   }

   getApartments = () => {
       return fetch('/apartments',
       {method: "GET"}
   ).then((response)=> {
       if(response.ok){
           return(response.json())
       }
   })
    .then((apartmentsArray)=> {
        this.setState({apartments: apartmentsArray})
    })
   }
    render () {
      const {
          signed_in,
          sign_in_route,
          sign_out_route,
          current_user
      } = this.props
    return (
      <React.Fragment>

        <Router>
            <div>
                <Nav className="navbar navbar-expand-md navbar-dark bg-primary">

                  <div className="navbar-collapse collapse show" id="navbarColor01" >
                    <div className="navbar-nav mr-auto">
                      <NavItem className="nav-item active">
                        <Link className="nav-link" href="/">Apartment App <div className="sr-only">(current)</div>
                        </Link>
                      </NavItem>
                      <NavItem className="nav-item">
                        {signed_in &&
                            <div>
                                <Link className="nav-link" href="/apartmentnew">Add an Apartment </Link>
                            </div>
                        }
                      </NavItem>
                      <NavItem className="nav-item">
                        {signed_in &&
                            <div>
                                <Link className="nav-link" href="/myapartments">My Apartments</Link>
                            </div>
                        }
                      </NavItem>
                      <NavItem className="nav-item">
                        <Link className="nav-link" href="/apartments">Check out the Apartments</Link>
                      </NavItem>
                      <NavItem className="nav-item">
                          {signed_in &&
                              <div>
                                  <Link className="nav-link" href={sign_out_route}>Sign Out</Link>
                              </div>
                          }
                          {!signed_in &&
                              <div>
                                  <Link className="nav-link" href={sign_in_route}>Sign In/ Sign Up</Link>
                              </div>
                          }
                      </NavItem>
                    </div>
                  </div>
                </Nav>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route exact path="/apartmentnew" render={(props) =><ApartmentNew onSubmit={this.createApartment} current_user={current_user}/>}  />
                  <Route exact path="/apartments" render={(props) =><Apartments apartments={this.state.apartments} />} />
                  <Route exact path="/myapartments" render={(props) =><ProtectedApartments apartments={this.state.apartments} current_user={current_user}/>} />
                <Route exact path="/apartments/:id" render={(props) =><ApartmentShow {...props} apartments={this.state.apartments} />} />
                <Route exact path="/myapartments/:id" render={(props) =><ProtectedApartmentShow {...props} apartments={this.state.apartments.filter(v => v.user_id == current_user.id)} current_user={current_user}/>} />
                </Switch>
            </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
