import React,{Component,Fragment} from "react";
//import "./components/FontAwesomeIcons/icons";
import HeaderComponent from "./Components/Header/HeaderComponent";
import HomeComponent from "./Components/Home/HomeComponent"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoginComponent from "./Components/Auth/Login/LoginComponent"
import SignupComponent from "./Components/Auth/SignUp/SignupComponent";




class App extends Component {
    constructor(props){
        super(props);
        this.state={
            
        };
    }
 
    


    render(){
        return(
            <Fragment>
               <Router>
               <header>
                       <HeaderComponent/>
                    </header>
                    
               <main className="container">
                     <Switch>
                        <Route path="/" exact component={HomeComponent}/>
                        <Route path="/login" exact component={LoginComponent}/>
                        <Route path="/signup" exact component={SignupComponent}/>
                      </Switch>
                      </main>
                    </Router>
                    </Fragment>
                  
        );
    }
}

export default App;