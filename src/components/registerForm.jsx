import React  from 'react';
import Form from './form';
import Joi from "joi";

class RegisterForm extends Form {

    state ={
        data : { username : "",  password : "" , name :"" },
        errors:{}    
    };


    schema = Joi.object({
       
        username : Joi.string().required().label("Username"),
        password : Joi.string().required().min(5).label("Password"),
        name : Joi.string().required().label("Name")
             
    });

     

      doSubmit = () =>{
        //call the server
        console.log('registered')
    }
    
    render() { 

        return <div>
            <h1>Register</h1>
            <form  onSubmit={this.handleSubmit} >
                
                {this.renderInput('username' , 'Username')}
                {this.renderInput('password' , 'Password' , 'password')}
                {this.renderInput('name' , 'Name')}
                {this.renderButton('Register')}

               </form>
        </div>
    }
}
 
export default RegisterForm;
