import React, { Component } from 'react';
import Movies from './components/movies.jsx';
import MovieForm from './components/movieForm.jsx';
import NewMovieForm from './components/newMovieForm.jsx';
import { Routes, Route  ,  Navigate} from "react-router-dom";
import NavBar from './components/navbar';
import Customers from './components/cutomers';
import Rental from './components/rental';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';

class App extends Component {

    render() { 

       return <React.Fragment>
                             <NavBar/>
           <main className='container'>
                                        
              <Routes>
              <Route path='/movies' element={<Movies/>} />
              <Route path='/login' element={<LoginForm/>} />
              <Route path='/register' element={<RegisterForm/>} />
              <Route path='/movies/:id' element={<MovieForm/>}/>
              <Route path='/movies/new' element={<NewMovieForm/>}/>
              <Route path='/cutomers' element={<Customers/>} />
              <Route path='/rental' element={<Rental/>} />
              <Route path='/notFound' element={<NotFound/>} />
              <Route path="*" element={ <Navigate to="/notFound" /> }/> 
              </Routes>
                      
            </main>
              </React.Fragment> 
                               
              
  }
}


 
export default App;
