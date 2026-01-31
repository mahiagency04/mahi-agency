const OrderSuccess = () => {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4);

  return (
    <>
      <h2>Order Placed Successfully 🎉</h2>
      <p>
        Expected Delivery Date:{" "}
        <b>{deliveryDate.toDateString()}</b>
      </p>
    </>
  );
};

export default OrderSuccess;
