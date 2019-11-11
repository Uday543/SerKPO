import React, { Component } from 'react';
import Logo from "./Logo.jpg";
class ServiceKPO_Login extends Component {
    constructor(props) {
        super(props)
    
      this.emailEl = React.createRef();
      this.passwordEl = React.createRef();
    }
    submitHandler = (e) => {
        e.preventDefault();
  const email = this.emailEl.current.value;
  const password = this.passwordEl.current.value;   

  if(email.trim().length === 0 | password.trim().length === 0) {
      return;
  }

  const requestBody = {
  query: `
  mutation {
      createUser(userInput: {email:"${email}",password:"${password}"}) {
          _id
          email
          password
      }
  }`
  };

  fetch('http://localhost:2525/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
          'Content-Type':'application/json'
      }
  }).then(res => {
      if(res.status!==200 && res.status !==201) {
          throw new Error('Failed!');
      }
      return res.json();
  }).then(resData => {
      console.log(resData);
  })
  .catch(err => {
      console.log(err);
  })
    };
    
    render() {
        return (
            <div>
               
<title>ServiceKPO | Login</title>


<body className="gray-bg">

<div className="middle-box text-center loginscreen animated fadeInDown">
    <div>
    {/* <div>
        <img alt = "" className="logo-name" src = {Logo} style = {{opacity: "10px", borderRadius: "2em"}} />
                        </div>   */}
        <div className="logo-name">
            <h2>ServiceKPO</h2>

            {/* <h1 className="logo-name">IN+</h1> */}

        </div>
        <h3>Welcome to ServiceKPO</h3>
       
        <p>Login in. To see it in action.</p>
        <form className="m-t" role="form" action="index.html">
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Username" required="" ref = {this.emailEl} />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="" ref = {this.passwordEl} />
            </div>
            <button type="submit" onClick = {this.submitHandler} className="btn btn-primary block full-width m-b">Login</button>

            <a href="#"><small>Forgot password?</small></a>
            <p className="text-muted text-center"><small>Do not have an account?</small></p>
            <a className="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
        </form>
        <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
    </div>
</div>

</body>
                
            </div>
        )
    }
}

export default ServiceKPO_Login
