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

            toast[res.data.status === "success" ? "success" : "error"](
                res.data.message,
                {
                    theme: "dark",
                    transition: Bounce
                }
            );

            if (res.data.status === "success") {
                setTimeout(() => {
                    navigate("/profile");
                }, 1500);
            }

        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong",
                {
                    theme: "dark",
                    transition: Bounce
                }
            );
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (!email) {
            return toast.error("Please enter your Email", {
                position: "top-center",
                theme: "dark",
            });
        }

        try {
            setResetLoading(true);

            const res = await axios.post(
                "http://192.168.29.234:4000/api/user/send-reset-password-email",
                { Email: email }, // backend expects { Email: "..." }
                { headers: { "Content-Type": "application/json" } }
            );

            toast.success(res.data.message, {
                position: "top-center",
                theme: "dark",
            });

        } catch (error) {
            toast.error(
                error.response?.data?.message || "Unable to send email",
                { position: "top-center", theme: "dark" }
            );
        } finally {
            setResetLoading(false);
        }
    };


    return (
        <div className={changepasswordCSS.container}>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                theme="dark"
                transition={Bounce}
            />

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
    );
};

export default ChangePassword;
