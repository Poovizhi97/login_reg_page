

import React,{ Component, Fragment } from 'react';

import "./Signup.style.css";
import {Link} from 'react-router-dom';


//import {Link} from "react-router-dom";

class SignupComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            email:"",
            confirmpassword:"",

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        this.setState({username:"",password:"",email:"",confirmpassword:""})
    }



render(){
    return(
    <Fragment>
        <div className="signup-box">
                        
                        <h1>Sign Up</h1>
                        
                    
                           <form onSubmit={this.handleSubmit}>
                                <p>Username</p>
                                <input type="text" 
                                id="username"
                                name="username" 
                                placeholder=" Enter username"
                                required
                                value={this.state.username}
                                onChange={this.handleChange}
                                />

                                <p>Email</p>
                                <input type="text"
                                 name="email" 
                                 placeholder=" Enter email"
                                 required
                                 value={this.state.email}
                                 onChange={this.handleChange}
                                 
                                 />

                                <p>Password</p>
                                <input type="password"
                                id="password"
                                 name="password" 
                                 placeholder=" Enter password"
                                 required
                                 value={this.state.password}
                                 onChange={this.handleChange}
                                 
                                 />

                                <p>Confirm Password</p>
                                <input type="password" 
                                name="confirmpassword" 
                                placeholder=" Enter confirmpassword"
                                required
                                value={this.state.confirmpassword}
                                onChange={this.handleChange}
                            
                                />
                                <input type="submit" name="submit" placeholder="Login"/>
                                  
                                  
                                <Link to="/login">Already have an account?</Link>
                                

                     </form>
            
                   </div>
    
        </Fragment>
    )
}
}



export default SignupComponent;