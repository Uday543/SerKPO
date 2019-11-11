import React, { Component } from 'react'

 class Customer_Add extends Component {
    render() {
        return (
            <div>

<head>

<title>Service KPO | Customer</title>

</head>

<body>

<div id="wrapper">

    <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
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
                        <li><a href="graph_flot.html">Creating Customer</a></li>
                        <li><a href="graph_morris.html">Creating Asset</a></li>
                        <li><a href="graph_rickshaw.html">Creating Ticket</a></li>
                        <li><a href="graph_chartjs.html">Search for Customer</a></li>
                        <li><a href="graph_chartist.html">Search for Ticket</a></li>
                        <li><a href="c3.html">Search for Asset</a></li>
                        <li><a href="graph_peity.html">Assign Ticket</a></li>
                        <li><a href="graph_sparkline.html">Modify Ticket</a></li>
                        <li><a href="graph_sparkline.html">Reassign Ticket</a></li>
                        <li><a href="graph_sparkline.html">Visits</a></li>
                        <li><a href="graph_sparkline.html">Appointments</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-edit"></i> <span className="nav-label">Ticket Management</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="form_basic.html">Manage Ticket</a></li>
                        <li><a href="form_advanced.html">Assign Ticket</a></li>
                        <li><a href="form_wizard.html">Ticket Dashboard</a></li>
                        <li><a href="form_file_upload.html">Update Ticket Status</a></li>
                        <li><a href="form_editors.html">Ticket Reports</a></li>
                        <li><a href="form_autocomplete.html">Adding Images to tickets</a></li>
                        <li><a href="form_markdown.html">Adding audio to tickets</a></li>
                        <li><a href="form_markdown.html">Adding video to tickets</a></li>
                        <li><a href="form_markdown.html">Service / Repair info capture</a></li>
                        <li><a href="form_markdown.html">Graphs</a></li>
                        <li><a href="form_markdown.html">Fault information</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-files-o"></i> <span className="nav-label">Technician Management</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="search_results.html">Adding Technician</a></li>
                        <li><a href="lockscreen.html">Removing Technician</a></li>
                        <li><a href="invoice.html">Assigning Technician to Tickets</a></li>
                        <li><a href="login.html">Tracking Technician</a></li>
                        <li><a href="login_two_columns.html">Adding Skills to Technician</a></li>
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
                <h2> Add Customer</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Dashboard 1</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a>Customer</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <strong>Customer add </strong>
                    </li>
                </ol>
            </div>

        </div>
        <br />

        <fieldset>
            <div className="form-group row"><label className="col-sm-2 col-form-label">First Name :</label>
                <div className="col-sm-10"><input type="text" className="form-control" placeholder="" /></div>
            </div>
            <div className="form-group row"><label className="col-sm-2 col-form-label">Last Name :</label>
                <div className="col-sm-10"><input type="text" className="form-control" placeholder="" /></div>
            </div>

            <div className="form-group row"><label className="col-sm-2 col-form-label">Contact Numbar :</label>
                <div className="col-sm-10"><input type="text" className="form-control" placeholder="" /></div>
            </div>
            <div className="form-group row"><label className="col-sm-2 col-form-label">Customer Place :</label>
                <div className="col-sm-10"><input type="text" className="form-control" placeholder="" /></div>
            </div>
            <div className="form-group row"><label className="col-sm-2 col-form-label">Customer Location :</label>
                <div className="col-sm-10"><input type="text" className="form-control" placeholder="www." /></div>
            </div>
            {/* <div className="form-group row"><label className="col-sm-2 col-form-label">Meta Tag Keywords:</label>
                <div className="col-sm-10"><input type="text" className="form-control" placeholder="Lorem, Ipsum, has, been" /></div>
            </div> */}
        </fieldset>

        <div className="btn btn float-right">
            <button className="btn btn-primary " type="button"><i className="fa fa-plus"></i>&nbsp;Add</button>
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

export default Customer_Add
