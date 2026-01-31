import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import BASE_URL from "../config";

const getImageUrl = (img) => {
  if (!img) return "";

  // already full url
  if (img.startsWith("http")) return img;

  // remove starting slash if exists
  if (img.startsWith("/")) img = img.slice(1);

  return `${BASE_URL}/${img}`;
};

const MyOrders = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.fromOrderSuccess && location.state?.productId) {
            window.history.pushState(
                null,
                "",
                `/product/${location.state.productId}`
            );
        }
    }, []);

    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token");

    const slugify = (text) => {
        return text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
    };

    const fetchOrders = async () => {
        try {
            const res = await axios.get("http://192.168.29.234:4000/api/order/my-orders", {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.data.success) {
                setOrders(res.data.orders);
            }
        } catch (error) {
            alert(error.response?.data?.message || "Failed to fetch orders");
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [token]);

    const getDeliveryDate = (orderDate) => {
        const date = new Date(orderDate);
        date.setDate(date.getDate() + 4);
        return date.toDateString();
    };

    const cancelOrder = async (orderId) => {
        if (!window.confirm("Are you sure you want to cancel this order?")) return;

        try {
            const res = await axios.put(
                `http://192.168.29.234:4000/api/order/cancel-order/${orderId}`,
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (res.data.success) {
                alert(res.data.message);
                fetchOrders(); 
            } else {
                alert("Failed to cancel order");
            }
            console.log(products);
        } catch (error) {
            alert(error.response?.data?.message || "Failed to cancel order");
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "20px auto" }}>
            <h2>My Orders</h2>
            {orders.length === 0 ? (
                <p>No orders yet.</p>
            ) : (
                orders.map((order) => (
                    <div
                        key={order._id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "8px",
                            backgroundColor: order.orderStatus === "Cancelled" ? "#f8d7da" : "#fff",
                        }}
                    >
                        <p>
                            <b>Delivery Date:</b> {getDeliveryDate(order.createdAt)}
                        </p>
                        <p>
                            <b>Payment Method:</b> {order.paymentMethod}
                            {order.paymentMethod === "UPI" && ` (UPI ID: ${order.upiId})`}
                        </p>
                        <p>
                            <b>Status:</b>{" "}
                            <span style={{ color: order.orderStatus === "Cancelled" ? "red" : "green" }}>
                                {order.orderStatus}
                            </span>
                        </p>
                        <p>
                            <b>Total Amount:</b> ₹{order.grandTotal.toFixed(2)}
                        </p>

                        <p>
                            <b>Products:</b>
                        </p>
                        <ul>
                            {order.products.map((p, index) => (
                                <li
                                    onClick={() =>
                                        // navigate(`/product/${slugify(p.name)}`)
                                        navigate(`/product/${(p.productId)}`)
                                    }
                                    key={index}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginBottom: "10px",
                                        cursor: "pointer",
                                    }}
                                >
        
                                    <img
                                        // src={p.image}
                                        src={getImageUrl(p.image)}
                                        alt={p.name}
                                        width={60}
                                        style={{ objectFit: "cover", borderRadius: "6px" }}
                                    />
                                    <div>
                                        <b>{p.name}</b>
                                        <br />
                                        ₹{p.price} × {p.quantity} = ₹{p.total}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {order.orderStatus !== "Cancelled" && (
                            <button
                                onClick={() => cancelOrder(order._id)}
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    marginTop: "10px",
                                }}
                            >
                                Cancel Order
                            </button>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default MyOrders;