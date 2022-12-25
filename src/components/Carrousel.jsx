import React from 'react'

export const Carrousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="http://www.studioremarkable.com/wp-content/uploads/2012/08/Dark-Knight-Trilogy.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>BESTS TORRENTS FREE</h5>
                        <p>The best application to find the best torrents</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://www.nerdpool.it/wp-content/uploads/2022/12/maxresdefault-3.webp" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>VARIOUS GENRES</h5>
                        <p>The best application to find the best torrents</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://cdn.mos.cms.futurecdn.net/KKeszNADDpSVbVvxFRFxWY.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>LATEST RELEASES</h5>
                        <p>The best application to find the best torrents</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
