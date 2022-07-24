import React, { useState, useEffect, useContext } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import { useLocation } from "react-router-dom";
import UserContext from "../../src/context/UserContext";
import { MovieCard } from '../components/MovieCard';


export const Action = () => {

  //llamo a la funcion "getPelis" y "peliculasDeLaCategoria" del context
  const { getPelisApi, peliculasDeLaCategoria } = useContext(UserContext);
  //le meto la categoria de la categoria
  const idCategory = "28";
  getPelisApi(idCategory);

  /* const location = useLocation();
  console.log(location.pathname); */
  /* useEffect(() => {
    getPelisApi()
  }, []) */
  /*------- RAITING STAR ------- */
  /*  const [rating, setRating] = useState(0) // initial rating value
   // Catch Rating value
   const handleRating = (rate) => {
     setRating(rate)
     // other logic
   } */


  return (
    <>
     {/* SIN NECESIDAD DE USAR MOVIECARD, EN CADA PAGINA SE PODRIA USAR 
     <div>Action</div>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          peliculasDeLaCategoria.map(dato => {

            return <div key={dato.id} className="mx-auto justify-content-center flex-wrap card col-xs-12 col-sm-6 col-md-3 d-flex" >
              <img className="card-img-top" src={dato.poster} alt="Img not found" />
              <div className="card-body">
                <h5 className="card-title">{dato.title}</h5>
                <p className="card-text">{dato.vote}/10</p>
                <a href="#" className="btn btn-dark">More info</a>
              </div>
            </div>
          })
        }
      </div> */}



      <div>Action</div>
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









