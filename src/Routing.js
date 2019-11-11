import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Company_Edit from "./Company_Edit";
import Company_Add from './Company_Add';
import Customer_Add from './Customer_Add';
import Customer_Search from "./Customer_Search";
import Company_Search from "./Company_Search";
import SignUpPage from './SignUpPage'
import LoginPage_KPO from './LoginPage_KPO';
import ForgotPassword from './ForgotPassword';
import RegisterAs from './RegisterAs';

class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoginPage_KPO} />
                        <Route exact path="/RegisterAs" component={RegisterAs} />
                        <Route exact path="/SignUpPage" component={SignUpPage} />  
                        <Route exact path="/LoginPage_KPO" component={LoginPage_KPO} />
                        <Route exact path="/ForgotPassword" component={ForgotPassword} /> 
                        <Route exact path="/Company_Search" component={Company_Search} />
                        <Route exact path="/Company_Edit" component={Company_Edit} />
                        <Route exact path="/Company_Add" component={Company_Add} />
                        <Route exact path="/Customer_Add" component={Customer_Add} />
                        <Route exact path="/Company_Search" component={Company_Search} />
                        <Route exact path="/Customer_Search" component={Customer_Search} />
                        
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default Routing
