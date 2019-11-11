import React, { Component, } from 'react';
import userlogo from '../src/user-blue.png';
import logo2 from '../src/company-icon.png';
import { Card, CardImg, Row, Col, Container } from 'reactstrap';

class RegisterAs extends Component {
    render() {
        return (
            <div>
                <div className="gray-bg">
                    <div className="middle-box text-center loginscreen animated fadeInDown">
                        <div>
                            <h3>Register for Service KPO</h3>
                            <p>Create account to see it in action.</p>
                            <div >
                                <Container align="center">
                                    <Row>
                                        <Col>
                                            <CardImg top  src={logo2} alt="Image" />
                                            <a href="/SignUpPage"><p>Register as Company</p></a>
                                        </Col>
                                        <Col>
                                            <CardImg top style = {{height: "70%", width: "120%"}} src={userlogo} alt="Image" />
                                            <a href="/SignUp1"><font>Register as Customer</font></a>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                             <br />
                              <br />
                               <br />
                                <br />
                                 <br />
                                  <br />
                        </div>
                        <p className="m-t"> <small>Service KPO we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                    </div>
                </div>
            </div>

        )
    }
}
export default RegisterAs;
