import React, { Component } from 'react'

 class TechnicianTable extends Component {
    render() {
        return (
            <div>
                
                <head>

<title>Service KPO | Technician</title>

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
                    <ul data-toggle="block" className="nav nav-second-level Collapse">
                        <li><a href="index.html">Dashboard 1</a></li>
                        <li><a href="dashboard_2.html">Dashboard 2</a></li>
                      
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Service Desk</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="graph_flot.html">Creating Technician</a></li>
                        <li><a href="graph_morris.html">Creating Asset</a></li>
                        <li><a href="graph_rickshaw.html">Creating Ticket</a></li>
                        <li><a href="graph_chartjs.html">Search for Technician</a></li>
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

                <li>
                    <a href="#"><i className="fa fa-flask"></i> <span className="nav-label">Asset Management</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="typography.html">Adding Asset</a></li>
                        <li><a href="icons.html">Assigning Asset to Technician</a></li>
                        <li><a href="draggable_panels.html">Assign Asset to Service Manager</a></li> <li><a href="resizeable_panels.html">Resizeable Panels</a></li>
                        <li><a href="buttons.html">ServiceKPO Asset Number</a></li>
                        <li><a href="video.html">OEM Asset Number Maintenance</a></li>
                        <li><a href="tabs_panels.html">Track Warranty</a></li>
                        <li><a href="tabs.html">Track AMC</a></li>
                        <li><a href="notifications.html">Service History</a></li>
                        <li><a href="helper_classes.html">Fault History</a></li>
                        <li><a href="badges_labels.html">Reports</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-table"></i> <span className="nav-label">Asset Scanner</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="table_basic.html">Bar Code Scanner</a></li>
                        <li><a href="table_data_tables.html">QR Code Scanner</a></li>
                        <li><a href="table_foo_table.html">Manual Asset Entry Tag</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="fa fa-shopping-cart"></i> <span className="nav-label">Location Tracker</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="ecommerce_products_grid.html">Technician Location</a></li>
                        <li><a href="ecommerce_product_list.html">Technician Location</a></li>
                        <li><a href="ecommerce_product.html">Asset Location</a></li>
                        <li><a href="ecommerce_product_detail.html">Navigation to Technician location</a></li>
                        <li><a href="ecommerce-cart.html">Location based advertising</a></li>
                        <li><a href="ecommerce-orders.html">location ba Technician planning</a></li>
                        <li><a href="ecommerce_payments.html">Auto routing</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="fa fa-picture-o"></i> <span className="nav-label">Products & Parts InfoBase</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="basic_gallery.html">Product categories</a></li>
                        <li><a href="slick_carousel.html">Products</a></li>
                        <li><a href="carousel.html">Product descriptions</a></li>
                        <li><a href="carousel.html">Images</a></li> &nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li><a href="carousel.html">Videos</a></li>
                        <li><a href="carousel.html">Sales Information</a></li>
                        <li><a href="carousel.html">Parts Information</a></li>
                        <li><a href="carousel.html">Parts drawings</a></li>
                        <li><a href="carousel.html">Parts cost</a></li>
                        <li><a href="carousel.html">Quotations</a></li>
                        <li><a href="carousel.html">Availability</a></li>
                        <li><a href="carousel.html">Lead time</a></li>
                        <li><a href="carousel.html">Access to CRM/ERP</a></li>
                        <li><a href="carousel.html">Upsell / Crosssell</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="fa fa-sitemap"></i> <span className="nav-label">Warranty & AMC</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="basic_gallery.html">Warranty information</a></li>
                        <li><a href="slick_carousel.html">Invoice details / image</a></li>
                        <li><a href="carousel.html">Dtae of Purchase, Date of installation information</a></li>
                        <li><a href="carousel.html">AMC status</a></li>
                        <li><a href="carousel.html">One touch AMC renewal</a></li>
                        <li><a href="carousel.html">Extended Warranty</a></li>
                        <li><a href="carousel.html">Warranty contract</a></li>
                        <li><a href="carousel.html">Exclusions</a></li>
                        <li><a href="carousel.html">Warranty rapair calculator</a></li>
                        <li><a href="carousel.html">Quotations</a></li>
                        <li><a href="carousel.html">Payment Gateway</a></li>
                        
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="fa fa-shopping-cart"></i> <span className="nav-label">Audio,Video Tutorials</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="ecommerce_products_grid.html">Adding Asset</a></li>
                        <li><a href="ecommerce_product_list.html">Assigning Asset to Technician</a></li>
                        <li><a href="ecommerce_product.html">Assign Asset to Service Manager</a></li>
                        <li><a href="ecommerce_product_detail.html">ServiceKPO Asset Number</a></li>
                        <li><a href="ecommerce-cart.html">OEM Asset Number Maintenance</a></li>
                        <li><a href="ecommerce-orders.html">Track Warranty</a></li>
                        <li><a href="ecommerce_payments.html">Track AMC</a></li>
                        <li><a href="ecommerce_payments.html">Reports</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="fa fa-shopping-cart"></i> <span className="nav-label">Knowledge Base</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li><a href="ecommerce_products_grid.html">Master database of tickets</a></li>
                        <li><a href="ecommerce_product_list.html">Faults</a></li>
                        <li><a href="ecommerce_product.html">Service articles</a></li>
                        <li><a href="ecommerce_product_detail.html">Fix tips</a></li>
                        <li><a href="ecommerce-cart.html">Collaboration</a></li>
                        
                    </ul>
                </li>
                <li className="special_link">
                    <a href="package.html"><i className="fa fa-database"></i> <span className="nav-label">Package</span></a>
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
                <h2>Technician List</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Dashboard 1</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a>Dashboard 2</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <strong>Technician</strong>
                    </li>
                </ol>
            </div>

        </div>
        <br />

        <div className="col-lg-12">
                <div className="ibox ">
                    <div className="ibox-title">
                        <h5>Technician Table</h5>
                        <div className="ibox-tools">
                            <a className="collapse-link">
                                <i className="fa fa-chevron-up"></i>
                            </a>
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-wrench"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li><a href="#" className="dropdown-item">Config option 1</a>
                                </li>
                                <li><a href="#" className="dropdown-item">Config option 2</a>
                                </li>
                            </ul>
                            <a className="close-link">
                                <i className="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div className="ibox-content">

                        <table className="table">
                            <thead>
                            <tr>
                                <th>T.Id</th>
                                <th>Technician Name</th>
                                <th>Contact Number </th>
                                <th>Company</th>
                                <th class="text-right" data-sort-ignore="true">Action</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Technician 1</td>
                                <td>8858745210</td>
                                <td>Company 1</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                </div>
                                 </td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Technician 2</td>
                                <td>9875842305</td>
                                <td>Company 2</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                </div>
                                </td>
                        
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Technician 3</td>
                                <td>6687452102</td>
                                <td>Company 3</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Technician 4</td>
                                <td>6582252102</td>
                                <td>Company 2</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Technician 5</td>
                                <td>9992547785</td>
                                <td>Company 3</td>
                                <td class="text-right">
                                 <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                 <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                 </div>
                                </td>
                            
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Technician 6</td>
                                <td>8548875200</td>
                                <td>Company 1</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Technician 7</td>
                                <td>6587452155</td>
                                <td>Company 4</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                              <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                    </div>
                                 </td>
                                
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Technician 8</td>
                                <td>9987452556</td>
                                <td>Company 2</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                 </div>
                                    </td>
                        
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Technician 9</td>
                                <td>8954889962</td>
                                <td>Company 3</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                 <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                              <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                         </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Technician 10</td>
                                <td>9587452665</td>
                                <td>Company 2</td>
                                <td class="text-right">
                                <div class="btn-group">  
                                <a href ="./CompanyEdit" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Edit </a>
                                <a href="#" class="btn btn-white btn-sm"><i class="fa fa-trash"></i> Delete </a>
                                 </div>
                                 </td>
                            
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
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

export default TechnicianTable
