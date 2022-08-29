import React, { useState, useEffect, useContext } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import { useLocation } from "react-router-dom";
import UserContext from "../../src/context/UserContext";
import { MovieCard } from '../components/MovieCard';
import loader from '../styles/loader.css';

export const Adventure = () => {
  //llamo a la funcion "getPelis" y "peliculasDeLaCategoria" del context
  const { getPelisApi, peliculasDeLaCategoria, isLoading } = useContext(UserContext);
  //le meto la categoria de la categoria
  const idCategory = "16";


  useEffect(() => {

    getPelisApi(idCategory);
  }, []);


  return (
    <>
      <div>Adventure</div>

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
