import { createContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/login").then((response) => {
    //         console.log(response.data);
    //         if (response.data.isLoggedIn) {
    //             setUserInfo(response.data.userInfo);
    //             setIsLoggedIn(true);
    //         } else {
    //             setIsLoggedIn(false);
    //         }
    //     })
    // }, []);

    const userCreds = useMemo(() => {
        return { userInfo, setUserInfo, isLoggedIn, setIsLoggedIn };
    }, [userInfo, isLoggedIn]);

    return (
        <UserContext.Provider value={userCreds} >
            {children}
        </UserContext.Provider>
    )
}