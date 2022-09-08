import React, { useContext } from 'react'
import UserContext from "../../src/context/UserContext";
import { Link, useNavigate } from 'react-router-dom';

export const SearchTorrents = () => {
    const navigate = useNavigate();

    const { isAuth } = useContext(UserContext);


    if(isAuth){
        console.log('logueado')
    }else{
        window.location.pathname = "/";
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
                        <h4 className="mb-3">Check and delete Your owns torrents</h4>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </>
}
