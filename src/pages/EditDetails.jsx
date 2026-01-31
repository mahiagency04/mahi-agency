import React, { useEffect, useState } from "react";
import EditDetailsCSS from "./EditDetails.module.css";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const EditDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    Medical_Store_Name: "",
    City: "",
    GSTIN: "",
    Mobile_NO: "",
    Email: ""
  });

  useEffect(() => {
    const fetchLoggedUser = async () => {
      try {
        const res = await axios.get(
          "http://192.168.29.234:4000/api/user/loggeduser",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        const user = res.data.user;

        setFormData({
          name: user.name || "",
          Medical_Store_Name: user.Medical_Store_Name || "",
          City: user.City || "",
          GSTIN: user.GSTIN || "",
          Mobile_NO: user.Mobile_NO || "",
          Email: user.Email || ""
        });

      } catch (error) {
        toast.error("User data load nahi ho paya", {
          theme: "dark",
          transition: Bounce
        });
      }
    };

    fetchLoggedUser();
  }, []);

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
      const res = await axios.put(
        "http://192.168.29.234:4000/api/user/edit-details",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      toast.success(res.data.message, {
        theme: "dark",
        transition: Bounce
      });

      setTimeout(() => {
        navigate("/profile");
      }, 1500);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Update failed",
        {
          theme: "dark",
          transition: Bounce
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={EditDetailsCSS.container}>
      <ToastContainer
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
            />

      <h2 className={EditDetailsCSS.heading}>Edit Details</h2>

      <form onSubmit={handleSubmit} className={EditDetailsCSS.form}>
        <input className={EditDetailsCSS.input} name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input className={EditDetailsCSS.input} name="Medical_Store_Name" value={formData.Medical_Store_Name} onChange={handleChange} placeholder="Medical Store Name" />
        <input className={EditDetailsCSS.input} name="City" value={formData.City} onChange={handleChange} placeholder="City" />
        <input className={EditDetailsCSS.input} name="GSTIN" value={formData.GSTIN} onChange={handleChange} placeholder="GSTIN" />
        <input className={EditDetailsCSS.input} name="Mobile_NO" value={formData.Mobile_NO} onChange={handleChange} placeholder="Mobile Number" />
        <input className={EditDetailsCSS.input} name="Email" value={formData.Email} onChange={handleChange} placeholder="Email" />

        <button className={EditDetailsCSS.button} disabled={loading}>
          {loading ? "Updating..." : "Update Details"}
        </button>
      </form>
    </div>
  );
};

export default EditDetails;
