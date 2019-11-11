import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 //import LoginPage from './LoginPage';
 //import ServiceKPO_Login from './ServiceKPO_Login';
import ForgotPassword from './ForgotPassword';
import Routing from './Routing';
import CustomerTable from './CustomerTable';
import TechnicianTable from './TechnicianTable';
import Company_Edit from './Company_Edit';
import Company_Search from './Company_Search';
import Customer_Search from './Customer_Search';
import Company_Add from './Company_Add';
import Customer_Add from './Customer_Add';
import LoginPage_KPO from './LoginPage_KPO';
import SignUpPage from './SignUpPage';
import OtpVerificationPage from './OtpVerificationPage';
import RegisterAs from './RegisterAs';
//NEW COMMIT

ReactDOM.render(<Routing />, document.getElementById('root'));
// ReactDOM.render(<OtpVerificationPage />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
