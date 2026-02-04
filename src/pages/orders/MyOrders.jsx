import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import BASE_URL from "../config";
import styles from "./MyOrders.module.css";

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

        } catch (error) {
            alert(error.response?.data?.message || "Failed to cancel order");
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>My Orders</h2>
            {orders.length === 0 ? (
                <p className={styles.noOrders}>No orders yet.</p>
            ) : (
                orders.map((order) => (
                    <div
                        key={order._id}
                        className={
                            `${styles.orderCard} ` +
                            (order.orderStatus === "Cancelled" ? styles.orderCardCancelled : "")
                        }
                    >
                        <p className={styles.orderDetail}>
                            <b>Delivery Date:</b> {getDeliveryDate(order.createdAt)}
                        </p>
                        <p className={styles.orderDetail}>
                            <b>Payment Method:</b> {order.paymentMethod}
                            {order.paymentMethod === "UPI" && ` (UPI ID: ${order.upiId})`}
                        </p>
                        <p className={styles.orderDetail}>
                            <b>Status:</b>{" "}
                            <span className={`${styles.status} ${order.orderStatus === "Cancelled" ? styles.statusCancelled : styles.statusActive
                                }`}
                            >
                                {order.orderStatus}
                            </span>
                        </p>
                        <p className={styles.orderDetail}>
                            <b>Total Amount:</b> ₹{order.grandTotal.toFixed(2)}
                        </p>

                        <p className={styles.orderDetail}>
                            <b>Products:</b>
                        </p>
                        <ul className={styles.productList}>
                            {order.products.map((product, index) => {
                                const variant = product.variant || {};
                                const price = product.price || variant.price || 0;
                                return (
                                    <li
                                        onClick={() =>
                                            // navigate(`/product/${slugify(p.name)}`)
                                            navigate(`/product/${(product.productId)}`)
                                        }
                                        key={index}
                                        className={styles.productItem}
                                    >

                                        <img
                                            // src={p.image}
                                            src={getImageUrl(product.image)}
                                            alt={product.name}
                                            // width={60}
                                            className={styles.productImage}
                                        />
                                        <div className={styles.productInfo}>
                                            <b>{product.name}</b>
                                            {/* <br /> */}
                                            {/* ₹{p.price} × {p.quantity} = ₹{p.total} */}
                                            {variant.size && (
                                                <>
                                                    <br />
                                                    Variant: {variant.size}{variant.unit}
                                                </>
                                            )}
                                            {/* ✅ Total calculation fallback if backend doesn't save total */}
                                            {/* ₹{product.price || 0} × {product.quantity} = ₹{product.total || (product.price || 0) * product.quantity} */}
                                            <br />
                                            ₹{price} × {product.quantity} Qty = ₹
                                            {(price * product.quantity).toFixed(2)}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {order.orderStatus !== "Cancelled" && (
                            <button
                                onClick={() => cancelOrder(order._id)}
                                className={styles.cancelButton}
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