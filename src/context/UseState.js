import React, { useRef, useState } from 'react';
import UserContext from "./UserContext";

export const UseState = (props) => {

    const [ user, setUser ] = useState(null);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    return (
        <UserContext.Provider
            value={{ }}>{props.children}
        </UserContext.Provider>
    );
};

