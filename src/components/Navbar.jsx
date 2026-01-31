import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbar from "./Navbar.module.css"
import Context from "../context/Context.jsx";
import SearchBar from "../context/SearchBar"
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar = () => {
  const { isAuthenticated, logout } = useContext(Context);
  const navigate = useNavigate();


  const handleLogout = () => {
   localStorage.clear();
  logout();

  // Login page par navigate karo replace ke saath
  // navigate("/login", { replace: true });

  // History stack ko reset karo
  window.history.pushState(null, "", "/login");  // current page
  window.history.pushState(null, "", "/");

    toast.success("Logout successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });

      // navigate("/login", { replace: true });   


    // navigate("/login", { replace: true });
    // navigate("/login", { replace: true });
    // window.history.replaceState(null, document.title, "/login");
    // setTimeout(() => {
      // navigate("/login", { replace: true });
    //   window.history.replaceState(null, document.title, "/login");
    // }, 1500);

    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1500);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <header className={navbar.header}>
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
      <nav className={navbar.nav}>


        {isAuthenticated && (
          <Link to="/profile" className={navbar.profile}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
            >
              <path
                d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Profile</span>
          </Link>
        )}

        {/* <div class="logo">
                 Mahi Agency 
            </div>  */}

        {/* <div className={navbar.search}>
          <input type="text" placeholder="Search" />
        </div> */}

        <div className={navbar.search}>
          <SearchBar />
        </div>

        <ul className={`${navbar.menu} ${menuOpen ? navbar.active : ""}`}>
          {/* <li>🛒 Cart</li> */}
          <li>Dealership</li>
          <li>Franchise</li>
          {!isAuthenticated && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
            </>
          )}
          <li><Link to="/contact">Contact</Link></li>
          {isAuthenticated && (
            <>
              <li><Link to="/setting">Setting</Link></li>
              <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </li>
            </>
          )}
        </ul>

        <div
          className={navbar.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>


      </nav>
    </header>
  )
}

export default Navbar