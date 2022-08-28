import React, { useContext, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import UserContext from "../../src/context/UserContext";

export const MovieScreen = () => {



  const navigate = useNavigate();

  //obtengo el id de la pelicula con params
/*   const { movieId, title, overview } = useParams(); */

  //DEVUELVE LOS DATOS QUE HEMOS PASADO POR PARAMETROS Y URL
  const location = useLocation();
  console.log(location.state.poster);//"any type"

const [torrent, setTorrent] = useState();

let torrentt = '';


  const getTorrent = async (movieName) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
        'X-RapidAPI-Host': 'easytorrents1.p.rapidapi.com'
      }
    };
    fetch(`https://easytorrents1.p.rapidapi.com/?type=movie&name=${movieName}&language=en&quality=1080p`, options)
    .then(response => response.json())
    .then(response => /* console.log(response.magnet_link) */ setTorrent(response.magnet_link))
    .catch(err => console.error(err))
    .finally(console.log(torrent));
    //console.log(torrent);
  
   /*  const resp = await fetch('https://easytorrents1.p.rapidapi.com/?type=movie&name=Dragon%20Ball%20Super%3A%20Super%20Hero&language=en&quality=1080p', options)
    const data = await resp.json();
    const pelis = data.results;
    console.log(pelis); */
  };

  getTorrent(location.state.title); 
 /*  const getTorrent = async (movieName) => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
        'X-RapidAPI-Host': 'torrent-search2.p.rapidapi.com'
      }
    };

    console.log(movieName);
    await fetch(`https://torrent-search2.p.rapidapi.com/v1/all/search?query=${movieName}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  
  getTorrent(location.state.title); */

  //volver atrás
  const handleReturn = () => {
    navigate(-1);
  }


  return <>

    {/*  <h3>Movie Details</h3>
     */}

    <div className="p-5 text-center bg-image " style={{
      backgroundImage: `url(${location.state.poster})`, backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minheight: '500px'}}>
      <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">{location.state.title}</h1>
            <h4 className="mb-3">{location.state.overview}</h4>
            <h5>Click to download torrent:</h5>
            <a className="btn btn-outline-light btn-lg mb-4" href={torrent} target="_blank" role="button">Download Torrent</a>
            <br />
          </div>
        </div>
      </div>
      <button type="button" onClick={handleReturn} className="btn btn-dark m-4">Back</button>
    </div>
 </>
}
