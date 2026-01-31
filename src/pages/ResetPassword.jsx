import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import resetpassword from "./ResetPassword.module.css";

const ResetPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `http://192.168.29.234:4000/api/user/reset-password/${id}/${token}`,
        { Password: password, Confirm_Password: confirmPassword },
        { headers: { "Content-Type": "application/json" } }
      );


      if (res.data.status === "success") {
        toast.success(res.data.message, { position: "top-center", autoClose: 2000 });


        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(res.data.message, { position: "top-center", autoClose: 3000 });
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={resetpassword.container}>
      <ToastContainer />
      <div className={resetpassword.card}>
        <h2 className={resetpassword.heading}>Reset Password</h2>
        <form onSubmit={handleSubmit} className={resetpassword.form}>
          <input
            className={resetpassword.input}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className={resetpassword.input}
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className={resetpassword.button} type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;