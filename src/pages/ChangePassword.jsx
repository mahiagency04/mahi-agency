import React, { useState } from "react";
import changepasswordCSS from "./ChangePassword.module.css";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [resetLoading, setResetLoading] = useState(false);
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");


    const [formData, setFormData] = useState({
        Current_Password: "",
        Password: "",
        Confirm_Password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        try {
            const res = await axios.post(
                "http://192.168.29.234:4000/api/user/changepassword",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            // toast[res.data.status === "success" ? "success" : "error"](
            //     res.data.message,
            //     {
            //         theme: "dark",
            //         transition: Bounce
            //     }
            // );


            if (res.data.status === "success") {
                setMessage(res.data.message || "Password changed successfully");
                setMessageType("success");
                setTimeout(() => {
                    navigate("/profile");
                }, 1500);
            } else {
                setMessage(res.data.message);
                setMessageType("error");
            }

        } catch (error) {
            // toast.error(
            //     error.response?.data?.message || "Something went wrong",
            //     {
            //         theme: "dark",
            //         transition: Bounce
            //     }
            // );
            setMessage(
                error.response?.data?.message || "Something went wrong"
            );
            setMessageType("error");
        } finally {
            setLoading(false);
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
    }


    const handleResetPassword = async () => {
        if (!email) {
            // return toast.error("Please enter your Email", {
            //     position: "top-center",
            //     theme: "dark",
            // });
            setMessage("Please enter your Email");
            setMessageType("error");
            return;
        }

        try {
            setResetLoading(true);
            setMessage("");

            const res = await axios.post(
                "http://192.168.29.234:4000/api/user/send-reset-password-email",
                { Email: email }, // backend expects { Email: "..." }
                { headers: { "Content-Type": "application/json" } }
            );

            // toast.success(res.data.message, {
            //     position: "top-center",
            //     theme: "dark",
            // });
            setMessage(res.data.message || "Reset email sent");
            setMessageType("success");

        } catch (error) {
            // toast.error(
            //     error.response?.data?.message || "Unable to send email",
            //     { position: "top-center", theme: "dark" }
            // );
            setMessage(
                error.response?.data?.message || "Unable to send email"
            );
            setMessageType("error");
        } finally {
            setResetLoading(false);
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
    };


    return (
        <div className={changepasswordCSS.container}>
            {/* <ToastContainer
            position="top-center"
            autoClose={1500}
            theme="dark"
            transition={Bounce}
        /> */}

            <h2 className={changepasswordCSS.heading}>Change Password</h2>

            <form onSubmit={handleSubmit} className={changepasswordCSS.form}>

                <input
                    type="password"
                    name="Current_Password"
                    value={formData.Current_Password}
                    onChange={handleChange}
                    placeholder="Current Password"
                    className={changepasswordCSS.input}
                    required
                />

                <input
                    type="password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    placeholder="New Password"
                    className={changepasswordCSS.input}
                    required
                />

                <input
                    type="password"
                    name="Confirm_Password"
                    value={formData.Confirm_Password}
                    onChange={handleChange}
                    placeholder="Confirm New Password"
                    className={changepasswordCSS.input}
                    required
                />

                {message && (
                    <div
                        style={{
                            marginBottom: "10px",
                            padding: "8px",
                            borderRadius: "5px",
                            fontSize: "14px",
                            textAlign: "center",
                            color: messageType === "success" ? "#155724" : "#721c24",
                            backgroundColor:
                                messageType === "success" ? "#d4edda" : "#f8d7da"
                        }}
                    >
                        {message}
                    </div>
                )}

                <button className={changepasswordCSS.button} disabled={loading}>
                    {loading ? "Updating..." : "Change Password"}
                </button>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to reset password"
                    className={changepasswordCSS.input}
                />

                <button
                    type="button"
                    className={changepasswordCSS.resetButton}
                    onClick={handleResetPassword}
                    disabled={resetLoading}
                >
                    {resetLoading ? "Sending..." : "Reset Password"}
                </button>
            </form>
        </div>

    )
}

export default ChangePassword;
