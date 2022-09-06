import React, { useState, useEffect, useContext } from 'react'
import cards from '../styles/cards.css';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating'
import { useLocation } from "react-router-dom";
import UserContext from "../../src/context/UserContext";
import { MovieCard } from '../components/MovieCard';


export const Action = () => {

  //llamo a la funcion "getPelis" y "peliculasDeLaCategoria" del context
  const { getPelisApi, peliculasDeLaCategoria, isLoading } = useContext(UserContext);
  //le meto la categoria de la categoria
  const idCategory = "28";
  useEffect(() => {

    getPelisApi(idCategory);
  }, []);


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



    
      <div className="p-5 text-center bg-image " style={{
        backgroundImage: `url(https://www.latercera.com/resizer/n83tHvXcmn1O_aG7YCmKE_krWLU=/arc-anglerfish-arc2-prod-copesa/public/RFIZQUAZPNH4VNHQYUUY3UCLYQ.jpg)`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minheight: '2000px'
      }}>
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">A C T I O N </h1>
              <h4 className="mb-3">Action Movies</h4>
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









