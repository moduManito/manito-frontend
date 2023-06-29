import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../store/authState";

const { VITE_APP_SERVER_PORT } = import.meta.env;

const instance = axios.create({
    baseURL: VITE_APP_SERVER_PORT + "/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

const AuthorizedInstance = () => {
    const accessToken = useRecoilValue(accessTokenState);
    console.log("Recoil에서 확인하는 accessToken값은 :" + accessToken);

    useEffect(() => {
        instance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${accessToken}`;
    }, [accessToken]);

    return instance;
};

export default AuthorizedInstance;
