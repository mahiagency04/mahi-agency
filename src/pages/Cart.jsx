import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import BASE_URL from "./config";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // const formatDate = (dateString) => {
  //   if (!dateString) return "-";
  //   const date = new Date(dateString);
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };

  const formatExpiryDate = (dateString) => {
    if (!dateString || dateString === "-") return "-";

    try {
      // Agar already MM/YY format mein hai (jaise "5/28"), to waise hi return karo
      if (typeof dateString === 'string' && /^\d{1,2}\/\d{2}$/.test(dateString)) {
        return dateString;
      }

      // ISO date se month aur year nikalo
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "-";

      const month = date.getMonth() + 1; // 0-11 -> 1-12
      const year = date.getFullYear().toString().slice(-2); // 2001 -> 01, 2028 -> 28

      return `${month}/${year}`;
    } catch (error) {
      return "-";
    }
  };

  //  Special function for expiry display
  const getExpiryDisplay = (expiryDate) => {
    if (!expiryDate || expiryDate === "-") return "-";

    // Agar "5/28" format mein hai to seedha return karo
    if (typeof expiryDate === 'string' && /^\d{1,2}\/\d{2}$/.test(expiryDate)) {
      return expiryDate;
    }

    // Agar ISO date hai to month/year nikalo
    try {
      const date = new Date(expiryDate);
      if (isNaN(date.getTime())) return "-";

      const month = date.getMonth() + 1;
      const year = date.getFullYear().toString().slice(-2);

      return `${month}/${year}`;
    } catch {
      return "-";
    }
  };

  const totalAmount = cart.reduce((total, item) => {
    // const price = item.variant?.price || item.price || 0;
    // return total + item.price * item.quantity;
    const variant = item.variant || {};
    // return total + price * item.quantity;
    const mrp =
      item.mrp ||
      variant.mrp ||
      item.price ||
      variant.price ||
      0;

    // const rate =
    //   variant.rate ||
    //   0;
    const rate = mrp - mrp * 0.2;

    return total + rate * item.quantity;
  }, 0);

  const handleBuyNow = () => {
    navigate("/address", {
      state: {
        cartItems: cart,
        totalAmount: totalAmount
      }
    });
  };

  if (cart.length === 0) {
    return <h2 className={styles.empty}>Your cart is empty</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Cart</h2>

      {cart.map((item, index) => {
        const variant = item.variant || {};
        // const price = variant.price || item.price || 0;
        // const mrp =
        //   item.mrp ||
        //   variant.mrp ||
        //   item.price ||
        //   variant.price ||
        //   0;

        const mrp =
          variant.mrp ||
          0;

        const rate = mrp - mrp * 0.2;

        // const rate =
        //   variant.rate ||
        //   0;

        const expiryDate = variant.expiryDate || "-";
        const displayExpiry = getExpiryDisplay(expiryDate);

        return (
          <div key={index} className={styles.cartItem}>

            <div
              className={styles.productInfo}
              onClick={() => navigate(`/product/${item.productId}`)}
            >
              <img
                // src={item.image}
                src={`${BASE_URL}${item.image}`}
                alt={item.name}
                className={styles.productImage}
              />

              <div className={styles.productText}>
                <h4>{item.name}</h4>
                {variant.size && (
                  <p>
                    Variant: {variant.size}{variant.unit}
                  </p>
                )}

                <p>
                  <strong>Expiry Date:</strong> {displayExpiry}
                </p>

                {/* <p>
                  Batch No: {variant.batchNo || "-"}
                </p> */}

                {/* <p>
                  MFG Date: {formatDate(variant.mfgDate)}
                </p> */}

                <p>
                  MRP: ₹{mrp.toFixed(2)}
                </p>

                <p>
                  Rate: ₹{rate.toFixed(2)}
                </p>

                {/* <p>₹{item.price}</p> */}
                {/* <p>₹{price}</p> */}
                {/* <p>Qty: {item.quantity}</p> */}

                {/* <p> */}
                {/* Subtotal: ₹{(price * item.quantity).toFixed(2)} */}
                {/* </p> */}
              </div>
            </div>

            <button
              className={styles.removeBtn}
              onClick={(e) => {
                e.stopPropagation();
                removeFromCart(item.productId);
              }}
            >
              Remove
            </button>
          </div>
        )
      })}

      <div className={styles.buySection}>

        <div className={styles.totalSection}>
          {/* <h3>Total Amount: ₹{totalAmount}</h3> */}
          {/* <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3> */}
        </div>

        <button
          className={styles.buyBtn}
          onClick={handleBuyNow}
        >
          Order All Items
        </button>
      </div>

    </div>
  );
}

export default Cart;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./Cart.module.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(savedCart);
//   }, []);

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter(item => item.productId !== productId);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const handleBuyNow = () => {
//     navigate("/address", {
//       state: {
//         cartItems: cart
//       }
//     });
//   };

//   if (cart.length === 0) {
//     return <h2 className={styles.empty}>Your cart is empty</h2>;
//   }

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Cart</h2>

//       {cart.map((item, index) => (
//         <div key={index} className={styles.cartItem}>

//           <div
//             className={styles.productInfo}
//             onClick={() => navigate(`/product/${item.productId}`)}
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className={styles.productImage}
//             />

//             <div className={styles.productText}>
//               <h4>{item.name}</h4>
//               <p>₹{item.price}</p>
//               <p>Qty: {item.quantity}</p>
//             </div>
//           </div>

//           <button
//             className={styles.removeBtn}
//             onClick={(e) => {
//               e.stopPropagation();
//               removeFromCart(item.productId);
//             }}
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       <div className={styles.buySection}>
//         <button
//           className={styles.buyBtn}
//           onClick={handleBuyNow}
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
