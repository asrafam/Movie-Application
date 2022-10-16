import React, { Component } from 'react';
//import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
//import { faHeart } from  "@fortawesome/free-solid-svg-icons"



class Counter  extends Component {

//removing local states
//   state = {
//    value : this.props.value 
    
    //imageUrl : "https://picsum.photos/200" <img  src={this.state.imageUrl} alt="" />
// };

componentWillUnmount(){

  console.log('Component - Unmount');
}



render() { 
   
  console.log("App-rendered");

 
  
    return (
    //<div className="container">

      <div className="row">

      <div className="col-1">
      <span   className={ this.getBadgeClasses() }>{ this.formatValue()}</span>
      </div>  

      <div className ="col">  
      <button 
      onClick={() => this.props.OnIncrement(this.props.counter)}
      className='btn btn-secondary btn-sm  m-2'>+</button>
      
      <button 
      onClick={() => this.props.OnDecrement(this.props.counter)} 
      className='btn btn-secondary btn-sm m-2' 
      disabled = {this.props.counter.value === 0?  'disabled' : ""}
      >-</button>
      
      

      <button  
      className='btn btn-danger btn-sm' 
      onClick={() => this.props.OnDelete(this.props.counter.id) }>Delete</button>
      </div>

      
      

    </div>
    
    );
 }

  
getBadgeClasses() {
   let classes = "badge m-2 badge-";
   classes += this.props.counter.value === 0 ? "warning" : "primary";
   return classes;
}

formatValue(){
const { value } = this.props.counter; 
return value === 0 ? "zero"  : value;
}




}
 
export default Counter ;