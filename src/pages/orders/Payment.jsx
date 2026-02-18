import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Payment.module.css";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!state?.orderData) {
    navigate("/");
    return null;
  }

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [showQR, setShowQR] = useState(false);
  const [loading, setLoading] = useState(false);

  // const amount = state?.orderData?.totalAmount || 1;
  const amount = state?.orderData?.grandTotal || 0;

  const isMobile = window.innerWidth <= 768;

  // const upiUrl = `upi://pay?pa=9519197798@upi&pn=Mahi%20Agency&am=${amount}&cu=INR`;

  // const handleUPIPay = () => {
  //   setPaymentMethod("UPI");

  //   if (isMobile) {
  //     window.location.href = upiUrl;
  //   } else {
  //     setShowQR(true);
  //   }

  //   setTimeout(() => {
  //     placeOrder("UPI");
  //   }, 8000);
  // };

  const placeOrder = async (method = paymentMethod) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://192.168.29.234:4000/api/order/place-order",
        {
          ...state.orderData,
          paymentMethod: method,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data.success) {
        localStorage.removeItem("cart");

        navigate("/my-orders", {
          replace: true,
          state: { fromOrderSuccess: true },
        });
      }
    } catch (err) {
      alert("Order failed");
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Payment Options</h2>

      <div className={styles.option}>
        <input
          type="radio"
          checked={paymentMethod === "COD"}
          onChange={() => setPaymentMethod("COD")}
        />
        <span>Cash on Delivery</span>
      </div>

      {paymentMethod === "COD" && (
        <button
          className={styles.placeBtn}
          onClick={() => placeOrder("COD")}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      )}

      {/* <div className={styles.option}>
        <input
          type="radio"
          checked={paymentMethod === "UPI"}
          onChange={() => setPaymentMethod("UPI")}
        />
        <span>UPI (Google Pay / PhonePe)</span>
      </div>

      {paymentMethod === "UPI" && (
        <div className={styles.upiBox}>
          <button
            className={styles.upiBtn}
            onClick={handleUPIPay}
            disabled={loading}
          >
            Pay using Google Pay / PhonePe
          </button>

          {showQR && (
            <div className={styles.qrBox}>
              <p>Scan QR using any UPI App</p>

              <img src="/Images/qr/1000251871.png" alt="UPI QR Code" />

            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Payment;



// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import paymentCSS from "./Payment.module.css";

// const Payment = () => {
//     const { state } = useLocation();
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");

//     const [paymentMethod, setPaymentMethod] = useState("COD");
//     const [upiId, setUpiId] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [orderSuccess, setOrderSuccess] = useState(false);

//     const placeOrder = async () => {
//         if (paymentMethod === "UPI" && upiId.trim() === "") {
//             alert("Please enter your UPI ID");
//             return;
//         }

//         setLoading(true);

//         try {
//             const res = await axios.post(
//                 "http://192.168.29.234:4000/api/order/place-order",
//                 {
//                     ...state.orderData,
//                     paymentMethod,
//                     upiId: paymentMethod === "UPI" ? upiId : undefined,
//                 },
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );

//             //   if (res.data.success) {
//             //     localStorage.removeItem("cart");
//             //     localStorage.removeItem("checkoutStep");

//             //     setOrderSuccess(true);
//             //     setLoading(false);

//             //     setTimeout(() => {
//             //       navigate("/my-orders", { replace: true });
//             //     }, 1500);
//             //   } else {
//             //     alert("Order failed. Please try again.");
//             //     setLoading(false);
//             //   }

//             if (res.data.success) {
//                 localStorage.removeItem("cart");
//                 localStorage.removeItem("checkoutStep");

//                 setOrderSuccess(true);
//                 setLoading(false);

//                 setTimeout(() => {
//                     navigate("/my-orders", {
//                         replace: true,
//                         state: {
//                             fromOrderSuccess: true,
//                             productId: state?.orderData?.product?.productId
//                         }
//                     });
//                 }, 1200);
//             }

//         } catch (error) {
//             alert(error.response?.data?.message || "Order failed");
//             setLoading(false);
//         }
//     };

//     return (
//         <div className={paymentCSS.container}>
//             <h2>Payment</h2>

//             <div className={paymentCSS.paymentOptions}>
//                 <label>
//                     <input
//                         type="radio"
//                         name="payment"
//                         value="COD"
//                         checked={paymentMethod === "COD"}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         disabled={loading || orderSuccess}
//                     />{" "}
//                     Cash on Delivery (COD)
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="payment"
//                         value="UPI"
//                         checked={paymentMethod === "UPI"}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         disabled={loading || orderSuccess}
//                     />{" "}
//                     UPI
//                 </label>
//             </div>

//             {paymentMethod === "UPI" && (
//                 <div className={paymentCSS.upiInput}>
//                     <input
//                         type="text"
//                         placeholder="Enter your UPI ID"
//                         value={upiId}
//                         onChange={(e) => setUpiId(e.target.value)}
//                         disabled={loading || orderSuccess}
//                     />
//                 </div>
//             )}

//             {!orderSuccess && (
//                 <button
//                     className={paymentCSS.placeOrderBtn}
//                     onClick={placeOrder}
//                     disabled={loading}
//                 >
//                     {loading ? "Placing Order..." : "Place Order"}
//                 </button>
//             )}

//             {orderSuccess && (
//                 <div className={paymentCSS.successMessage}>
//                     🎉 Order placed successfully
//                     <br />
//                     Redirecting to orders...
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Payment;