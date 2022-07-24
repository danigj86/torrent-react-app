import React, { useState, useEffect, useContext } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import { useLocation } from "react-router-dom";
import UserContext from "../../src/context/UserContext";
import { MovieCard } from '../components/MovieCard';

export const Adventure = () => {
//llamo a la funcion "getPelis" y "peliculasDeLaCategoria" del context
const { getPelisApi, peliculasDeLaCategoria } = useContext(UserContext);
//le meto la categoria de la categoria
const idCategory = "16";
getPelisApi(idCategory);

/* const location = useLocation();
console.log(location.pathname); */
/* useEffect(() => {
  getPelisApi()
}, []) */

  return (
    <>
    <div>Adventure</div>
    <div className='d-flex flex-wrap justify-content-center'>
    {
          peliculasDeLaCategoria.map(dato => {
            return <MovieCard key={dato.id} {...dato} />
          })
        }
      </div>
    </>
  )
}
