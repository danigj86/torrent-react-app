import React, { useContext, useState } from 'react'
import UserContext from "../../src/context/UserContext";
import { Link, useNavigate } from 'react-router-dom';

import { MovieCard } from '../components/MovieCard';


export const SearchTorrents = () => {
    const navigate = useNavigate();

    const { isAuth } = useContext(UserContext);

    //SI NO ESTAS LOGUEADO, REDIRIJE A "HOME"
    if (isAuth) {
        console.log('logueado')
    } else {
        window.location.pathname = "/";
    }

    const { isLoading } = useContext(UserContext);

    const [pelisTitle, setPelisTitle] = useState([]);
    const [titleName, setTitleName] = useState();
    console.log(titleName)

    const getPeliTitle = async (title) => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
                'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
            }
        };

        const resp = await fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${title}&page=1`, options)
        const data = await resp.json();
        const pelisTitulo = data.results;
        //console.log (pelisTitulo);

        const peliculas = pelisTitulo.map(peli => {
            return {
                id: peli.id,
                title: peli.title,
                poster: peli.backdrop_path,
                overview: peli.overview,
                release_date: peli.release_date,
                vote: peli.vote_average
            }
        })
        //SI NO ENCUENTRA PELICULAS, ALERTA
        if (peliculas.length == 0) {
            alert('NO PELIS FOUND WITH THAT TITLE')
            return false
        } else {
            setPelisTitle(peliculas);
        }
        console.log(peliculas);
    }

    //llama a getPeliTitle y muestra las pelis
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('You clicked submit.');
        console.log('you clicked submit and search: ' + titleName);
        // console.log('lengh: '+ pelisTitle.length)
        getPeliTitle(titleName);

    }



    return <>

        <div className="p-5 text-center bg-image " style={{
            backgroundImage: `url(https://cdn.mos.cms.futurecdn.net/KKeszNADDpSVbVvxFRFxWY.jpg)`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minheight: '700px'
        }}>
            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Search Torrents</h1>
                        <h4 className="mb-3">You can search and find your favorite movies</h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <input type="email" className="form-control" style={{ maxWidth: 250 }} placeholder="Search movie"
                                onChange={(e) => (setTitleName(e.target.value))} />
                            <br />

                            <form onSubmit={handleSubmit}>
                                <button className="btn btn-dark" type="submit">Search</button>
                            </form>
                        </div>
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
                </div> : pelisTitle.map(dato => {
                    return <MovieCard key={dato.id} {...dato} />
                })
            }
        </div>
    </>
}
