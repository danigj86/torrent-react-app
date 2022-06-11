import React, { useState, useEffect } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';

export const Action = () => {

  const [actionPelis, setActionPelis] = useState([]);


  useEffect(() => {
    getPelis()
  }, [])





  const getPelis = async () => {

    const options2 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
      }
    };

    const resp = await fetch('https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=28&page=1', options2)
    const data = await resp.json();
    const pelis = data.results;
    console.log(pelis);
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
    setActionPelis(peliculas);

  }

  return (
    <>
      <div>Action</div>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          actionPelis.map(dato => {

            return <div key={dato.id} className="mx-auto justify-content-center flex-wrap card col-xs-12 col-sm-6 col-md-3 d-flex" >
              <img className="card-img-top" src={dato.poster} alt="Img" />
              <div className="card-body">
                <h5 className="card-title">{dato.title}</h5>
                <p className="card-text">{dato.vote}/10</p>
                <a href="#" className="btn btn-dark">More info</a>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}









