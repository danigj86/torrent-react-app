import React from 'react'

export const ModalInfo = ({ id, title, overview, date, vote, poster }) => {

const url = "https://www.youtube.com/results?search_query=trailer+" + title;

    return (
        <>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target={"#number" + id}>
                + Info
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
                                <p>Trailer:  <a href={url} target="_blank" rel="noopener noreferrer">Click to see the trailer</a> </p>
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
