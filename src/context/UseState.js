import React, { useRef, useState } from 'react';
import UserContext from "./UserContext";
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase-config'

export const UseState = (props) => {

  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const [isLoading, setIsLoading] = useState(false);
  const [peliculasDeLaCategoria, setPeliculasDeLaCategoria] = useState([]);
  const [detallePeli, setDetallePeli] = useState();

  //HACE LLAMADA A LA API PARA OBTENER PELICULAS
  const getPelisApi = async (idCategory) => {
    const options2 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
      }
    };
    const resp = await fetch(`https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${idCategory}&page=1`, options2)
    const data = await resp.json();
    const pelis = data.results;
    //console.log(pelis);
    const peliculas = pelis.map(peli => {
      return {
        id: peli.id,
        title: peli.title,
        poster: peli.backdrop_path,
        overview: peli.overview,
        release_date: peli.release_date,
        vote: peli.vote_average
      }
    })
    console.log(peliculas)
    setPeliculasDeLaCategoria(peliculas);
  }

  /*  return {
        overview: response.overview,
        title: response.original_title,
        date: response.release_date,
        vote: response.vote_average,
        poster: response.poster_path
      } */

 /*  const getDetallePeli = async (idPeli) => {
    const options2 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
      }
    };
    const resp = await fetch(`https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${idPeli}`, options2)
    const data = await resp.json();

    console.log(data.overview);
    return data.overview ;


  } */

  //LOGIN CON GOOGLE
  const signInWithGoogle = () => {

    signInWithPopup(auth, provider)
        .then((result) => {
            //console.log(result.user.auth.currentUser.displayName);
            console.log(result);
            console.log(result.user.auth.currentUser.uid);
            console.log(auth.currentUser.displayName)
            localStorage.setItem('isAuth', true);
            localStorage.setItem('idUserPost', auth.currentUser.uid);
            localStorage.setItem('currentUser', result.user.auth.currentUser.displayName);
            setIsAuth(true);
            window.location = '/';
            //return this.props.history.push('/');
           /*  navigate('/', {
                replace: true
            }); */
        });
}

  return (
    <UserContext.Provider
      value={{ getPelisApi, signInWithGoogle, isAuth, setIsAuth, peliculasDeLaCategoria, detallePeli }}>{props.children}
    </UserContext.Provider>
  );
};

