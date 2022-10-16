import _ from 'lodash';
//import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


const Pagination = (props) => {

    const {itemCount , pageSize , onPageChange , currentPage} = props;
    //total page count
    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1,pageCount + 1);

       return  <nav >
        <ul className="pagination justify-content-center">
            {pages.map(page => (<li key={page+1} className={page === currentPage ? "page-item active" :"page-item"}><button className="page-link" onClick={() => onPageChange(page)} >{page}</button></li>))}
        </ul>
        
               </nav>
}

//to check bugs related to type checking

Pagination.propTypes = {
    itemCount : PropTypes.number.isRequired ,
    pageSize : PropTypes.number.isRequired ,
    onPageChange: PropTypes.func.isRequired , 
    currentPage: PropTypes.number.isRequired ,
}
 
export default Pagination;