import React, { useContext, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from "../../src/context/UserContext";

export const MovieScreen = () => {

    const navigate = useNavigate();

    const {  detallePeli } = useContext(UserContext);

    //obtengo el id de la pelicula
    const { movieId } = useParams();

    //volver atrás
    const handleReturn = () => {
        navigate(-1);
    }

  /*  const data =  getDetallePeli(movieId);
   console.log(data); */

  

   const getDetallePelii = async (idPeli) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
      }
    };
    
    fetch(`https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${idPeli}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
    
  const review = useMemo(() => { getDetallePelii(movieId) }, [movieId]);
  console.log(review);

  return <>
    <div>Movie Details</div>
    <p>{movieId}</p>    
   
    <button type="button" onClick={handleReturn} className="btn btn-dark">Back</button>
    </>
}
