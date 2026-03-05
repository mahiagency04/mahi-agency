import React, { useEffect, useContext, useState } from "react";
import login from "./Login.module.css"
import axios from "axios"
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import context from "../context/Context";


const Login = () => {
        const { isAuthenticated, setIsAuthenticated, setUser } = useContext(context);
        const navigate = useNavigate();
        const location = useLocation();
        const redirectPath = location.state?.from || "/";
        const [message, setMessage] = useState(null);

        useEffect(() => {
                if (isAuthenticated) {
                        const timer = setTimeout(() => {
                                // navigate("/", { replace: true });
                                navigate(redirectPath, { replace: true });
                        }, 2000);
                        return () => clearTimeout(timer);
                }
        }, [isAuthenticated, navigate, redirectPath]);

        // useEffect(() => {
        //         if (isAuthenticated) {
        //                 navigate("/", { replace: true });
        //         }
        // }, [isAuthenticated, navigate]);

        // // useEffect(() => {
        // //         if (isAuthenticated) {
        // //                 // navigate(redirectPath, { replace: true });
        // //         }
        // //         window.history.replaceState(null, document.title, window.location.href);
        // }, [isAuthenticated, navigate, redirectPath]);

        // useEffect(() => {
        // Agar user back button dabaye
        //   const handleBack = () => {
        // Jab user logout hai to home page pe bhej do
        //     if (!isAuthenticated) {
        //       navigate("/", { replace: true });
        //     }
        //   };

        //   window.addEventListener("popstate", handleBack);

        //   return () => {
        //     window.removeEventListener("popstate", handleBack);
        //   };
        // }, [isAuthenticated, navigate]);

        // useEffect(() => {
        //   const handlePopState = () => {
        //     if (!isAuthenticated) {
        // Agar user login nahi hai aur back button dabata hai
        //       navigate("/", { replace: true }); // home page par bhejo
        //     }
        //   };

        //   window.addEventListener("popstate", handlePopState);

        //   return () => window.removeEventListener("popstate", handlePopState);
        // }, [isAuthenticated, navigate]);


        // console.log(auth)

        const [identifier, setIdentifier] = useState("");
        const [password, setPassword] = useState("");

        const [resetLoading, setResetLoading] = useState(false);

        const handleSubmit = async (e) => {
                e.preventDefault();

                if (!identifier || !password) {
                        return setMessage({
                                type: "error",
                                text: "Email/Mobile and Password are required",
                        });
                }

                try {
                        const api = await axios.post(`http://192.168.29.234:4000/api/user/login`, { identifier, password },
                                {
                                        headers: {
                                                "Content-Type": "application/json"
                                        },
                                        withCredentials: true,
                                });
                        console.log("Response:", api.data);

                        // console.log(api)
                        // toast.success(api.data.message, {
                        //         position: "top-center",
                        //         autoClose: 5000,
                        //         hideProgressBar: false,
                        //         closeOnClick: false,
                        //         pauseOnHover: true,
                        //         draggable: true,
                        //         progress: undefined,
                        //         theme: "dark",
                        //         transition: Bounce,
                        // });



                        localStorage.setItem("token", api.data.token);

                        localStorage.setItem(
                                "user",
                                JSON.stringify(api.data.user)
                        );

                        setUser(api.data.user);

                        // setIsAuthenticated(true);

                        // auth.setIsAuthenticated(true);
                        // localStorage.setItem("token", api.data.token);
                        setIsAuthenticated(true);
                        setMessage({
                                type: "success",
                                text: api.data.message,
                        });

                        // toast.success(api.data.message, {
                        //         position: "top-center",
                        //         autoClose: 5000,
                        //         hideProgressBar: false,
                        //         closeOnClick: false,
                        //         pauseOnHover: true,
                        //         draggable: true,
                        //         progress: undefined,
                        //         theme: "dark",
                        //         transition: Bounce,
                        // });

                        // navigate(redirectPath, { replace: true });
                        // setUser(api.data.user);
                        // setTimeout(() => {
                        // navigate("/");
                        // navigate(redirectPath);
                        //         navigate(redirectPath, { replace: true });
                        // }, 2000);

                        // setTimeout(() => {
                        //         navigate(redirectPath, { replace: true });
                        // }, 1500);

                        // navigate(redirectPath, { replace: true });
                        // window.history.replaceState(null, document.title, redirectPath);
                } catch (error) {
                        // console.log(error)
                        // toast.error(error.response.data.message, {
                        //         position: "top-center",
                        //         autoClose: 5000,
                        //         hideProgressBar: false,
                        //         closeOnClick: false,
                        //         pauseOnHover: true,
                        //         draggable: true,
                        //         progress: undefined,
                        //         theme: "dark",
                        //         transition: Bounce,
                        // });
                        setIsAuthenticated(false);
                        setMessage({
                                type: "error",
                                text:
                                        error.response?.data?.message ||
                                        "Login failed. Please try again.",
                        });

                        navigate("/login", { replace: true });
                        console.log("Error:", error.response?.data || error.message);
                        // auth.setIsAuthenticated(false);
                        // setIsAuthenticated(false);
                }

                console.log({ identifier, password });

        }

        const handleResetPassword = async () => {
                if (!identifier) {
                        // return toast.error("Please enter your Email", {
                        //         position: "top-center",
                        //         theme: "dark",
                        // });
                        return setMessage({
                                type: "error",
                                text: "Please enter your Email",
                        });

                }
                try {
                        setResetLoading(true);

                        const res = await axios.post(
                                "http://192.168.29.234:4000/api/user/send-reset-password-email",
                                { Email: identifier },
                                { headers: { "Content-Type": "application/json" } }
                        );

                        // toast.success(res.data.message, {
                        //         position: "top-center",
                        //         theme: "dark",
                        // });

                        setMessage({
                                type: "success",
                                text: res.data.message,
                        });

                } catch (error) {
                        // toast.error(error.response?.data?.message || "Unable to send email", {
                        //         position: "top-center",
                        //         theme: "dark",
                        // });

                        setMessage({
                                type: "error",
                                text:
                                        error.response?.data?.message ||
                                        "Unable to send email",
                        });
                } finally {
                        setResetLoading(false);
                }
        };

        return (
                <div className={login.loginContainer}>
                        {/* <ToastContainer
                        position="top-center"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition={Bounce}
                /> */}
                        <h1 className={login.h1}>Mahi Agency</h1>
                        <p className={login.p}>Login</p>
                        <form className={login.form} onSubmit={handleSubmit} style={{ height: "613px" }}>

                                <input className={login.formInput} type="text" placeholder="Email or Mobile Number" value={identifier} onChange={(e) => setIdentifier(e.target.value)} /> <br />
                                {/* <hr style={{ visibility: "hidden"}}/> */}
                                {/* <input className={login.formInput} type="text" name="GSTIN" placeholder="GSTIN" /><b /> */}
                                {/* <hr style={{ visibility: "hidden"}}/> */}
                                <input className={login.formInput} type="password" placeholder="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} /><br />
                                {/* <hr style={{ visibility: "hidden"}}/> */}

                                <div className={login.resetWrapper}>
                                        <span
                                                className={login.resetPassword}
                                                onClick={handleResetPassword}
                                        >
                                                {resetLoading ? "Sending..." : "Reset Password"}
                                        </span>
                                </div>
                                        {message && (
                                        <div
                                                style={{
                                                        background:
                                                                message.type === "success"
                                                                        ? "#d4edda"
                                                                        : "#f8d7da",
                                                        color:
                                                                message.type === "success"
                                                                        ? "#155724"
                                                                        : "#721c24",
                                                        padding: "10px",
                                                        marginBottom: "15px",
                                                        borderRadius: "6px",
                                                        textAlign: "center",
                                                        fontWeight: "500",
                                                }}
                                        >
                                                {message.text}
                                        </div>
                                )}
                                <input className={login.submit} type="submit" value="Login" />

                                <div className={login.switchAuth}>
                                        <span>New user?</span>
                                        {/* <Link to="/signup" className={login.switchLink}>
                                                New Registration
                                        </Link> */}

                                        <Link
                                                to="/signup"
                                                state={{ from: redirectPath }}
                                                className={login.switchLink}
                                        >
                                                New Registration
                                        </Link>
                                </div>
                        </form>

                </div>
        )
}

export default Login;