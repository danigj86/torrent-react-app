import React, { useState, useEffect, useContext } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import { useLocation } from "react-router-dom";
import UserContext from "../../src/context/UserContext";
import { MovieCard } from '../components/MovieCard';

export const Horror = () => {

  const { getPelisApi, peliculasDeLaCategoria } = useContext(UserContext);
  //le meto la categoria de la categoria
  const idCategory = "27";
  getPelisApi(idCategory);

  return (
    <>
    <div>Horror</div>
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
