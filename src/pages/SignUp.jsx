import React, { useEffect, useContext, useState } from "react";
import signup from "./SignUp.module.css"
import axios from "axios"
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import context from "../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignUp = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(context);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";


  // console.log(auth)

  const [name, setName] = useState("")
  const [medical_store_name, setMedical_Store_Name] = useState("")
  const [city, setCity] = useState("")
  const [gstin, setGSTIN] = useState("")
  const [mobile_no, setMobile_NO] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // navigate(redirectPath, { replace: true });
  //   }
  //   window.history.replaceState(null, document.title, window.location.href);
  // }, [isAuthenticated, navigate, redirectPath]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        // navigate("/", { replace: true });
        navigate(redirectPath, { replace: true });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate, redirectPath]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      !name ||
      !medical_store_name ||
      !city ||
      !gstin ||
      !mobile_no ||
      !email ||
      !password ||
      !confirm_password
    ) {
      setMessage("All fields are required");
      setMessageType("error");
      return;
    }

    if (password !== confirm_password) {
      setMessage("Passwords do not match");
      setMessageType("error");
      return;
    }


    try {
      const api = await axios.post(`https://backend-api-wi3p.onrender.com/api/user/register`, {
        name,
        Medical_Store_Name: medical_store_name,
        City: city,
        GSTIN: gstin,
        Mobile_NO: mobile_no,
        Email: email,
        Password: password,
        Confirm_Password: confirm_password
      },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );

      // console.log(api)
      // toast.success(api.data.message, {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      //   transition: Bounce,
      // });

      setMessage(api.data.message);
      setMessageType("success");


      localStorage.setItem("token", api.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(api.data.user)
      );

      setUser(api.data.user);

      setIsAuthenticated(true);

      // auth.setIsAuthenticated(true);
      // localStorage.setItem("token", api.data.token);
      // setIsAuthenticated(true);

      // setUser(api.data.user);
      // setTimeout(() => {
      // navigate("/");
      // navigate(redirectPath);
      //   navigate(redirectPath, { replace: true });
      // }, 2000);

      // setTimeout(() => {
      //   navigate("/", { replace: true });
      // }, 1500);

      // navigate(redirectPath, { replace: true });
      // window.history.replaceState(null, document.title, redirectPath);

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration failed"
      );
      setMessageType("error");
      setIsAuthenticated(false);
    }
  }
  // console.log(error)
  // toast.error(error.response.data.message, {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: false,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "dark",
  //   transition: Bounce,


  // auth.setIsAuthenticated(false);



  return (
    <div className={signup.signupContainer}>
      <h1 className={signup.h1}>Mahi Agency</h1>
      <p className={signup.p}>Sign Up</p>
      

      <form onSubmit={handleSubmit} className={signup.form} action="form.php" method="post">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={signup.formInput}
          type="text"
          name="Name"
          placeholder="Enter your name" />
        <hr className={signup.hr} style={{ visibility: "hidden" }} />

        <input
          value={medical_store_name}
          onChange={(e) => setMedical_Store_Name(e.target.value)}
          className={signup.formInput}
          type="text"
          name="Medical store name"
          placeholder="Medical store name"
        />
        <hr style={{ visibility: "hidden" }} />

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={signup.formInput}
          type="text"
          name="City"
          placeholder="City" />
        <hr style={{ visibility: "hidden" }} />

        <input
          value={gstin}
          onChange={(e) => setGSTIN(e.target.value)}
          className={signup.formInput}
          type="text"
          name="GSTIN"
          placeholder="GSTIN" />
        <hr style={{ visibility: "hidden" }} />

        <input
          value={mobile_no}
          onChange={(e) => setMobile_NO(e.target.value)}
          className={signup.formInput}
          type="text"
          name="Mobile NO."
          placeholder="Mobile NO." />
        <hr style={{ visibility: "hidden" }} />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={signup.formInput}
          type="text"
          name="Email"
          placeholder="Email" />
        <hr style={{ visibility: "hidden" }} />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={signup.formInput}
          type="password"
          name="Create a password"
          placeholder="Create a password"
        />
        <hr style={{ visibility: "hidden" }} />

        <input
          value={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={signup.formInput}
          type="password"
          name="Confirm password"
          placeholder="Confirm password"
        />
        <hr style={{ visibility: "hidden" }} />

        {message && (
        <div
          style={{
            backgroundColor:
              messageType === "success" ? "#1e7e34" : "#b02a37",
            color: "white",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}

        <input
          className={signup.submit}
          type="submit"
          value="Sign Up" />

        <div className={signup.switchAuth}>
          <span>Already user?</span>
          {/* <Link to="/login" className={signup.switchLink}>
            Login
          </Link> */}

          <Link
            to="/login"
            state={{ from: redirectPath }}
            className={signup.switchLink}
          >
            Login
          </Link>
        </div>
      </form>


    </div>
  );
};

export default SignUp;