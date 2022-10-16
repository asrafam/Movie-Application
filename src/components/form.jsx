import React, { Component } from 'react';
import Input from './input';
import Select from './select';
//import Joi from "joi";

class Form extends Component {
    state = {
        data :{},
        errors:{}
      } 


      
    validate = () =>{

    const options = { abortEarly: false };
    const { error }= this.schema.validate(this.state.data  , options); 
        
    if(!error)
    return null ;

    const errors ={};
        for( let item of error.details) errors[item.path[0]] = item.message;
        //console.log(errors)
    return errors;
}

handleChange = ({currentTarget : input}) =>{
        
    const errors = {...this.state.errors};
    const errorMessege = this.validateProperty(input);

    if (errorMessege) errors[input.name] = errorMessege;
    else
    delete errors[input.name];
    
    const data = { ...this.state.data};
    data[input.name] = input.value;
    this.setState({data});
    return errors;
}

    validateProperty = ({name , value}) =>{
        
    const obj = {[name] : value};
    const schema = this.schema.extract(name);
    const {error} = schema.validate(obj);
    
    return error ? error.details[0].message : null;
    
}

handleSubmit = e =>{
        
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors :errors || {} });
    this.doSubmit();
}

renderInput(name , label , type)
{
    const {data , errors} = this.state;
    return <Input 
                name= {name} 
                onChange={this.handleChange}
                value={data[name]}
                label={label} 
                type={type}
                error={errors[name]}
                />

}

renderSelect(name , label  , options )
{
    const {data , errors} = this.state;
    return  <Select 
                name= {name} 
                onChange={this.handleChange}
                value={data[name]}
                label={label} 
                options={options}
                error={errors[name]}
            />

}




renderButton(label)
{
    return <button disabled={this.validate()} className="btn btn-primary">{label}</button>
            
}


}
 
export default Form;