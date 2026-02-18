import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import products from "../data/products";
import productdetailCSS from "./ProductDetail.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "./config";

// const getProductUnit = (name) => {
//   const lowerName = name.toLowerCase();

//   if (lowerName.includes("syrup") || lowerName.includes("vinegar")) {
//     return "ml";
//   }

//   if (
//     lowerName.includes("tablet") ||
//     lowerName.includes("capsule")
//   ) {
//     return "tablets";
//   }

//   return "kg"; // default (powder etc.)
// };

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const product = products.find(p => p.productId === id);
  if (!product) return <h2>Product not found</h2>;

  const defaultVariant =
    product.variants?.[0] || {
      size: 1,
      unit: product.unit || "unit",
      price: product.price
    };

  // const productUnit = getProductUnit(product.name);
  // const [selectedUnit, setSelectedUnit] = useState("");
  // const [quantity, setQuantity] = useState(1);
  //  const defaultVariant = product.variants?.[0] || { size: 1, price: product.price };
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);
  // const [finalPrice, setFinalPrice] = useState(product.price);
  const [finalPrice, setFinalPrice] = useState(
    defaultVariant.price * 0.8
  );
  const [isInCart, setIsInCart] = useState(false);

  // useEffect(() => {
  //   if (selectedVariant) {
  //     setFinalPrice(selectedVariant.price);
  //   }
  // }, [selectedVariant]);

  useEffect(() => {
    if (selectedVariant) {
      const discounted = selectedVariant.price * 0.8;
      setFinalPrice(discounted);
    }
  }, [selectedVariant]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(
      (item) =>
        item.productId === product.productId &&
        // item.size === selectedVariant.size
        item.variant?.size === selectedVariant.size
    );
    if (exists) setIsInCart(true);
     else setIsInCart(false);
  }, [product.productId, selectedVariant]);


  // useEffect(() => {
  //   if (selectedUnit) {
  //     setFinalPrice(product.price * quantity);
  //   }
  // // }, [selectedUnit, quantity, product.price]);
  //  }, [product.price, quantity]);

  //  useEffect(() => {
  //   if (selectedUnit) {
  //     setFinalPrice(product.price * quantity);
  //   }
  // }, [selectedUnit, quantity, product.price]);

  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const exists = cart.find(item => item.productId === product.productId);
  //   if (exists) setIsInCart(true);
  // }, [product.productId]);

  const buyNow = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      setTimeout(() => {
        navigate("/login", { state: { from: location.pathname } });
      }, 1500);
      return;
    }

    if (!selectedVariant) {
      toast.error("Please select variant");
      return;
    }

    const quantity = 1;

    navigate("/address", {
      // state: { fromCheckout: true, product }
      state: {
        fromCheckout: true,
        product: {
          ...product,
          // size: selectedVariant.size,
          // unit: product.unit,
          // totalPrice: finalPrice
          // variant: {
          //   size: selectedVariant.size,
          //   unit: selectedVariant.unit,
          //   price: selectedVariant.price,
          // },
          variant: selectedVariant,
          quantity: quantity,
          // total: selectedVariant.price * quantity,
          total: finalPrice * quantity,
          // total: selectedVariant.price * 1,
        }
      }
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

    if (!selectedVariant) {
      toast.error("Please select variant");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = cart.find(
      (item) => item.productId === product.productId &&
        item.variant?.size === selectedVariant.size
    );

    if (!alreadyInCart) {
      // cart.push({ ...product, quantity: 1 });
      cart.push({
        ...product,
        // size: selectedVariant.size,
        // unit: product.unit,
        // totalPrice: finalPrice
        // variant: {
        //     size: selectedVariant.size,
        //     unit: selectedVariant.unit,
        //     price: selectedVariant.price
        //   },
         variant: selectedVariant,
        // quantity: 1,
        // total: selectedVariant.price * 1,
        total: finalPrice * 1
      });

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
            {/* ₹{product.price} */}
            {/* ₹{finalPrice} */}
            <span
              style={{
                textDecoration: "line-through",
                color: "gray",
                marginRight: "10px"
              }}
            >
              ₹{selectedVariant.price}
            </span>

            <span
              style={{
                color: "green",
                fontWeight: "bold",
                marginRight: "10px"
              }}
            >
              ₹{finalPrice}
            </span>

            <span style={{ color: "red" }}>
              20% OFF
            </span>
          </p>

          <p className={productdetailCSS["product-info"]} style={{ whiteSpace: "pre-line" }}>
            Description:
            <span className={productdetailCSS.description}>
              {" "}{product.description}
            </span>
          </p>

          {/* Variant selection */}
          {product.variants?.length > 0 && (
            <>
              <p className={productdetailCSS.label}>Select {product.unit || selectedVariant?.unit || ""}</p>
              <div className={productdetailCSS.unitBox}>
                {product.variants.map((v) => (
                  <button
                    key={v.size}
                    className={`${productdetailCSS.unitBtn} ${selectedVariant?.size === v.size ? productdetailCSS.active : ""
                      }`}
                    onClick={() => setSelectedVariant(v)}
                  >
                    {v.size} {v.unit}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* 🔹 QUANTITY */}
          {/* <p className={productdetailCSS.label}>Quantity</p>
          <div className={productdetailCSS.qtyBox}>
            <button onClick={decreaseQty}>−</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div> */}

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
