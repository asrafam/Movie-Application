import React  from 'react';
import TableBody from './tableBody.jsx';
import TableHeader from './tableHeader.jsx';

const Table = ({ movies , onSort , sortColumn , columns }) => {
    return <table className='table'>
                    
        <TableHeader 
           onSort={onSort}
           sortColumn={sortColumn} 
           columns={columns}
        />

        <TableBody
           movies={movies}
           columns={columns}
        />

    </table>
}
 
export default Table;

   