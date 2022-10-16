import React  from 'react';
import Form from './form';
import Joi from "joi";

class LoginForm extends Form {

    state ={
        data : { username : "",  password : ""  },
        errors:{}    
    };


    schema = Joi.object({
       
        username : Joi.string().required().label("Username"),
        password : Joi.string().required().min(5).label("Password")
             
    });

    // validate = () =>{
        // const errors = {};
        // const {data} = this.state;
        // if(data.username.trim() === '')
        //  errors.username  = "Username is required";

        // if(data.password.trim() === '')
        // errors.password  = "Password is required"

        // return Object.keys(errors).length === 0 ? null : errors}

    doSubmit = () =>{
        //call the server
        console.log('submitted')
    }

    
    render() { 

        return <div>
            <h1>Login</h1>
            <form  onSubmit={this.handleSubmit} >
                
                {this.renderInput('username' , 'Username')}
                {this.renderInput('password' , 'Password' , 'password')}
                {this.renderButton('Login')}

            </form>
        </div>
    }
}
 
export default LoginForm;
