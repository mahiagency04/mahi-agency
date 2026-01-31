import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ordersummaryCSS from "./OrderSummary.module.css";
import BASE_URL from "../config";
BASE_URL


const OrderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const address = state?.address;

  // SINGLE PRODUCT
  const product = state?.product;

  //  CART PRODUCTS
  const cartItems = state?.cartItems || [];
  const cartTotal = state?.totalAmount || 0;

  /* SINGLE PRODUCT STATE */
  const [option, setOption] = useState("box");
  const [boxCount, setBoxCount] = useState(1);
  const [qty, setQty] = useState(1);

  /*  SINGLE PRODUCT CALC */
  let products = [];
  let subtotal = 0;

  if (product) {
    const price = product.price;
    const finalQty = option === "box" ? boxCount * 10 : qty;
    subtotal = price * finalQty;

    products = [
      {
        // productId: product._id,
        productId: product.productId,
        name: product.name,
        price: product.price,
        quantity: finalQty,
        total: subtotal,
        image: product.image,
      },
    ];
  }

  /*  CART CALC  */
  if (cartItems.length > 0) {
    products = cartItems.map((item) => ({
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
      image: item.image,
    }));

    subtotal = cartTotal;
  }

  /* TAX  */
  const cgst = subtotal * 0.09;
  const sgst = subtotal * 0.09;
  const igst = 0;

  const totalAmount = subtotal + cgst + sgst + igst;

  const orderData = {
    address,
    products,
    tax: { cgst, sgst, igst },
    grandTotal: totalAmount,
  };

  return (
    <div className={ordersummaryCSS.container}>
      <h2>Order Summary</h2>

      {/* SINGLE PRODUCT UI */}
      {product && (
        <div className={ordersummaryCSS.productBox}>
          {/* <img src={product.image}  */}
          <img src={`${BASE_URL}${product.image}`} 
          alt={product.name} />
          <p className={ordersummaryCSS.productName}>{product.name}</p>
          <p>₹{product.price}</p>

          <div className={ordersummaryCSS.optionsRow}>
            <label>Choose option:</label>
            <select value={option} onChange={(e) => setOption(e.target.value)}>
              <option value="box">Box (10 pcs per box)</option>
              <option value="qty">Qty</option>
            </select>

            {option === "box" && (
              <input
                type="number"
                min="1"
                value={boxCount}
                onChange={(e) => setBoxCount(Number(e.target.value))}
              />
            )}

            {option === "qty" && (
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
            )}
          </div>

          <p className={ordersummaryCSS.selectedQty}>
            Selected Quantity:{" "}
            <b>{option === "box" ? boxCount * 10 : qty}</b>
          </p>
        </div>
      )}

      {/* CART UI  */}
      {cartItems.length > 0 && (
        <div className={ordersummaryCSS.cartBox}>
          {cartItems.map((item, index) => (
            <div key={index} className={ordersummaryCSS.cartItem}>
              {/* <img src={item.image} */}
              <img src={`${BASE_URL}${item.image}`}
               alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/*  PRICE SUMMARY */}
      <div className={ordersummaryCSS.summaryBox}>
        <ul>
          <li>Subtotal: ₹{subtotal.toFixed(2)}</li>
          <li>CGST (9%): ₹{cgst.toFixed(2)}</li>
          <li>SGST (9%): ₹{sgst.toFixed(2)}</li>
          <li>IGST: ₹{igst.toFixed(2)}</li>
          <hr />
          <li>
            <b>Total Amount: ₹{totalAmount.toFixed(2)}</b>
          </li>
        </ul>
      </div>

      <button
        className={ordersummaryCSS.btn}
        onClick={() =>
          navigate("/payment", {
            replace: true,
            state: { orderData },
          })
        }
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default OrderSummary;


// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import ordersummaryCSS from "./OrderSummary.module.css";

// const OrderSummary = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const { product, address } = state;

//   const [option, setOption] = useState("box");
//   const [boxCount, setBoxCount] = useState(1);
//   const [qty, setQty] = useState(1);

//   const price = product.price;

//   const finalQty = option === "box" ? boxCount * 10 : qty;

//   const subtotal = price * finalQty;
//   const cgst = subtotal * 0.09;
//   const sgst = subtotal * 0.09;
//   const igst = 0;

//   const totalAmount = subtotal + cgst + sgst + igst;

//   const orderData = {
//     address,
//     products: [
//       {
//         productId: product._id,
//         name: product.name,
//         price: product.price,
//         quantity: finalQty,
//         total: subtotal,
//         image: product.image,
//       },
//     ],
//     tax: { cgst, sgst, igst },
//     grandTotal: totalAmount,
//   };

//   return (
//     <div className={ordersummaryCSS.container}>
//       <h2>Order Summary</h2>

//       <div className={ordersummaryCSS.productBox}>
//         <img src={product.image} alt={product.name} />
//         <p className={ordersummaryCSS.productName}>{product.name}</p>
//         <p>₹{price}</p>

//         <div className={ordersummaryCSS.optionsRow}>
//           <label>Choose option:</label>
//           <select value={option} onChange={(e) => setOption(e.target.value)}>
//             <option value="box">Box (10 pcs per box)</option>
//             <option value="qty">Qty</option>
//           </select>

//           {option === "box" && (
//             <input
//               type="number"
//               min="1"
//               value={boxCount}
//               onChange={(e) => setBoxCount(Number(e.target.value))}
//             />
//           )}

//           {option === "qty" && (
//             <input
//               type="number"
//               min="1"
//               value={qty}
//               onChange={(e) => setQty(Number(e.target.value))}
//             />
//           )}
//         </div>

//         <p className={ordersummaryCSS.selectedQty}>
//           Selected Quantity: <b>{finalQty}</b>
//         </p>
//       </div>

//       <div className={ordersummaryCSS.summaryBox}>
//         <ul>
//           <li>Price: ₹{subtotal}</li>
//           <li>CGST (9%): ₹{cgst.toFixed(2)}</li>
//           <li>SGST (9%): ₹{sgst.toFixed(2)}</li>
//           <li>IGST: ₹{igst}</li>
//           <hr />
//           <li>
//             <b>Total Amount: ₹{totalAmount.toFixed(2)}</b>
//           </li>
//         </ul>
//       </div>

//       {/* <button
//         className={ordersummaryCSS.btn}
//         onClick={() =>
//           navigate("/payment", { state: { orderData } })
//         }
//       >
//         Continue to Payment
//       </button> */}


//       <button
//         className={ordersummaryCSS.btn}
//         onClick={() =>
//           navigate("/payment", {
//             replace: true,   
//             state: { orderData }
//           })
//         }
//       >
//         Continue to Payment
//       </button>
//     </div>
//   );
// };

// export default OrderSummary;




// // import React, { useState } from "react";

// // const OrderSummary = ({ product, onNext }) => {
// //   const [qty, setQty] = useState(1);

// //   const price = product.price;
// //   const deliveryCharge = 40;

// //   const subtotal = price * qty;
// //   const cgst = subtotal * 0.09;
// //   const sgst = subtotal * 0.09;
// //   const igst = 0;

// //   const totalAmount =
// //     subtotal + cgst + sgst + igst + deliveryCharge;

// //   return (
// //     <>
// //       <div className="box-1">
// //         <img src={product.image} width="100" />
// //         <p>{product.name}</p>
// //         <p>₹{price}</p>

// //         <label>Quantity</label>
// //         <input
// //           type="number"
// //           min="1"
// //           value={qty}
// //           onChange={(e) => setQty(e.target.value)}
// //         />
// //       </div>

// //       <div className="box-2">
// //         <ul>
// //           <li>Price: ₹{subtotal}</li>
// //           <li>Delivery: ₹{deliveryCharge}</li>
// //           <li>CGST: ₹{cgst.toFixed(2)}</li>
// //           <li>SGST: ₹{sgst.toFixed(2)}</li>
// //           <li>IGST: ₹{igst}</li>
// //           <hr />
// //           <li>
// //             <b>Total: ₹{totalAmount.toFixed(2)}</b>
// //           </li>
// //         </ul>
// //       </div>

// //       <button
// //         className="btn"
// //         onClick={() =>
// //           onNext({
// //             qty,
// //             subtotal,
// //             cgst,
// //             sgst,
// //             igst,
// //             deliveryCharge,
// //             totalAmount
// //           })
// //         }
// //       >
// //         Continue to Payment
// //       </button>
// //     </>
// //   );
// // };

// // export default OrderSummary;



// // // import React from "react";

// // // const OrderSummary = () => {
// // //   return (
// // //     <>
// // //       <div className="box-1">
// // //         <img
// // //           src="/Images/SBherbals/Apple cider vinegar.webp"
// // //           alt="Product"
// // //           width="100px"
// // //         />
// // //         <p className="text-center my-2">Apple cider vinegar</p>
// // //         <p className="text-center my-2">&#8377;60</p>

// // //         <hr className="hr-1" />

// // //         <label htmlFor="delivery">Choose box or qty option</label>
// // //         <select id="delivery">
// // //           <option value="box">Box</option>
// // //           <option value="qty">Qty</option>
// // //         </select>

// // //         <input type="number" id="qty" placeholder="Qty" min="1" />
// // //       </div>

// // //       <br />

// // //       <div className="box-2">
// // //         <ul className="price-details">
// // //           <li>Price</li>
// // //           <li>Delivery Charge</li>
// // //           <li>CGST</li>
// // //           <li>SGST</li>
// // //           <li>IGST</li>

// // //           <hr className="hr-2" />

// // //           <li className="total-amount">Total Amount</li>
// // //         </ul>
// // //       </div>

// // //       <div className="buttons">
// // //         <a href="#">
// // //           <button className="btn">Order Now</button>
// // //         </a>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default OrderSummary;
