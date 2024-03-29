import React, { useContext, useState } from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Action } from '../pages/Action';
import { Adventure } from '../pages/Adventure';
import { Animation } from '../pages/Animation';
import { Comedy } from '../pages/Comedy';
import { Horror } from '../pages/Horror';
import { Thriller } from '../pages/Thriller';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { War } from '../pages/War';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { MovieScreen } from './MovieScreen';
import { SearchTorrents } from '../pages/SearchTorrents';
import { MyTorrentsList } from '../pages/MyTorrentsList';

import { auth, provider } from '../firebase-config'
import UserContext from "../../src/context/UserContext";
import navbar from '../styles/navbar.css';
import SignUp from './SignUp';



export const Navbar = () => {

    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })

    const { isAuth, setIsAuth } = useContext(UserContext);
    console.log(isAuth)

    const [locationn, setLocationn] = React.useState('/action');

    const logOut = () => {
        signOut(auth)
            .then(() => {
                //localStorage.clear();
                localStorage.removeItem('currentUser');
                localStorage.removeItem('isAuth');
                localStorage.removeItem('idUserPost');
                setIsAuth(false);
                window.location = '/';
            })
    }

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>T O R R E N T S . A P P </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/action'>ACTION</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/adventure'>ADVENTURE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/animation'>ANIMATION</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/horror'>HORROR</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/thriller'>THRILLER</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/comedy'>COMEDY</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/war'>WAR</Link></li>
                        </ul>


                        {isAuth && <Link className="login-btn " aria-current="page" to='/mytorrents'>My Torrents</Link>}
                        {isAuth && <Link className="login-btn " aria-current="page" to='/searchtorrents'>Search</Link>}
                        {!isAuth ? <Link className="login-btn " aria-current="page" to='/login'>LOG IN</Link> : <button className="login-btn " aria-current="page" onClick={logOut}>LOG OUT</button>}

                        {locationn != '/action' && <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn " type="submit">Search...</button>
                        </form>}
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/action' element={<Action />} />
                <Route path='/adventure' element={<Adventure />} />
                <Route path='/animation' element={<Animation />} />
                <Route path='/horror' element={<Horror />} />
                <Route path='/comedy' element={<Comedy />} />
                <Route path='/thriller' element={<Thriller />} />
                <Route path='/war' element={<War />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/mytorrents' element={<MyTorrentsList />} />
                <Route path='/searchtorrents' element={<SearchTorrents />} />
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<Home />} />
                <Route path="/movie/:movieId:title:overview" element={<MovieScreen />} />
            </Routes>

        </Router>
    );

}
