import React from 'react';

const SearchBox = ({value , onChange}) => {
    return (  
        <input 
        placeholder='Search...'
        onChange={e => onChange(e.currentTarget.value)}
        type='text'
        name='query'
        value={value}
        className='form-control my-3'
        
        />
    );
}
 
export default SearchBox;