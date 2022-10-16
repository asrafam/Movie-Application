import React from 'react';

const ListGroup = (props) => {
    
    const { items , textProperty , valueProperty , selectedItem , onItemSelect} = props;

    return <React.Fragment>

    <ul className='list-group'>
     {items.map(item =>
               <li 
                   key={item[valueProperty]}
                   className={
                      item === selectedItem ? 'list-group-item active bg-dark' : 'list-group-item' 
                    }
                   style={{ cursor : 'pointer'}}
                   onClick={() => onItemSelect(item)}
                >
                   {item[textProperty]}

                </li>
                )
      }

    </ul>
    </React.Fragment>
}

ListGroup.defaultProps = {
    textProperty : "name" ,
    valueProperty : '_id'
};
 
export default ListGroup;