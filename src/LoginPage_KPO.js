import React, { Component } from 'react';
import axios from 'axios'
import { AvForm, AvGroup, AvField } from 'availity-reactstrap-validation';
import Logo from "./serviceLogo.jpg";

class LoginPage_KPO extends Component {
    constructor(props) {
        super(props)
        this.handleemailchange = this.handleemailchange.bind(this);
        this.handlepasswordchange = this.handlepasswordchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            Login: []
        }
    }
    handleemailchange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlepasswordchange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {  
        event.preventDefault();
        // debugger;  
        fetch('http://localhost:9000/users/', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.email,  
                password: this.state.password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status == 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/");  
            })  
    }  
    // onSubmit(e) {
    //     debugger;
    //     e.preventDefault();
    //     const Login = {
    //         email: this.state.email,
    //         password: this.state.password
    //     }
    //     if (this.state.email && this.state.password != "") {
    //         console.log(Login)
    //         axios.post('http://localhost:5000/Login/add', Login)
    //             .then(res => console.log(res.data))
    //         alert('Login Successful')
    //         window.location = '/Company_Search'
    //         axios.get('http://localhost:5000/Login/')
    //             .then(res => console.log(res.data))
    //     }
    //     else {
    //         console.log('Error')
    //         alert('Please enter valid data')
    //     }
    // }
    render() {
        return (
            <div className="gray-bg">
                <div className="middle-box text-center loginscreen animated fadeInDown">
                    <div>
                        <div>
                            <img alt="" className="logo-name" src={Logo} style={{ opacity: "10px", width: "5em", borderRadius: "2em" }} />
                        </div>
                        <h3>Welcome to Service KPO</h3>
                        <p>Login in. To see it in action.</p>
                        <AvForm className="m-t"  >
                            <AvGroup className="form-group">
                                <AvField type="emailProp" name="Email" className="form-control" id="Email" placeholder="Email" value={this.state.email} onChange={this.handleemailchange} validate={{
                                    email: true,
                                    required: { value: true, errorMessage: 'please enter a Email' }
                                }} />
                            </AvGroup>
                            <div className="form-group">
                                <AvField type="password" className="form-control" name="Password" id="Password" placeholder="Password" value={this.state.password} onChange={this.handlepasswordchange} validate={{
                                    required: { value: true, errorMessage: 'please enter password' },
                                    pattern: { value: '^[A-Za-z0-9]+$' },
                                    minLength: { value: 8, errorMessage: 'The Password Must be atleast 8 characters minimum' },
                                    maxLength: { value: 16, errorMessage: 'The password Should not be more than 16 characters' }
                                }} />
                            </div>
                            <button type="Submit" onClick={this.onSubmit} className="btn btn-primary block full-width m-b">Login</button>
                            <a href="/ForgotPassword"><small>Forgot password?</small></a>
                            <p className="text-muted text-center"><small>Do not have an account?</small></p>
                            <a className="btn btn-sm btn-white btn-block" href="/RegisterAs">Create an account</a>
                        </AvForm>
                        <p className="m-t"> <small>Service KPO, we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage_KPO