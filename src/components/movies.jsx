import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js'
import { getGenres } from '../services/fakeGenreService.js'
import { paginate } from '../utlis/paginate.js';
import Pagination from './common/pagination.jsx';
import ListGroup from './common/listGroup.jsx';
import MoviesTable from './moviesTable.jsx';
import {Link} from 'react-router-dom'
import SearchBox from './searchBox.jsx';
import _ from 'lodash';



class Movies extends Component {
    state = {  
          movies : [],
          genres : [],
          currentPage :1,
          pageSize : 5,
          searchQuery : "",
          selectedGenre : null,
          sortColumn : { path : 'title' , order : 'asc' } 
    };

//if it takes time to get movies it does not declare undefine 
componentDidMount(){
    
    const genres = [{_id : '' , name : 'All Genres'} , ...getGenres()];
    this.setState({movies : getMovies(), genres });

}

//to delete a movie
handleDelete = movie => {
    
    const movies = this.state.movies.filter ( m => m._id !== movie._id );
    this.setState({ movies });
};

//to like a movie
handleClick = movie =>{

    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    
}

//if page get changed
handlePageChange = page =>{

    this.setState({ currentPage : page})
}


//on selecting genre
handleGenreSelect = genre =>{
  
    this.setState({ selectedGenre : genre  , searchQuery : "" , currentPage : 1}) 
}


handleSearch = query =>{

    this.setState({ searchQuery : query ,selectedGenre : null  , currentPage : 1}) 
}

handleSort = sortColumn => {

    this.setState({sortColumn });
}

getPagedData =() =>{

    const{ pageSize , 
           currentPage ,
           movies : allMovies ,
           selectedGenre , 
           searchQuery,
           sortColumn } = this.state;
    

    //filter movies with selected genre
    let filtered = allMovies;
    if(searchQuery)
      filtered = allMovies.filter(m => 
                            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())    
                             );

    else if (selectedGenre && selectedGenre._id)
    filtered= allMovies.filter(m => m.genre._id === selectedGenre._id)

    const sorted = _.orderBy( filtered , [sortColumn.path] , [sortColumn.order])

    //to show movie acc to page size
    const movies = paginate(sorted  , currentPage , pageSize )
    
    return { totalCount : filtered.length , movies} 

};



render() { 

    
    
    //object destruction
    const{ pageSize , currentPage , genres  , sortColumn , searchQuery } = this.state;
    
    //check total movie count
    const { length : count } = this.state.movies;
  
    if (count === 0) return <p>there is no movie in the database</p>;

    const {movies , totalCount } = this.getPagedData();
    
    return  <React.Fragment>
        
       
        <div className="row">

            <div className="col-2">
                <ListGroup  items = {genres} 
                            selectedItem = {this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                />
            </div>
                
            <div className="col-9">
                
                <Link to='./new' 
                      className="btn btn-primary bg-dark"
                      style={{ marginBottom : 20}}>
                      New Movie
                </Link>

                <SearchBox  value={searchQuery} onChange={this.handleSearch}/>
                
                <p> There are {totalCount} Movies in this genre</p>
                
                <MoviesTable
                    movies={movies}
                    onLike={this.handleClick} 
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                    sortColumn={sortColumn}
                />

                <Pagination 
                    itemCount ={totalCount}  
                    pageSize ={pageSize} 
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange} 
                />
                
            </div>

        </div>
        
   </React.Fragment>
    
    }
}
 
export default (Movies);