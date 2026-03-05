import React, { useEffect, useState } from 'react'
import home from "./Home.module.css"
import { Link, useLocation } from "react-router-dom";
import BASE_URL from './config';
import products from "../data/products";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromAuth) return;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // ✅ 20% discount calculate function
  const getRate = (mrp) => {
    return Math.round(mrp - mrp * 0.2);
  };

  const text = "Medical Agency.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <main className={home.main}>
      <div className={home.container}>
        <h1 className={home.h1}>Mahi Agency</h1>
        <p className={home.textanimation}>GSTIN: 09DIDPM4340H1Z9</p>
        <p className={home.textanimation}>{displayText || "Medical Agency."}</p>

        <hr style={{ border: "0", height: "2px", background: "black", opacity: 1 }} />

        <div className={home.card}>
          <h2 className={home.my1}>Sb herbals's product</h2>

          <div className={home.cards}>

            {products.slice(0, 10)
              .map((product) => {

                const mrp = product.variants?.[0]?.mrp || 0;
                const rate = Math.round(mrp - mrp * 0.2);
                const variant = product.variants?.[0] || {};
                // const mrp = Number(variant.mrp) || 0;
                // const rate = Number(variant.rate) || mrp;

                return (
                  <div
                    key={product.productId}
                    className={home.cardItems}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                      borderBottom: "1px solid #ddd",
                      paddingBottom: "10px"
                    }}
                  >
                    <Link
                      to={`/product/${product.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%"
                      }}
                    >
                      <img
                        src={`${BASE_URL}${product.image}`}
                        alt={product.name}
                        style={{ width: "90px", marginRight: "15px" }}
                      />

                      <div>
                        <p className={`${home.my2}`} style={{ fontWeight: "bold" }}>
                          {product.name}
                        </p>

                        <p className={home.my2}>
                          MRP: ₹{mrp}
                        </p>

                        <p className={home.my2}>
                          Rate: ₹{rate}
                        </p>
                      </div>

                    </Link>
                  </div>
                );
              })}

          </div>

          <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>
            <Link to="/sbherbals-product">
              View all Sb herbals's product →
            </Link>
          </div>
        </div>

        <div className={home.flexAllCentre}>
          <p>mahiagency.in</p>
          <p>Email: mahiagency04@gmail.com</p>
          <p>Mobile NO.: 9519197798</p>
        </div>

      </div>
    </main>
  )
}

export default Home;