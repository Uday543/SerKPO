import React, { Component } from 'react';

class Customer_Search extends Component {
    render() {
        return (
            <div>

                <head>

                    <title>Service KPO | Customer</title>

                </head>

                <body>

                    <div id="wrapper">

                        <nav className="navbar-default navbar-static-side" role="navigation">
                            <div className="sidebar-expand">
                                <ul className="nav metismenu" id="side-menu">
                                    <li className="nav-header">
                                        <div className="dropdown profile-element">
                                            <img alt="image" className="rounded-circle" src="img/profile_small.jpg" />
                                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                                <span className="block m-t-xs font-bold">David Williams</span>
                                                <span className="text-muted text-xs block">Art Director <b className="caret"></b></span>
                                            </a>
                                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                                <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                                                <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                                                <li><a className="dropdown-item" href="mailbox.html">Mailbox</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="login.html">Logout</a></li>
                                            </ul>
                                        </div>
                                        <div className="logo-element">
                                            IN+
</div>
                                    </li>
                                    <li>
                                        <a href=""><i className="fa fa-th-large"></i> <span className="nav-label">Dashboards</span> <span className="fa arrow"></span></a>
                                        <ul data-toggle="block" className="nav nav-second-level expand">
                                            <li><a href="">Dashboard 1</a></li>

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
                                        <ul className="nav nav-second-level expand">
                                            <li><a href="/Customer_Search">List / Search Customer</a></li>
                                            <li><a href="/Customer_Add">Add Customer</a></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-th-list"></i> <span className="nav-label"> Products</span><span className="fa arrow"></span></a>
                                        <ul className="nav nav-second-level expand">
                                            <li><a href="graph_flot.html">Product category</a></li>
                                            <li><a href="graph_morris.html">Product List</a></li>

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
                                        <ul className="nav nav-second-level collapse">
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
                                    <h2>List / Search Customer</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Dashboard 1</a>
                                        </li>

                                        <li className="breadcrumb-item active">
                                            <strong>Customer list</strong>
                                        </li>
                                    </ol>
                                </div>

                            </div>

                            <hr />


                            <div class="row m-b-sm m-t-sm">
                                <div class="col-md-1">
                                    <button type="button" id="loading-example-btn" class="btn btn-white btn-sm" ><i class="fa fa-refresh"></i> Refresh</button>
                                </div>
                                <div class="col-md-11">
                                    <div class="input-group"><input type="text" placeholder="Search..." class="form-control-sm form-control" /> <span class="input-group-btn">
                                        <button type="button" class="btn btn-sm btn-primary"> Go!</button> </span></div>
                                </div>
                            </div>



                            <div class="row">

                                <div class="col-lg-12">

                                    <div class="ibox">
                                        <div class="ibox-content">

                                            <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                                                <thead>
                                                    <tr>
                                                        <th data-toggle="true">SNo</th>
                                                        <th data-toggle="true">Customer Name</th>
                                                        <th data-hide="phone">Contact Number</th>
                                                        <th data-hide="phone">Customer Place</th>
                                                        <th data-hide="phone">Customer Location</th>
                                                        <th class="text-right" data-sort-ignore="true">Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            01
                                                        </td>
                                                        <td>
                                                            Customer 1
                                                        </td>
                                                        <td>
                                                            9965874521
                                                        </td>

                                                        <td>
                                                            Hyderabad
                                                        </td>
                                                        <td>
                                                            Ameerpet
                                                        </td>
                                                        <td class="text-right">
                                                            <div class="btn-group">
                                                                <a href="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-eye"></i> </a>
                                                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-edit"></i> </a>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            O2
                                                        </td>
                                                        <td>
                                                            Customer 2
                                                        </td>
                                                        <td>
                                                            87559820O2
                                                        </td>

                                                        <td>
                                                            Hyderabad
                                                        </td>
                                                        <td>
                                                            Begumpet
                                                        </td>
                                                        <td class="text-right">
                                                            <div class="btn-group">
                                                                <a href="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-eye"></i></a>
                                                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-edit"></i> </a>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            O3
                                                        </td>
                                                        <td>
                                                            Customer 3
                                                        </td>
                                                        <td>
                                                            8855223512
                                                        </td>

                                                        <td>
                                                            Banglore
                                                        </td>
                                                        <td>
                                                            ITC park
                                                        </td>
                                                        <td class="text-right">
                                                            <div class="btn-group">
                                                                <a href="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-eye"></i></a>
                                                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-edit"></i></a>
                                                            </div>
                                                        </td>

                                                    </tr>


                                                </tbody>


                                            </table>


                                        </div>
                                     

                                    </div>
                                    <div class="btn-group">
                                <button type="button" class="btn btn-white"><i class="fa fa-chevron-left"></i></button>
                                <button class="btn btn-primary active">1</button>
                                <button class="btn btn-white">2</button>
                                <button class="btn btn-white">3</button>
                                <button class="btn btn-white">4</button>
                                <button type="button" class="btn btn-white"><i class="fa fa-chevron-right"></i> </button>
                            </div>

                                </div>
                                


                            </div>
                            <div className="btn btn float-right">
                                <button className="btn btn-primary " type="button"><i className="fa fa-plus"></i>&nbsp;Add Customer</button>
                            </div>




                            {/* <div className="wrapper wrapper-content  animated fadeInRight article">
            <div className="row justify-content-md-center">
                <div className="col-lg-10">
                    <div className="ibox">
                        <div className="ibox-content">
                         <div className="text-center article-title">
                                <span className="text-muted"><i className="fa fa-clock-o"></i> 16th Sep 2019</span>
                                <h1>
                                    Welcome to Service KPO
                                </h1>
                            </div>

                            <hr />

                        </div>
                    </div>
                </div>
            </div>
        </div> */}


                            <div className="footer">

                                <div>
                                    <strong>Copyright</strong> ServiceKPO &copy; 2014-2019
                                </div>


                            </div>

                        </div>

                    </div>



                </body>

            </div>
        )
    }
}

export default Customer_Search
