import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import products from "../data/products";
import productdetailCSS from "./ProductDetail.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "./config";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const product = products.find(p => p.productId === id);
  if (!product) return <h2>Product not found</h2>;

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(item => item.productId === product.productId);
    if (exists) setIsInCart(true);
  }, [product.productId]);

  const buyNow = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      setTimeout(() => {
        navigate("/login", { state: { from: location.pathname } });
      }, 1500);
      return;
    }

    navigate("/address", {
      state: { fromCheckout: true, product }
    });
  };

  const addToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      setTimeout(() => {
        navigate("/login", { state: { from: location.pathname } });
      }, 1500);
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = cart.find(
      item => item.productId === product.productId
    );

    if (!alreadyInCart) {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Added to cart");
      setIsInCart(true);
    } else {
      navigate("/cart");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <div className={productdetailCSS.box}>
        {/* <img src={product.image} */}
        <img src={`${BASE_URL}${product.image}`}
         alt={product.name} />

        <div className={productdetailCSS.details}>
          <p className={productdetailCSS["product-info"]}>
            {product.name}
          </p>

          <p className={productdetailCSS["product-info"]}>
            ₹{product.price}
          </p>

          <p className={productdetailCSS["product-info"]}>
            Description:
            <span className={productdetailCSS.description}>
              {" "}{product.description}
            </span>
          </p>

          <div className={productdetailCSS.buttons}>
            <button
              className={productdetailCSS.btn}
              onClick={buyNow}
            >
              Buy Now
            </button>

            <button
              className={productdetailCSS.btn}
              onClick={addToCart}
            >
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import products from "../data/products";
// import productdetailCSS from "./ProductDetail.module.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProductDetail = () => {
//   const { id } = useParams(); 
//   const navigate = useNavigate();
//   const location = useLocation();

//   const product = products.find(
//     (p) => p.productId === id
//   );

//   if (!product) {
//     return <h2 style={{ padding: "20px" }}>Product not found</h2>;
//   }

//   const [isInCart, setIsInCart] = useState(false);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const exists = cart.find(
//       (item) => item.productId === product.productId
//     );
//     if (exists) setIsInCart(true);
//   }, [product.productId]);

//   const buyNow = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Please login first");
//       setTimeout(() => {
//         navigate("/login", { state: { from: location.pathname } });
//       }, 1500);
//       return;
//     }

//     navigate("/address", {
//       state: { fromCheckout: true, product },
//     });
//   };

//   const addToCart = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Please login first");
//       setTimeout(() => {
//         navigate("/login", { state: { from: location.pathname } });
//       }, 1500);
//       return;
//     }

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const alreadyInCart = cart.find(
//       (item) => item.productId === product.productId
//     );

//     if (!alreadyInCart) {
//       cart.push({ ...product, quantity: 1 });
//       localStorage.setItem("cart", JSON.stringify(cart));
//       toast.success("Added to cart");
//       setIsInCart(true);
//     } else {
//       navigate("/cart");
//     }
//   };

//   return (
//     <>
//       <ToastContainer position="top-center" />

//       <div className={productdetailCSS.box}>
//         <img src={product.image} alt={product.name} />

//         <div className={productdetailCSS.details}>
//           <p className={productdetailCSS["product-info"]}>
//             {product.name}
//           </p>

//           <p className={productdetailCSS["product-info"]}>
//             ₹{product.price}
//           </p>

//           <p className={productdetailCSS["product-info"]}>
//             Description:
//             <span className={productdetailCSS.description}>
//               {" "}{product.description}
//             </span>
//           </p>

//           <div className={productdetailCSS.buttons}>
//             <button className={productdetailCSS.btn} onClick={buyNow}>
//               Buy Now
//             </button>

//             <button className={productdetailCSS.btn} onClick={addToCart}>
//               {isInCart ? "Go to Cart" : "Add to Cart"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetail;
