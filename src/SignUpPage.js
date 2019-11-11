import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AvForm, AvGroup, AvField } from 'availity-reactstrap-validation';
import Logo from "./serviceLogo.jpg";
class Register extends Component {
    constructor(props) {
        super(props);
        this.handleCompanyNamechange = this.handleCompanyNamechange.bind(this);
        this.handleContactNamechange = this.handleContactNamechange.bind(this);
        this.handleEmailchange = this.handleEmailchange.bind(this);
        this.handleMobilechange = this.handleMobilechange.bind(this);
        this.handleUserIDchange = this.handleUserIDchange.bind(this);
        this.handleNOBchange = this.handleNOBchange.bind(this);
        this.handleTOBchange = this.handleTOBchange.bind(this);
        this.handleAddress1change = this.handleAddress1change.bind(this);
        this.handleAddress2change = this.handleAddress2change.bind(this);
        this.handlePasswordchange = this.handlePasswordchange.bind(this);
        this.handleConfirmPasswordchange = this.handleConfirmPasswordchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            companyName: '',
            contactName: '',
            Email: '',
            Mobile: '',
            UserID: '',
            NOB: '',
            TOB: '',
            Address1: '',
            Address2: '',
            Password: '',
            ConfirmPassword: '',
        }
    }
    handleCompanyNamechange = (event) => {
        this.setState({
            companyName: event.target.value
        })
    }
    handleContactNamechange = (event) => {
        this.setState({
            contactName: event.target.value
        })
    }
    handleEmailchange = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    handleNOBchange = (event) => {
        this.setState({
            NOB: event.target.value
        })
    }
    handleTOBchange = (event) => {
        this.setState({
            TOB: event.target.value
        })
    }
    handleAddress1change = (event) => {
        this.setState({
            Address1: event.target.value
        })
    }
    handleAddress2change = (event) => {
        this.setState({
            Address2: event.target.value
        })
    }
    handlePasswordchange = (event) => {
        this.setState({
            Password: event.target.value
        })
    }
    handleConfirmPasswordchange = (event) => {
        this.setState({
            ConfirmPassword: event.target.value
        })
    }
    handleMobilechange = (event) => {
        this.setState({
            Mobile: event.target.value
        })
    }
    handleUserIDchange = (event) => {
        this.setState({
            UserID: event.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const SignUp = {
            companyName: this.state.companyName,
            contactName: this.state.contactName,
            Email: this.state.Email,
            Mobile: this.state.Mobile,
            UserID: this.state.UserID,
            NOB: this.state.NOB,
            TOB: this.state.TOB,
            Address1: this.state.Address1,
            Address2: this.state.Address2,
            Password: this.state.Password,
            ConfirmPassword: this.state.ConfirmPassword,
        }
        console.log(SignUp)
        if (this.state.companyName && this.state.contactName && this.state.Email && this.state.Mobile && this.state.UserID && this.state.NOB && this.state.TOB && this.state.Address1 && this.state.Address2 && this.state.Password && this.state.ConfirmPassword != '') {
            axios.post('http://localhost:9000/users/create', SignUp)
                .then(res => console.log(res.data))
            alert('Registered Successfully')
            // window.location = '/LoginPage_KPO'

        }
        else {
            alert('enter valid data')
            console.log('enter valid data')
        }

    }
    render() {
        return (
            <div className="gray-bg">
                <div className="middle-box text-center loginscreen   animated fadeInDown">
                    <div>
                        <img alt="" className="logo-name" src={Logo} style={{ width: "5em", borderRadius: "2em" }} />
                        <h3>Register your company for Service KPO</h3>
                        <p>Create account to see it in action.</p>
                        <AvForm className="m-t" onSubmit={this.onSubmit}>
                            <AvGroup className="form-group">
                                <AvField type="text" className="form-control" placeholder="Name of the Company" name="companyName" value={this.state.companyName} onChange={this.handleCompanyNamechange} validate={{
                                    required: { value: true, errorMessage: 'please enter Your Name' },
                                    pattern: { value: '^[A-Za-z]+$', errorMessage: 'company Name must be composed only with letters' },
                                    minLength: { value: 6, errorMessage: 'company Name must be between 6 and 16 characters' },
                                    maxLength: { value: 20, errorMessage: 'company Name must be between 6 and 20 characters' }
                                }} />
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="text" className="form-control" placeholder="ContactName" name="ContactName" value={this.state.contactName} onChange={this.handleContactNamechange} validate={{
                                    required: { value: true, errorMessage: 'please enter Your Name' },
                                    pattern: { value: '^[A-Za-z]+$', errorMessage: 'Your Name must be composed only with letters' },
                                    minLength: { value: 4, errorMessage: 'Your Name must be between 4 and 16 characters' },
                                    maxLength: { value: 16, errorMessage: 'Your Name must be between 4 and 16 characters' }
                                }} />
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="email" className="form-control" name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleEmailchange} required validate={{
                                    email: true,
                                    required: { value: true, errorMessage: 'please enter your Email' }
                                }} />
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="text" className="form-control" name="Mobile" placeholder="Mobile" value={this.state.Mobile} onChange={this.handleMobilechange} required validate={{
                                    tel: true,
                                    required: { value: true, errorMessage: 'please enter a Mobile Number' },
                                    pattern: { value: '[0-9]', errorMessage: 'Your Mobile Should contain only numbers' },
                                    minLength: { value: 10, errorMessage: 'Your Mobile Number should not be less than 10 characters' },
                                    maxLength: { value: 10, errorMessage: 'Your Mobile Number should not be more than 10 characters' },
                                }} />
                            </AvGroup>
                        
                            <AvGroup className="form-group">
                                <AvField type="select" name="NatureOfBusiness" value={this.state.NOB} onChange={this.handleNOBchange} required>
                                    <option selected="defaultvalue" hidden>---Select natureOfCompany---</option>
                                    <option>Hardware</option>
                                    <option>Electrical</option>
                                    <option>Electonics</option>
                                </AvField>
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="select" name="TypeOfBusiness" value={this.state.TOB} onChange={this.handleTOBchange} required>
                                    <option selected="defaultvalue" hidden>---Select typeOfCompany---</option>
                                    <option>LLP</option>
                                    <option>LLC</option>
                                    <option>Pvt Ltd</option>
                                </AvField>
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="text" className="form-control" placeholder="Address1" name="Address1" value={this.state.Address1} onChange={this.handleAddress1change} required />
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="text" className="form-control" placeholder="Address2" name="Address2" value={this.state.Address2} onChange={this.handleAddress2change} required />
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="text" className="form-control" name="UserID" placeholder="UserID" value={this.state.UserID} onChange={this.handleUserIDchange} required validate={{
                                    required: { value: true, errorMessage: 'please enter a UserId' }
                                }} />
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="password" className="form-control" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handlePasswordchange} validate={{
                                    required: { value: true, errorMessage: 'please enter Password' },
                                    pattern: { value: '^[A-Za-z0-9]+$' },
                                    minLength: { value: 8, errorMessage: 'The Password Must be atleast 8 characters minimum' },
                                    maxLength: { value: 16, errorMessage: 'The password Should not be more than 16 characters' }
                                }} />
                            </AvGroup>
                            <AvGroup className="form-group">
                                <AvField type="password" className="form-control" name="ConfirmPassword" placeholder="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleConfirmPasswordchange} validate={{
                                    required: { value: true, errorMessage: 'please re-enter Password' },
                                    pattern: { value: '^[A-Za-z0-9]+$' },
                                    minLength: { value: 8, errorMessage: 'The Password Must be atleast 8 characters minimum' },
                                    maxLength: { value: 16, errorMessage: 'The password Should not be more than 16 characters' },
                                    match: { value: 'Password', errorMessage: 'The Passwords Does not match' }
                                }} />
                            </AvGroup>
                            <div className="form-group">
                                <div className="checkbox i-checks"><label> <input type="checkbox" /><i></i> Agree the terms and policy </label></div>
                            </div>
                            <button href="/LoginPage_KPO" type="submit" onClick={this.onSubmit} className="btn btn-primary block full-width m-b">Register</button>
                            <p className="text-muted text-center"><small>Already have an account?</small></p>
                            <a className="btn btn-sm btn-white btn-block" href="/LoginPage_KPO">Login</a>
                        </AvForm>
                        <p className="m-t"> <small>Service KPO we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register