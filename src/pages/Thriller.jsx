import React, { useState, useEffect, useContext } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import { useLocation } from "react-router-dom";
import UserContext from "../../src/context/UserContext";
import { MovieCard } from '../components/MovieCard';

export const Thriller = () => {

  const { getPelisApi, peliculasDeLaCategoria, isLoading } = useContext(UserContext);
  //le meto la categoria de la categoria
  const idCategory = "53";
  useEffect(() => {

    getPelisApi(idCategory);
  }, []);

  
  return (
    <>
        <div className="p-5 text-center bg-image " style={{
        backgroundImage: `url(https://pymstatic.com/21157/conversions/peliculas-de-suspense-wide.jpg)`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minheight: '2000px'
      }}>
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">T H R I L L E R</h1>
              <h4 className="mb-3">Thriller Movies</h4>
              <br />
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <div className='d-flex flex-wrap justify-content-center'>
        {

          isLoading == true ? <div className="d-flex justify-content-center">
            <div role="status">
              <span className="spinner-grow"></span><span className="spinner-grow"></span><span className="spinner-grow"></span>
            </div>
          </div> : peliculasDeLaCategoria.map(dato => {
            return <MovieCard key={dato.id} {...dato} />
          })
        }
      </div>
    </>
  )
}
