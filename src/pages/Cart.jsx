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

  const totalAmount = cart.reduce((total, item) => {
    const price = item.variant?.price || item.price || 0;
    // return total + item.price * item.quantity;
    return total + price * item.quantity;
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
        const price = variant.price || item.price || 0;

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

                {/* <p>₹{item.price}</p> */}
                <p>₹{price}</p>
                {/* <p>Qty: {item.quantity}</p> */}

                <p>
                  {/* Subtotal: ₹{(price * item.quantity).toFixed(2)} */}
                </p>
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
