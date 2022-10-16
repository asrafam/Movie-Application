import React from 'react';
import Form from './form';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getMovie , saveMovie } from '../services/fakeMovieService';
import {  getGenres } from '../services/fakeGenreService';
import Joi from "joi";



const withRouter = WrappedComponent => props => {

    const params = useParams();
    const navigate = useNavigate();

    return (
        <WrappedComponent
            {...props}
            id = {params.id}
            navigate={navigate}
        />
    );
}

class NewMovieForm extends Form {

    state ={
        data : { 
            _id: this.props.id,
            title : "",  
            genreId : "" ,
            numberInStock :""  , 
            dailyRentalRate:""
        },

        genres: [],
        errors:{}    
    };



    schema = Joi.object({
       
        _id : Joi.string(),
        title : Joi.string().required().label("Title"),
        genreId : Joi.string().required().label("Genre"),
        dailyRentalRate : Joi.number().required().label("Daily Rental Rate"),
        numberInStock : Joi.number().required().label("Number in Stock")
             
    });

    componentDidMount() {

        const genres = getGenres();
        this.setState({ genres });
       
        const movieId = this.props.id
        if (movieId === "new") return movieId;

        const movie = getMovie(movieId);
        if (!movie) return this.props.navigate("/customers");

        this.setState({ data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie){
       return {
        _id : movie._id,
        title : movie.title,  
        genreId : movie.genre._id ,
        numberInStock : movie.numberInStock  , 
        dailyRentalRate: movie.dailyRentalRate

       };
    }
     
    
    doSubmit = () =>{
        saveMovie(this.state.data);
        this.props.navigate("/movies");
        
    }
    
    render() { 

        return <div>
            <h1>Movie Form</h1>
            <form  onSubmit={this.handleSubmit} >
                
                {this.renderInput('title' , 'Title')}
                {this.renderSelect('genreId' , 'Genre' , this.state.genres)}
                {this.renderInput('numberInStock' , 'Number in Stock')}
                {this.renderInput('dailyRentalRate' , 'Rate')}
                {this.renderButton('save')}
                
            </form>
        </div>
    }
}
 


export default withRouter(NewMovieForm);
