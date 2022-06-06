import UserContext from "./UserContext";

export const UseState = (props) => {


    return (
        <UserContext.Provider
            value={{ }}>{props.children}
        </UserContext.Provider>
    );
};

