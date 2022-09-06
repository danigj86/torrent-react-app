import React, { useContext } from 'react'
import UserContext from "../../src/context/UserContext";


export const MyTorrentsList = () => {

    const { isAuth } = useContext(UserContext);

    !isAuth && (window.location = '/login');
    
    return <>

        {/*  <h3>Movie Details</h3>
     */}

        <div className="p-5 text-center bg-image " style={{
            backgroundImage: `url(https://cdn.mos.cms.futurecdn.net/KKeszNADDpSVbVvxFRFxWY.jpg)`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minheight: '700px'
        }}>
            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">My Torrent List</h1>
                        <h4 className="mb-3">Check and delete Your owns torrents</h4>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </>
}
