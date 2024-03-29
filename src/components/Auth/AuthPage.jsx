import React, {useState} from "react";
import styles from "./styles/authStyles"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const AuthPage = () => {
    const classes = styles();
    const [authState, setAuthState] = useState("login");

    return (
        <>
            <div className={classes.auth}>
                <div className="greeting-text">
                    <h1 className="brand">Quiet Space</h1>
                    <h2 className="primary-text">social media without the distraction</h2>
                    <h3 className="secondary-text">where free speech and privacy is our priority</h3>
                </div>
                {
                    authState == "signup" ? <SignupForm setAuthState={setAuthState} /> :
                    authState == "login" ? <LoginForm setAuthState={setAuthState}/> : null
                }
            </div>
        </>
    )
}

export default AuthPage