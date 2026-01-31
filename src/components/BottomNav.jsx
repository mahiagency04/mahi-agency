import React from "react";
import { useNavigate } from "react-router-dom";
import bottomNavCSS from "./BottomNav.module.css";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";

const BottomNav = () => {
    const navigate = useNavigate();

    return (
        <div className={bottomNavCSS.container}>
            <div className={bottomNavCSS.item} onClick={() => navigate("/")}>
                <FaHome size={20} />
                <span>Home</span>
            </div>

            <div className={bottomNavCSS.item} onClick={() => navigate("/cart")}>
                <FaShoppingCart size={20} />
                <span>Cart</span>
            </div>

            <div className={bottomNavCSS.item} onClick={() => navigate("/my-orders")}>
                <FaUser size={20} />
                <span>Orders</span>
            </div>
        </div>
    );
};

export default BottomNav;