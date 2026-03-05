  import React, { useState, useEffect } from "react";
  import { useParams, useNavigate, useLocation } from "react-router-dom";
  import products from "../data/products";
  import productdetailCSS from "./ProductDetail.module.css";
  // import { toast, ToastContainer } from "react-toastify";
  // import "react-toastify/dist/ReactToastify.css";
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
    const [message, setMessage] = useState("");

    const product = products.find(p => p.productId === id);
    if (!product) return <h2>Product not found</h2>;

    const defaultVariant =
      product.variants?.[0] || {
        size: 1,
        unit: product.unit || "unit",
        // price: product.price
        // mrp: product.price || 0,
        mrp: 0,
      rate: 0,
        batchNo: "",
        mfgDate: "",
        expiryDate: ""
      };

    // const productUnit = getProductUnit(product.name);
    // const [selectedUnit, setSelectedUnit] = useState("");
    // const [quantity, setQuantity] = useState(1);
    //  const defaultVariant = product.variants?.[0] || { size: 1, price: product.price };
    const [selectedVariant, setSelectedVariant] = useState(defaultVariant);
    // const [finalPrice, setFinalPrice] = useState(product.price);
    // const [finalPrice, setFinalPrice] = useState(
    //   defaultVariant.price * 0.8
    // );
    
    // const [finalPrice, setFinalPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(selectedVariant?.rate || 0);
    const [isInCart, setIsInCart] = useState(false);

    const getDiscountedPrice = (mrp) => {
      if (!mrp) return 0;
      return Math.round(mrp - mrp * 0.2);
    };

    useEffect(() => {
      if (selectedVariant) {
        setFinalPrice(selectedVariant.price);
      }
    }, [selectedVariant]);

    useEffect(() => {
      if (selectedVariant) {
        // const discounted = selectedVariant.price * 0.8;
        // setFinalPrice(discounted);
        const mrpValue = selectedVariant?.mrp || 0;
        const discounted = getDiscountedPrice(mrpValue);
        setFinalPrice(discounted);
        // setFinalPrice(selectedVariant?.rate || 0);
      }
    }, [selectedVariant]);

    useEffect(() => {
      // const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const exists = cart.find(
        (item) =>
          item.productId === product.productId &&
          // item.size === selectedVariant.size
          item.variant?.size === selectedVariant.size &&
          item.variant?.batchNo === selectedVariant.batchNo
      );
      // if (exists) setIsInCart(true);
      // else setIsInCart(false);
        setIsInCart(!!exists);
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
        // toast.error("Please login first");
        setMessage("⚠ Please login first");
        setTimeout(() => {
          navigate("/login", { state: { from: location.pathname } });
        }, 1500);
        return;
      }

      if (!selectedVariant) {
        // toast.error("Please select variant");
        setMessage("⚠ Please select variant");
        return;
      }

      setMessage("");

      const quantity = 1;
      // const mrpValue = selectedVariant?.mrp || 0;


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
            // variant: selectedVariant,
            variant: {
              ...selectedVariant,
              // mrp: mrpValue,
              // rate: finalPrice,
              // batchNo: selectedVariant.batchNo,
              // mfgDate: selectedVariant.mfgDate,
              // expiryDate: selectedVariant.expiryDate
            },
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
        // toast.error("Please login first");
        setMessage("⚠ Please login first");
        setTimeout(() => {
          navigate("/login", { state: { from: location.pathname } });
        }, 1500);
        return;
      }

      if (!selectedVariant) {
        // toast.error("Please select variant");
        setMessage("⚠ Please select variant");
        return;
      }

      // let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const alreadyInCart = cart.find(
        (item) => item.productId === product.productId &&
          item.variant?.size === selectedVariant.size &&
          item.variant?.batchNo === selectedVariant.batchNo
      );

      // const mrpValue = selectedVariant?.mrp || 0;

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
          // variant: selectedVariant,
          variant: {
            ...selectedVariant,
            // mrp: selectedVariant?.mrp || 0,
            // rate: finalPrice,
            // batchNo: selectedVariant.batchNo,
            // mfgDate: selectedVariant.mfgDate,
            // expiryDate: selectedVariant.expiryDate
          },
          // quantity: 1,
          // total: selectedVariant.price * 1,
          total: finalPrice
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        // toast.success("Added to cart");
        setMessage(" Added to cart");
        setIsInCart(true);
      } else {
        navigate("/cart");
      }
    };

    return (
      <>
        {/* <ToastContainer position="top-center" /> */}

        <div className={productdetailCSS.box}>
          {/* <img src={product.image} */}
          <img src={`${BASE_URL}${product.image}`}
            alt={product.name} />

          <div className={productdetailCSS.details}>
            <p className={productdetailCSS["product-info"]}>
              {product.name}
            </p>

            {/* <p className={productdetailCSS["product-info"]}> */}
              {/* ₹{product.price} */}
              {/* ₹{finalPrice} */}
              {/* <span
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
            </p> */}

            {/* <p className={productdetailCSS["product-info"]}>
            <strong>MRP:</strong> ₹{selectedVariant?.mrp || 0}
          </p> */}

          {/*  RATE */}
          {/* <p className={productdetailCSS["product-info"]}>
            <strong>Rate:</strong> ₹{finalPrice}
          </p> */}

          <p className={productdetailCSS["product-info"]}>
            <strong>MRP:</strong> ₹{selectedVariant?.mrp || 0}
          </p>

          {/* ✅ RATE */}
          <p className={productdetailCSS["product-info"]}>
            <strong>Rate:</strong> ₹{finalPrice}
          </p>

          {product.variants?.length > 0 && (
              <>
                <p className={productdetailCSS.label}>
                  Select {product.unit || selectedVariant?.unit || ""}
                </p>
                <div className={productdetailCSS.unitBox}>
                  {product.variants.map((v) => (
                    <button
                      key={`${v.size}-${v.batchNo}`}
                      className={`${productdetailCSS.unitBtn} ${
                        selectedVariant?.size === v.size &&
                        selectedVariant?.batchNo === v.batchNo
                          ? productdetailCSS.active
                          : ""
                      }`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v.size} {v.unit}
                    </button>
                  ))}
                </div>
              </>
            )}

          {/* <p className={productdetailCSS["product-info"]}>
              <strong>Batch No:</strong> {selectedVariant?.batchNo}
            </p> */}

            {/* <p className={productdetailCSS["product-info"]}>
              <strong>MFG Date:</strong> {selectedVariant?.mfgDate}
            </p> */}

            <p className={productdetailCSS["product-info"]}>
              <strong>Expiry Date:</strong> {selectedVariant?.expiryDate}
            </p>


            <p className={productdetailCSS["product-info"]} style={{ whiteSpace: "pre-line" }}>
              Description:
              <span className={productdetailCSS.description}>
                {" "}{product.description}
              </span>
            </p>

            

            {/* 🔹 QUANTITY */}
            {/* <p className={productdetailCSS.label}>Quantity</p>
            <div className={productdetailCSS.qtyBox}>
              <button onClick={decreaseQty}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div> */}
            {/* {message && (
              <p
                style={{
                  color: message.includes("Added") ? "green" : "red",
                  marginBottom: "10px",
                  fontWeight: "500"
                }}
              >
                {message}
              </p>
            )} */}

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
