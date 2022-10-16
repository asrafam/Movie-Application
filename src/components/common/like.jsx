import React from 'react';

//stateless functional component

const Like = (props) => {
   
    const {onClick} = props;
    let classes = "fa fa-heart"
        if (!props.liked) classes += "-o"
    return (<i className={classes} onClick={onClick} style={{ cursor : 'pointer'}}></i>);
}
 
export default Like;
