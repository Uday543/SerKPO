import React, { Component } from 'react';
import axios from 'axios';

class Company_Add extends Component {

    constructor(props) {
        super(props);

        this.onChangeCompany_ID = this.onChangeCompany_ID.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeAddress1 = this.onChangeAddress1.bind(this);
        this.onChangeAddress2 = this.onChangeAddress2.bind(this);
        this.onChangecontactNumber = this.onChangecontactNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeDateOfIncorporation = this.onChangeDateOfIncorporation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeGST = this.onChangeGST.bind(this);
        this.onChangePAN = this.onChangePAN.bind(this);
        this.onChangeTAN = this.onChangeTAN.bind(this);
        this.onChangeUserID = this.onChangeUserID.bind(this);

        this.state = {
            Company_ID: '',
            CompanyName: '',
            Address1: '',
            Address2: '',
            contactNumber: '',
            Email: '',
            Website: '',
            City: '',
            State: '',
            Country: '',
            ZipCode: '',
            Category: '',
            Status: '',
            DateOfIncorporation: '',
            Description: '',
            GST: '',
            PAN: '',
            TAN: '',
            User_ID: '',

        }
    }

    onChangeCompany_ID(e) {
        this.setState({
            Company_ID: e.target.value
        });
    }

    onChangeCompanyName(e) {
        this.setState({
            CompanyName: e.target.value
        });
    }

    onChangeAddress1(e) {
        this.setState({
            Address1: e.target.value
        });
    }

    onChangeAddress2(e) {
        this.setState({
            Address2: e.target.value
        });
    }

