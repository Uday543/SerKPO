import React, { Component } from 'react';
import { AvForm, AvGroup, AvField } from 'availity-reactstrap-validation';

class OtpVerificationPage extends Component {
    render() {
        return (
            <div>
               <div className="gray-bg">
                <div className="middle-box text-center loginscreen animated fadeInDown">
                    <div>
                        <h3>Company Registration OTP</h3>
                        <AvForm className="m-t"  >
                            <AvGroup className="form-group">
                                <AvField type="text" name="EmailOTP" className="form-control" id="EmailOTP" placeholder="Email OTP" validate={{
                                    email: true,
                                    required: { value: true, errorMessage: 'please enter a Email' }
                                }} />
                            <button type="Submit" className="btn btn-primary block full-width m-b">Verify OTP</button>
                            </AvGroup>
                            <div className="form-group">
                                <AvField type="text" className="form-control" name="Mobile" placeholder="Mobile OTP" required />
                            </div>
                            <button type="Submit" className="btn btn-primary block full-width m-b">Verify OTP</button>
                           <br /> 
                           <br />
                           <br />
                           <br />
                           
                        </AvForm>
                    
                        <br />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default OtpVerificationPage
