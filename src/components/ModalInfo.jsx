import React from 'react'

export const ModalInfo = ({ id, title, overview, date, vote, poster }) => {

/*     const getTorrents = async (movieName) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f4558328a2mshd470c9fa547a718p1d6294jsn5f5c0fd153b2',
                'X-RapidAPI-Host': 'easytorrents1.p.rapidapi.com'
            }
        };

            const resp = await fetch(`https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${movieName}&page=1`, options)
            const data = await resp.json();
            const pelis = data.results;
    }
    getTorrents(title); */

    

        const urlTrailer = "https://www.youtube.com/results?search_query=trailer+" + title;

        return (
            <>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target={"#number" + id}>
                    Info Modal
                </button>

                <div className="modal fade" id={"number" + id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <img className="card-img-top" src={poster} alt="Img not found" />
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                                <h6>{id}</h6>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">{overview}</label>
                                    <label className="form-label">Year: {date}</label>
                                    <p className="form-label">Score: {vote}/10</p>
                                    <p>Trailer:  <a href={urlTrailer} target="_blank" rel="noopener noreferrer">Click to see the trailer</a> </p>
                                    <p>Download Torrent (Bit Torrent)</p>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
