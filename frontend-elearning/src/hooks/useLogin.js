import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const { dispatch,user } = useAuthContext();
    const login = async (email, password) => {
        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { 
                "Content-Type": "application/json"
            },
        });
        let jsonRes = await response.json();
        if (response.ok) {
            setEmailError("");
            setPassError("");
            localStorage.setItem("user", JSON.stringify(jsonRes));
            dispatch({ type: "LOGIN", payload: jsonRes });
        } else {
            setEmailError(jsonRes.errors.email);
            setPassError(jsonRes.errors.password);
        }
    };
    return { passError, emailError, login };
};
