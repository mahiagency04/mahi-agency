import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ordersummaryCSS from "./OrderSummary.module.css";
import BASE_URL from "../config";

const DISCOUNT_PERCENT = 20;

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
  const initialQty = product?.quantity || 1;

  // const [option, setOption] = useState("box");
  // const [boxCount, setBoxCount] = useState(1);
  // const [qty, setQty] = useState(1);

  // const [option, setOption] = useState("box"); future enable
  // const [boxCount, setBoxCount] = useState(Math.ceil(initialQty / 10)); future enable
  const [qty, setQty] = useState(initialQty);

  // CART STATE (IMPORTANT PART)
  const [cartQty, setCartQty] = useState(
    cartItems.map((item) => ({
      productId: item.productId,
      // option: "qty", future enable
      // qty: item.quantity,   future enable
      // boxCount: Math.ceil(item.quantity / 10),   future enable
      qty: 1,
      // boxCount: 1,   future enable
    }))
  );

  const getDiscountedPrice = (price) => {
    return price - (price * DISCOUNT_PERCENT) / 100;
  };


  /*  SINGLE PRODUCT CALC */
  let products = [];
  let subtotal = 0;

  if (product) {
    // const price = product.price;
    //  const productsFromProduct = product ? (() => {
    // const variant = product.variant || { size: "", unit: "", price: product.price || 0 };
    // const variant = product.variant;
    // const variant = product.variant || { size: "", unit: "", price: 0 };
    const variant = product.variant || {};
    const originalPrice = variant.price ?? product.price ?? 0;
    const discountedPrice = getDiscountedPrice(originalPrice);
    // const finalQty = option === "box" ? boxCount * 10 : qty; future enable
    const finalQty = qty;
    // const finalQty = product.quantity || (option === "box" ? boxCount * 10 : qty);
    // const price = variant.price;
    // const price = variant.price || 0;
    // const price = variant.price || product.price || 0;
    const price = variant.price ?? product.price ?? 0;
    // subtotal = price * finalQty;
     subtotal = discountedPrice * finalQty;

    products = [
      {
        // productId: product._id,
        productId: product.productId,
        name: product.name,
        // variant: {
        //   size: product.variant.size,
        //   unit: product.variant.unit,
        //   price: product.variant.price
        // },
        // variant: variant,
        // price: variant.price,
        variant,
        // price,
        price: discountedPrice,
        // price: product.price,
        quantity: finalQty,
        // quantity: product.quantity || 1, 
        total: subtotal,
        // total: product.totalPrice || product.price,
        image: product.image,
        // size: product.size || "",
        // unit: product.unit || "", 
      },
    ];
    // subtotal = products[0].total;
  }

  /*  CART CALC  */
  if (cartItems.length > 0) {
    products = cartItems.map((item) => {
      // const stateItem = cartQty.find(q => q.productId === item.productId);
       const stateItem = cartQty.find(
        (q) => q.productId === item.productId
      );
      const variant = item.variant || {};
      const originalPrice = variant.price ?? item.price ?? 0;
      const discountedPrice = getDiscountedPrice(originalPrice);
      // const variant = item.variant || { size: "", unit: "", price: 0 };
      // const price = variant.price || item.price || 0;

      // const finalQty = future enable
      //   stateItem.option === "box"
      //     ? stateItem.boxCount * 10
      //     : stateItem.qty;

      const finalQty = stateItem.qty;

      //   return {
      //     productId: item.productId,
      //     name: item.name,
      //     // variant: variant,
      //     // price: variant.price,
      //     variant,
      //     price,
      //     // price: item.price,
      //     quantity: item.quantity,
      //     // total: item.price * item.quantity,
      //     // total: item.totalPrice || item.price * item.quantity,
      //     // total: variant.price * item.quantity,
      //     total: price * item.quantity,
      //     image: item.image,
      //     // size: item.size || "",
      //     // unit: item.unit || "",
      //   }
      // })


      // subtotal = cartTotal;
      // subtotal = cartTotal || products.reduce((sum, item) => sum + item.total, 0);
      return {
        ...item,
        // price,
        price: discountedPrice,
        quantity: finalQty,
        // total: price * finalQty
         total: discountedPrice * finalQty,
      };
    });
    subtotal = products.reduce((sum, item) => sum + item.total, 0);
  }

  /* TAX  */
  // const cgst = subtotal * 0.09;
  // const sgst = subtotal * 0.09;
  // const igst = 0;

  // const totalAmount = subtotal + cgst + sgst + igst;

  const totalAmount = subtotal;
  
  const orderData = {
    address,
    products,
    // tax: { cgst, sgst, igst },
    grandTotal: totalAmount,
  };

  const handlePayment = () => {
    localStorage.setItem("orderData", JSON.stringify(orderData));
    navigate("/payment");
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
          <div className={ordersummaryCSS.productInfo}>
            <p className={ordersummaryCSS.productName}>{product.name}</p>
             {(() => {
              const original =
                product.variant?.price ?? product.price ?? 0;
              const discounted = getDiscountedPrice(original);

              return (
                <>
                  <p>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "8px",
                        color: "gray",
                      }}
                    >
                      ₹{original.toFixed(2)}
                    </span>
                    <span
                      style={{
                        color: "green",
                        fontWeight: "bold",
                      }}
                    >
                      ₹{discounted.toFixed(2)}
                    </span>
                    <span style={{ color: "red", marginLeft: "8px" }}>
                      {DISCOUNT_PERCENT}% OFF
                    </span>
                  </p>
                </>
              );
            })()}
            {/* <p>₹{product.price.toFixed(2)}</p> */}
            {/* <p>₹{(product.variant?.price || 0).toFixed(2)}</p> */}
            <p>₹{(product.variant?.price || product.price || 0).toFixed(2)}</p>

            {/* {product.size && product.unit && ( */}
            {/* {product?.variant && ( */}
            {product?.variant?.size && (
              <p className={ordersummaryCSS.selectedVariant}>
                Variant:{" "}
                {/* Selected Variant: <b>{product.size} {product.unit}</b> */}
                <b>
                  {product.variant.size}
                  {product.variant.unit ? `${product.variant.unit}` : ""}
                </b>
              </p>
            )}

          </div>
          <div className={ordersummaryCSS.optionsRow}>
            {/* <label>Choose option:</label> future enable
            <select value={option} onChange={(e) => setOption(e.target.value)}>
              <option value="box">Box (10 pcs per box)</option>
              <option value="qty">Qty</option>
            </select> */}

            {/* {option === "box" && (       future enable
              <input
                type="number"
                min="1"
                value={boxCount}
                onChange={(e) => setBoxCount(Number(e.target.value))}
              />
            )} */}

            {/* {option === "qty" && (   future enable */}
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </div>

          <p className={ordersummaryCSS.selectedQty}>
            Selected Quantity:{" "}
            {/* <b>{option === "box" ? boxCount * 10 : qty}</b>   future enable*/}
            <b>{qty}</b>
          </p>
        </div>
      )}

      {/* CART UI  */}
      {cartItems.length > 0 && (
        <div className={ordersummaryCSS.cartBox}>
          {cartItems.map((item, index) => {
            const stateItem = cartQty.find(q => q.productId === item.productId);
            const variant = item?.variant || { size: "", unit: "", price: 0 };
            // const finalQty = future enable
            //   stateItem.option === "box"
            //     ? stateItem.boxCount * 10
            //     : stateItem.qty;

            const finalQty = stateItem.qty;
            return (
              <div key={index} className={ordersummaryCSS.cartItem}>
                {/* <img src={item.image} */}
                <img src={`${BASE_URL}${item.image}`}
                  alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  {/* <p>₹{item.price}</p> */}
                  {item.variant?.size && (
                    <p>
                      Variant: {item.variant?.size} {item.variant?.unit}
                    </p>
                  )}
                  {/* <p>Qty: {item.quantity}</p> */}
                  <p>Price: ₹{variant.price}</p>

                  <div className={ordersummaryCSS.optionsRow}>
                    {/* <select future enable
                value={stateItem.option}
                onChange={(e) =>
                  setCartQty((prev) =>
                    prev.map((q) =>
                      q.productId === item.productId
                        ? { ...q, option: e.target.value }
                        : q
                    )
                  )
                }
              > */}
                    <select value="qty" disabled>
                      {/* <option value="box">Box (10 pcs)</option>  future enable*/}
                      <option value="qty">Qty</option>
                    </select>

                    {/* 🔽 SAME AS SINGLE PRODUCT (+ −) */}
                    <div className={ordersummaryCSS.qtyControl}>
                      <button
                        // onClick={() => future enable
                        //   setCartQty((prev) =>
                        //     prev.map((q) =>
                        //       q.productId === item.productId
                        //         ? {
                        //             ...q,
                        //             [stateItem.option === "box"
                        //               ? "boxCount"
                        //               : "qty"]: Math.max(
                        //               1,
                        //               (stateItem.option === "box"
                        //                 ? stateItem.boxCount
                        //                 : stateItem.qty) - 1
                        //             ),
                        //           }
                        //         : q
                        //     )
                        //   )
                        // }
                        onClick={() =>
                          setCartQty((prev) =>
                            prev.map((q) =>
                              q.productId === item.productId
                                ? { ...q, qty: Math.max(1, q.qty - 1) }
                                : q
                            )
                          )
                        }
                      >
                        −
                      </button>

                      <input
                        type="number"
                        min="1"
                        value={
                          stateItem.option === "box"
                            ? stateItem.boxCount
                            : stateItem.qty
                        }
                        // onChange={(e) => future
                        //   setCartQty((prev) =>
                        //     prev.map((q) =>
                        //       q.productId === item.productId
                        //         ? {
                        //           ...q,
                        //           [stateItem.option === "box"
                        //             ? "boxCount"
                        //             : "qty"]: Number(e.target.value),
                        //         }
                        //         : q
                        //     )
                        //   )
                        // }
                        onChange={(e) =>
                          setCartQty((prev) =>
                            prev.map((q) =>
                              q.productId === item.productId
                                ? { ...q, qty: Number(e.target.value) }
                                : q
                            )
                          )
                        }
                      />

                      <button
                        // onClick={() => future
                        //   setCartQty((prev) =>
                        //     prev.map((q) =>
                        //       q.productId === item.productId
                        //         ? {
                        //           ...q,
                        //           [stateItem.option === "box"
                        //             ? "boxCount"
                        //             : "qty"]:
                        //             (stateItem.option === "box"
                        //               ? stateItem.boxCount
                        //               : stateItem.qty) + 1,
                        //         }
                        //         : q
                        //     )
                        //   )
                        // }
                        onClick={() =>
                          setCartQty((prev) =>
                            prev.map((q) =>
                              q.productId === item.productId
                                ? { ...q, qty: q.qty + 1 }
                                : q
                            )
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <p>Selected Qty: {finalQty}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/*  PRICE SUMMARY */}
      <div className={ordersummaryCSS.summaryBox}>
        <ul>
          <li>Subtotal: ₹{subtotal.toFixed(2)}</li>
          {/* <li>CGST (9%): ₹{cgst.toFixed(2)}</li>
          <li>SGST (9%): ₹{sgst.toFixed(2)}</li>
          <li>IGST: ₹{igst.toFixed(2)}</li> */}
          <hr />
          <li>
            <b>Total Amount: ₹{totalAmount.toFixed(2)}</b>
            {/* <b>Total Amount: ₹{subtotal.toFixed(2)}</b> */}
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
