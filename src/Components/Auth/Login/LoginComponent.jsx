import React,{ Component, Fragment } from 'react';
import "./Login.style.css";
import {Link} from "react-router-dom";



class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
             password:"",
             email:"",
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
        }

   handleSubmit(e){
       e.preventDefault(e)
       console.log(this.state)
       this.setState({password:"",email:""})
   }


render(){
    return(
    <Fragment>
        <div className="login-box">
                        
                        <h1>Login</h1>
                        
                    
                           <form onSubmit={this.handleSubmit}>
                                

                                <p>Password</p>
                                <input type="password" 
                                name="password" 
                                placeholder=" Enter password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                
                                />

                                <p>Email</p>
                                <input type="text"
                                 name="email" 
                                 placeholder=" Enter email" 
                                 value={this.state.email}
                                 onChange={this.handleChange}
                                />
                                <input type="submit" name="submit" placeholder="Login"/>
                                <a href="#">Forgot Password</a>
                                <p>Dont't have an account?</p>
                                <Link to="/signup">Create account</Link>
                                

                     </form>
            
                   </div>
    
        </Fragment>
    );
}
}



export default LoginComponent;