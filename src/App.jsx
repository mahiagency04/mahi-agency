// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "./pages/Home.jsx";
// import Login from "./pages/Login.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import Cart from "./pages/Cart.jsx";
// import Contact from "./pages/Contact.jsx";
// import Dealership from "./pages/Dealership.jsx";
// import Franchise from "./pages/Franchise.jsx";
// import Profile from "./pages/Profile.jsx";
// import Navbar from "./components/navbar.jsx";
// import ResetPassword from "./pages/ResetPassword.jsx";
// import Address from "./pages/orders/Address.jsx";
// import EditDetails from "./pages/EditDetails.jsx";
// import ChangePassword from "./pages/ChangePassword";
// import BottomNav from "./components/BottomNav.jsx";
// import ProductDetail from "./pages/ProductDetail";
// import OrderSummary from "./pages/orders/OrderSummary.jsx";
// import Payment from "./pages/orders/Payment.jsx";
// import OrderSuccess from "./pages/orders/OrderSuccess.jsx";
// import MyOrders from "./pages/orders/MyOrders.jsx";
// import SearchResult from "./pages/SearchResult.jsx";
// import ProtectedRoute from "./routes/ProtectedRoute";

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<> <Home /> <Navbar /> <BottomNav /> </>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         {/* <Route path="/profile" element={<Profile />} /> */}
//         <Route path="/cart" element={<> <Cart /> <BottomNav /> </>} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/dealership" element={<Dealership />} />
//         <Route path="/franchise" element={<Franchise />} />
//         {/* <Route path="/reset-password/:id/:token" element={<ResetPassword />} /> */}
//         {/* <Route path="/address" element={<Address />} /> */}
//         {/* <Route path="/edit-details" element={<EditDetails />} /> */}
//         {/* <Route path="/changepassword" element={<ChangePassword />} /> */}
//         <Route path="/product/:id" element={<ProductDetail />} />

//         {/* <Route path="/order-summary" element={<OrderSummary />} /> */}
//         {/* <Route path="/payment" element={<Payment />} /> */}
//         {/* <Route path="/order-success" element={<OrderSuccess />} /> */}
//         <Route path="/my-orders" element={<> <MyOrders /> <BottomNav /> </>} />
//         <Route path="/search" element={<SearchResult />} />

//         <Route element={<ProtectedRoute />}>
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
//         <Route path="/address" element={<Address />} />
//         <Route path="/edit-details" element={<EditDetails />} />
//         <Route path="/changepassword" element={<ChangePassword />} />
//         <Route path="/order-summary" element={<OrderSummary />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/order-success" element={<OrderSuccess />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App

import ComingSoon from "./pages/ComingSoon";

function App() {
  return <ComingSoon />;
}

export default App;
