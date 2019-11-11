import React, { Component } from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import Logo from "./Logo.jpg";
class ForgotPassword extends Component {
    render() {
        return (

            <div className="gray-bg">
                <div className="middle-box text-center passwordBox animated fadeInDown">
                    <div>
                        <img alt="" className="logo-name" src={Logo} style={{ opacity: "10px", width: "5em", borderRadius: "2em" }} />
                    </div>
                    <h3>Welcome to Service KPO</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <h2 className="font-bold">Forgot password</h2>
                                <p>
                                    Enter your email address and password will be reset and emailed to you.
                                    </p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <AvForm className="m-t"  >
                                            <div className="form-group">
                                                <AvField type="email" name="email" className="form-control" placeholder="Email address" required validate={{
                                                    email: true,
                                                    required: { value: true, errorMessage: 'please enter a Email' }
                                                }} />
                                            </div>
                                            <button type="submit" className="btn btn-primary block full-width m-b">Send new password</button>
                                        </AvForm>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            Copyright Service KPO Company
                    </div>
                        <div className="col-md-6 text-right">
                            <small>© 2014-2015</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ForgotPassword