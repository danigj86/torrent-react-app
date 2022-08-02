import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ModalInfo } from './ModalInfo';

export const MovieCard = ({ poster, title, vote, id, overview, release_date }) => {

    const navigate = useNavigate();
    const toDescription=()=>{
        navigate(`/movie/${title}`,
                  {
                    state:{
                      poster,
                      title,
                      vote,
                      id,
                      overview,
                      release_date
                    }});
          }



    return (

        <div key={id} className="mx-auto justify-content-center flex-wrap card col-xs-12 col-sm-6 col-md-3 d-flex" >
            <img className="card-img-top" src={poster} alt="Img not found" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{vote}/10</p>
                {/*  {<div className='App'>
                  <Rating onClick={handleRating} ratingValue={rating}  />
                </div>} */}
                <button onClick={toDescription}>More info</button>
                {/* <Link className='btn btn-dark' to={`/movie/${id}${title}${overview}` }>More Screen</Link> &nbsp; &nbsp; */}
                <ModalInfo id={id} title={title} overview={overview} date={release_date} poster={poster} vote={vote} />
            </div>
        </div>
    )
}
