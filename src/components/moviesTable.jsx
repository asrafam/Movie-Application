import React, { Component } from 'react';
import Like from './common/like.jsx';
import Table from './table.jsx';
import {Link} from 'react-router-dom'


class MoviesTable extends Component {

    columns =[
        {path : 'title' , label : 'Title' , content : movie =>
                                                 (<Link to={movie._id}>{movie.title}</Link>)
        },
        {path : 'genre.name' , label : 'Genre'},
        {path : 'numberInStock' , label : 'Stock'},
        {path : 'dailyRentalRate' , label : 'Rate'},
        {
            key : 'like' , content : movie => (
                                  <Like 
                                            liked={movie.liked} 
                                            onClick={() => this.props.onLike(movie)} />
                                      )
        },
        {
            key : 'delete',  content: movie => (
                                    <button 
                                            onClick ={() => this.props.onDelete(movie)}
                                            className='btn btn-danger btn-sm'>Delete</button>
                                      )
        }
    ];

    
 render() { 
         
    const {movies  , onSort , sortColumn} = this.props;

        return <Table  movies={movies} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />
    
    }
}
  
 
export default MoviesTable;