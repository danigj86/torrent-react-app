import React, { useState, useEffect, useContext } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import { useLocation } from "react-router-dom";
import UserContext from "../../src/context/UserContext";

export const Comedy = () => {

  const { getPelisApi, peliculasDeLaCategoria } = useContext(UserContext);
  //le meto la categoria de la categoria
  const idCategory = "35";
  getPelisApi(idCategory);


  return (
    <>
    <div>Comedy</div>
    <div className='d-flex flex-wrap justify-content-center'>
        {
          peliculasDeLaCategoria.map(dato => {

            return <div key={dato.id} className="mx-auto justify-content-center flex-wrap card col-xs-12 col-sm-6 col-md-3 d-flex" >
              <img className="card-img-top" src={dato.poster} alt="Img not found" />
              <div className="card-body">
                <h5 className="card-title">{dato.title}</h5>
                <p className="card-text">{dato.vote}/10</p>
                {/*  {<div className='App'>
                  <Rating onClick={handleRating} ratingValue={rating}  />
                </div>} */}
                <a href="#" className="btn btn-dark">More info</a>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}