    onChangecontactNumber(e) {
        this.setState({
            contactNumber: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    onChangeWebsite(e) {
        this.setState({
            Website: e.target.value
        })
    }

    onChangeCity(e) {
        this.setState({
            City: e.target.value
        })
    }

    onChangeState(e) {
        this.setState({
            State: e.target.value
        })
    }

    onChangeCountry(e) {
        this.setState({
            Country: e.target.value
        })
    }

    onChangeZipCode(e) {
        this.setState({
            ZipCode: e.target.value
        })
    }

    onChangeCategory(e) {
        this.setState({
            Category: e.target.value
        })
    }

    onChangeStatus(e) {
        this.setState({
            Status: e.target.value
        })
    }

    onChangeDateOfIncorporation(e) {
        this.setState({
            DateOfIncorporation: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }

    onChangeGST(e) {
        this.setState({
            GST: e.target.value
        })
    }

    onChangePAN(e) {
        this.setState({
            PAN: e.target.value
        })
    }

    onChangeTAN(e) {
        this.setState({
            TAN: e.target.value
        })
    }

    onChangeUserID(e) {
        this.setState({
            User_ID: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const products = {
            Company_ID: this.state.Company_ID,
            CompanyName: this.state.CompanyName,
            Address1: this.state.Address1,
            Address2: this.state.Address2,
            contactNumber: this.state.contactNumber,
            Email: this.state.Email,
            Website: this.state.Website,
            City: this.state.City,
            State: this.state.State,
            Country: this.state.Country,
            ZipCode: this.state.ZipCode,
            Category: this.state.Category,
            Status: this.state.Status,
            DateOfIncorporation: this.state.DateOfIncorporation,
            Description: this.state.Description,
            GST: this.state.GST,
            PAN: this.state.PAN,
            TAN: this.state.TAN,
            User_ID: this.state.User_ID
        }
        console.log(products);
        axios.post('http://localhost:9000/products/create', products)
            .then(res => console.log(res.data)).catch(err => {
                console.log(err.res)
            });

        // window.location = '/Company_Search';
    }

    render() {
        return (

            <div>   
                <div id="wrapper">
                    <nav className="navbar-default navbar-static-side" role="navigation">
                        <div className="sidebar-collapse">
                            <ul className="nav metismenu" id="side-menu">
                                <li className="nav-header">
                                    <div className="dropdown profile-element">
                                        <img className="rounded-circle" src="" />
                                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                            <span className="block m-t-xs font-bold">David </span>
                                            <span className="text-muted text-xs block">Web Developer <b className="caret"></b></span>
                                        </a>
                                        <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                            <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                                            <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a className="dropdown-item" href="login.html">Logout</a></li>
                                        </ul>
                                    </div>    
                                </li>
                                <li>
                                    <a href="index.html"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboards</span> <span className="fa arrow"></span></a>
                                    <ul data-toggle="block" className="nav nav-second-level expand">
                                        <li><a href="index.html">Dashboard 1</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-building"></i> <span className="nav-label"> Company</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level expand">
                                        <li><a href="/Company_Search">List / Search Company</a></li>
                                        <li><a href="/Company_Add">Add Company</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-user"></i> <span className="nav-label"> Customer</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="/Customer_Search">List / Search Customer</a></li>
                                        <li><a href="/Customer_Add">Add Customer</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-th-list"></i> <span className="nav-label"> Products</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="">Product category</a></li>
                                        <li><a href="">Product List</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Service Desk</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level collapse">
                                        <li><a href="">Creating Customer</a></li>
                                        <li><a href="">Creating Asset</a></li>
                                        <li><a href="">Creating Ticket</a></li>
                                        <li><a href="">Search for Customer</a></li>
                                        <li><a href="">Search for Ticket</a></li>
                                        <li><a href="">Search for Asset</a></li>
                                        <li><a href="">Assign Ticket</a></li>
                                        <li><a href="">Modify Ticket</a></li>
                                        <li><a href="">Reassign Ticket</a></li>
                                        <li><a href="">Visits</a></li>
                                        <li><a href="">Appointments</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#"><i className="fa fa-edit"></i> <span className="nav-label">Ticket Management</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level expand">
                                        <li><a href="">Manage Ticket</a></li>
                                        <li><a href="">Assign Ticket</a></li>
                                        <li><a href="">Ticket Dashboard</a></li>
                                        <li><a href="">Update Ticket Status</a></li>
                                        <li><a href="">Ticket Reports</a></li>
                                        <li><a href="">Adding Images to tickets</a></li>
                                        <li><a href="">Adding audio to tickets</a></li>
                                        <li><a href="">Adding video to tickets</a></li>
                                        <li><a href="">Service / Repair info capture</a></li>
                                        <li><a href="">Graphs</a></li>
                                        <li><a href="">Fault information</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#"><i className="fa fa-files-o"></i> <span className="nav-label">Technician Management</span><span className="fa arrow"></span></a>
                                    <ul className="nav nav-second-level expand">
                                        <li><a href="">Adding Technician</a></li>
                                        <li><a href="">Removing Technician</a></li>
                                        <li><a href="">Assigning Technician to Tickets</a></li>
                                        <li><a href="">Tracking Technician</a></li>
                                        <li><a href="">Adding Skills to Technician</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div id="page-wrapper" className="gray-bg">
                        <div className="row border-bottom">
                            <nav className="navbar navbar-static-top" role="navigation" style={{ marginbottom: "0" }}>
                                <div className="navbar-header">
                                    <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                                    <form role="search" className="navbar-form-custom" action="search_results.html">
                                        <div className="form-group">
                                            <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
                                        </div>
                                    </form>
                                </div>
                                <ul className="nav navbar-top-links navbar-right">
                                    <li>
                                        <span className="m-r-sm text-muted welcome-message">Welcome to ServiceKPO Admin</span>
                                    </li>

                                    <li>
                                        <a href="login.html">
                                            <i className="fa fa-sign-out"></i> Log out
                                        </a>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                        <div className="row wrapper border-bottom white-bg page-heading">
                            <div className="col-lg-10">
                                <h2> Add Company</h2>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Dashboard 1</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a>Company</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <strong>Company add </strong>
                                    </li>
                                </ol>
                            </div>

                        </div>
                        <br />

                        <fieldset>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Company_ID :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.Company_ID} onChange={this.onChangeCompany_ID} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">CompanyName :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.CompanyName} onChange={this.onChangeCompanyName} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Address1 :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.Address1} onChange={this.onChangeAddress1} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Address2 :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.Address2} onChange={this.onChangeAddress2} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">contactNumber :</label>
                                    <div className="col-sm-10"><input type="tel" className="form-control" placeholder="" name = "number" value={this.state.contactNumber} onChange={this.onChangecontactNumber} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Email :</label>
                                    <div className="col-sm-10"><input type="email" className="form-control" placeholder="" value={this.state.Email} onChange={this.onChangeEmail} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Website :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="www." value={this.state.Website} onChange={this.onChangeWebsite} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">City :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.City} onChange={this.onChangeCity} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">State :</label>
                                    <div className="col-sm-10"> <select className="form-control m-b" name="account" value={this.state.State} onChange={this.onChangeState} >
                                        <option>---Select State---</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Telangana</option>
                                        <option>Karnataka</option>
                                        <option>TamilNadu</option>
                                    </select></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Country :</label>
                                    <div className="col-sm-10"> <select className="form-control m-b" name="account" value={this.state.Country} onChange={this.onChangeCountry} >
                                        <option>---Select Country---</option>
                                        <option>India</option>
                                        <option>Australia</option>
                                        <option>England</option>
                                        <option>SriLanka</option>
                                    </select></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">ZipCode :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.ZipCode} onChange={this.onChangeZipCode} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Category :</label>
                                    <div className="col-sm-10"> <select className="form-control m-b" name="account" value={this.state.Category} onChange={this.onChangeCategory} >    
                                        <option>---Select Category---</option>
                                        <option>IT / Engineering</option>
                                        <option>Marketing</option>
                                        <option>Real Estate</option>
                                        <option>Other</option>
                                    </select></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Status :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.Status} onChange={this.onChangeStatus} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">DateOfIncorporation :</label>
                                    <div className="col-sm-10"><input type="date" className="form-control" placeholder="" value={this.state.DateOfIncorporation} onChange={this.onChangeDateOfIncorporation} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">Description :</label>
                                    <div className="col-sm-10"><textarea type="text" rows="3" className="form-control" placeholder="" value={this.state.Description} onChange={this.onChangeDescription} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">GST :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.GST} onChange={this.onChangeGST} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">PAN :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.PAN} onChange={this.onChangePAN} /></div>
                                </div>
                                <div className="form-group col"><label className="col-sm-6 col-form-label">TAN :</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" placeholder="" value={this.state.TAN} onChange={this.onChangeTAN} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col"><label className="col-sm-6 col-form-label">User_ID :</label>
                                    <div className="col-sm-5"><input type="text" className="form-control" placeholder="" value={this.state.User_ID} onChange={this.onChangeUserID} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="btn btn float-right">
                                        <button className="btn btn-primary " onClick={this.onSubmit} type="button"><i className="fa fa-plus"></i>&nbsp;Add</button>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </fieldset>
                        <div className="footer">
                            <div>
                                <strong>Copyright</strong> ServiceKPO &copy; 2014-2019
                            </div>
                        </div>
                    </div>
                </div>

                {/* </body> */}

            </div>

        )
    }
}

export default Company_Add
