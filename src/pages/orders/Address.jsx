import React, { useEffect, useState } from "react";
import addressCSS from "./Address.module.css";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  //  SINGLE PRODUCT CHECKOUT
  const product = location.state?.product;

  //  CART CHECKOUT
  const cartItems = location.state?.cartItems || [];
  const totalAmount = location.state?.totalAmount || 0;

  const [formData, setFormData] = useState({
    state: "",
    city: "",
    area: "",
    landmark: "",
    pincode: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await axios.get(
          "http://192.168.29.234:4000/api/user/addresses",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAddresses(res.data.addresses || []);
      } catch (error) {
        toast.error(error.response?.data?.message, {
          theme: "dark",
          transition: Bounce,
        });
      }
    };
    fetchAddresses();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (editingId) {
        res = await axios.put(
          `http://192.168.29.234:4000/api/user/addresses/${editingId}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setAddresses(
          addresses.map((addr) =>
            addr._id === editingId ? res.data.updatedAddress : addr
          )
        );
      } else {
        res = await axios.post(
          "http://192.168.29.234:4000/api/user/addresses",
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAddresses(res.data.addresses);
      }

      toast.success(res.data.message, {
        theme: "dark",
        transition: Bounce,
      });

      setFormData({
        state: "",
        city: "",
        area: "",
        landmark: "",
        pincode: "",
      });

      setShowForm(false);
      setEditingId(null);
    } catch (error) {
      toast.error(error.response?.data?.message, {
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://192.168.29.234:4000/api/user/addresses/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(res.data.message, { theme: "dark", transition: Bounce });
      setAddresses(addresses.filter((addr) => addr._id !== id));
    } catch (error) {
      toast.error(error.response?.data?.message, {
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleEdit = (addr) => {
    setEditingId(addr._id);
    setFormData({
      state: addr.state,
      city: addr.city,
      area: addr.area,
      landmark: addr.landmark,
      pincode: addr.pincode || "",
    });
    setShowForm(true);
  };

  return (
    <div className={addressCSS.container}>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        theme="dark"
        transition={Bounce}
      />

      {addresses.map((addr) => (
        <div key={addr._id} className={addressCSS.card}>
          <h4>Delivery Address</h4>
          {/* <p>{addr.area}, {addr.city}</p>
          <p>{addr.state} - {addr.pincode}</p>
          {addr.landmark && <p>Landmark: {addr.landmark}</p>} */}
          
          <p>{addr.state}, {addr.city}</p>
          <p>{addr.area} - {addr.landmark && <p>Landmark: {addr.landmark}</p>}
          {addr.pincode}</p>

          {/*  DELIVER BUTTON (AUTO HANDLES CART / SINGLE PRODUCT) */}
          <button
            className={addressCSS.btn}
            onClick={() =>
              navigate("/order-summary", {
                replace: true,
                state: {
                  address: addr,
                  product: product || null,
                  cartItems: cartItems.length ? cartItems : null,
                  totalAmount: totalAmount || null,
                },
              })
            }
          >
            Deliver Here
          </button>

          <div className={addressCSS.cardButtons}>
            <button
              className={addressCSS.editBtn}
              onClick={() => handleEdit(addr)}
            >
              Edit
            </button>
            <button
              className={addressCSS.deleteBtn}
              onClick={() => handleDelete(addr._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {showForm && (
        <div className={addressCSS.box}>
          <h3>{editingId ? "Edit Address" : "Add Address"}</h3>

          <form onSubmit={handleSubmit}>
            <input className={addressCSS.input} name="state" value={formData.state} onChange={handleChange} placeholder="State" />
            <input className={addressCSS.input} name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            <input className={addressCSS.input} name="area" value={formData.area} onChange={handleChange} placeholder="Area" />
            <input className={addressCSS.input} name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark" />
            <input className={addressCSS.input} name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" />
            <div className={addressCSS.formButtons}>
              <button type="submit" className={addressCSS.btn}>Save Address</button>
              <button
                type="button"
                className={addressCSS.cancelBtn}
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {!showForm && (
        <div className={addressCSS.addButtonContainer}>
          <button
            className={addressCSS.addButton}
            onClick={() => setShowForm(true)}
          >
            + Add Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;


// import React, { useEffect, useState } from "react";
// import addressCSS from "./Address.module.css";
// import axios from "axios";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useLocation, useNavigate } from "react-router-dom";

// const Address = () => {
//   const [addresses, setAddresses] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCheckout = location.state?.fromCheckout === true;
//   const product = location.state?.product;

//   const [formData, setFormData] = useState({
//     pincode: "",
//     state: "",
//     city: "",
//     area: "",
//     landmark: "",
//   });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchAddresses = async () => {
//       try {
//         const res = await axios.get(
//           "http://192.168.29.234:4000/api/user/addresses",
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAddresses(res.data.addresses || []);
//       } catch (error) {
//         toast.error(error.response?.data?.message, {
//           theme: "dark",
//           transition: Bounce,
//         });
//       }
//     };
//     fetchAddresses();
//   }, [token]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let res;

//       if (editingId) {
//         res = await axios.put(
//           `http://192.168.29.234:4000/api/user/addresses/${editingId}`,
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         setAddresses(
//           addresses.map((addr) =>
//             addr._id === editingId ? res.data.updatedAddress : addr
//           )
//         );
//       } else {
//         res = await axios.post(
//           "http://192.168.29.234:4000/api/user/addresses",
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAddresses(res.data.addresses);
//       }

//       toast.success(res.data.message, {
//         theme: "dark",
//         transition: Bounce,
//       });

//       setFormData({ pincode: "", state: "", city: "", area: "", landmark: "" });
//       setShowForm(false);
//       setEditingId(null);
//     } catch (error) {
//       toast.error(error.response?.data?.message, {
//         theme: "dark",
//         transition: Bounce,
//       });
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await axios.delete(
//         `http://192.168.29.234:4000/api/user/addresses/${id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       toast.success(res.data.message, { theme: "dark", transition: Bounce });
//       setAddresses(addresses.filter((addr) => addr._id !== id));
//     } catch (error) {
//       toast.error(error.response?.data?.message, {
//         theme: "dark",
//         transition: Bounce,
//       });
//     }
//   };

//   const handleEdit = (addr) => {
//     setEditingId(addr._id);
//     setFormData({
//       pincode: addr.pincode,
//       state: addr.state,
//       city: addr.city,
//       area: addr.area,
//       landmark: addr.landmark || "",
//     });
//     setShowForm(true);
//   };

//   return (
//     <div className={addressCSS.container}>
//       <ToastContainer
//         position="top-center"
//         autoClose={1500}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         transition={Bounce}
//       />

//       {addresses.map((addr) => (
//         <div key={addr._id} className={addressCSS.card}>
//           <h4>Delivery Address</h4>
//           <p>
//             {addr.area}, {addr.city}
//           </p>
//           <p>
//             {addr.state} - {addr.pincode}
//           </p>
//           {addr.landmark && <p>Landmark: {addr.landmark}</p>}

//           {isCheckout && (
//             // <button
//             //   className={addressCSS.btn}
//             //   onClick={() =>
//             //     navigate("/order-summary", {
//             //       state: { product, address: addr },
//             //     })
//             //   }
//             // >
//             //   Deliver Here
//             // </button>

//             <button
//               className={addressCSS.btn}
//               onClick={() =>
//                 navigate("/order-summary", {
//                   replace: true,        
//                   state: { product, address: addr },
//                 })
//               }
//             >
//               Deliver Here
//             </button>
//           )}

//           <div className={addressCSS.cardButtons}>
//             <button className={addressCSS.editBtn} onClick={() => handleEdit(addr)}>
//               Edit
//             </button>
//             <button
//               className={addressCSS.deleteBtn}
//               onClick={() => handleDelete(addr._id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}

//       {showForm && (
//         <div className={addressCSS.box}>
//           <h3>{editingId ? "Edit Address" : "Add Address"}</h3>

//           <form onSubmit={handleSubmit}>
//             <input
//               className={addressCSS.input}
//               name="pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//               placeholder="Pincode"
//             />
//             <input
//               className={addressCSS.input}
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               placeholder="State"
//             />
//             <input
//               className={addressCSS.input}
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               placeholder="City"
//             />
//             <input
//               className={addressCSS.input}
//               name="area"
//               value={formData.area}
//               onChange={handleChange}
//               placeholder="Area"
//             />
//             <input
//               className={addressCSS.input}
//               name="landmark"
//               value={formData.landmark}
//               onChange={handleChange}
//               placeholder="Landmark"
//             />

//             <div className={addressCSS.formButtons}>
//               <button type="submit" className={addressCSS.btn}>
//                 Save Address
//               </button>

//               <button
//                 type="button"
//                 className={addressCSS.cancelBtn}
//                 onClick={() => {
//                   setShowForm(false);
//                   setEditingId(null);
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {!showForm && (
//         <div className={addressCSS.addButtonContainer}>
//           <button
//             className={addressCSS.addButton}
//             onClick={() => setShowForm(true)}
//           >
//             + Add Address
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Address;
