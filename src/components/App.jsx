import { USER_PROFILE_URL } from "../constants/ApiPath";
import { Route, Routes } from "react-router-dom";
import styles from "../styles/appStyles";
import ContactPage from "./Contact/ContactPage";
import NavBar from "./Navbar/Navbar";
import PostPage from "./Posts/PostPage";
import ChatPage from "./Chat/ChatPage";

import './App.css'

import { fetchUser } from "../api/userRequests";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AuthPage from "./Auth/AuthPage";

const App = () => {
    
    const queryClient = useQueryClient();
    const auth = queryClient.getQueryData("auth");

    const { data: userData, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await fetchUser(USER_PROFILE_URL, auth.token);
            return await response.json();
        },
        enabled: auth?.token === true,
    })

    if(isLoading) console.log("user data is loading")
    console.log("userdata: ",userData)

    const isNull = (value) => typeof value === "object" && !value;

    const classes = styles();
    return (
        <div className={classes.app}>
            {!userData?.id ? (<AuthPage />) : isLoading ? (<h1>Loading ..</h1>) : (
                <>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<PostPage />} />
                        <Route path="/posts" element={<PostPage />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </>
            )}
        </div>
    )
}

export default App