import React, { useEffect, useState } from 'react'
import home from "./Home.module.css"
import { Link } from "react-router-dom";
import BASE_URL from './config';
import { useLocation } from "react-router-dom";



const Home = () => {

  const location = useLocation();

  useEffect(() => {
  if (location.state?.fromAuth) {
    // login / signup ke baad home aaye to top na jaye
    return;
  }

  window.scrollTo(0, 0);
}, [location.pathname]);
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
        <p className={home.textanimation}>GSTIN: 0000000000</p>
        <p className={home.textanimation}>{displayText || "Medical Agency."}</p>
        <hr style={{ border: "0", height: "2px", background: "black", boxShadow: "none", opacity: 1 }} />

        {/* <!-- SBherbals products --> */}
        <div className={home.card}>
          <h2 className={home.my1}>Sb herbals's product</h2>
          <div className={home.cards}>
            {/* <!-- 1 --> */}
            <div className={home.cardItems}>

              <Link
                to="/product/apple-cider-vinegar"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/Apple cider vinegar.webp" alt="" style={{ width: "110px" }} /> */}
                {/* <img src={`http://192.168.29.234:4000/uploads/products/sbherbals/Apple cider vinegar.webp`} alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Apple cider vinegar.webp`} alt="" style={{ width: "110px" }} />

                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Apple cider vinegar</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>

                </div>
              </Link>
            </div>

            {/* <!-- 2     --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/cyst-yog"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/CYST_YOG-600x600-2.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/CYST_YOG-600x600-2.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Cyst-yog</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            {/* <!-- 3 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/dentoact"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/dentoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/dentoAct.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>dentoAct</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            {/* <!-- 4 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/EZYDAY-PD"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/EZYDAY-PD.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/EZYDAY-PD.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>EZYDAY-PD</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* <!-- 5 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Ibs set"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Ibs set.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ibs set.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Ibs set</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            {/* <!-- 6 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/NervoAct"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/NervoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/NervoAct.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>NervoAct</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            {/* <!-- 7 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Oesto-flex"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Oesto-flex.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Oesto-flex.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Oesto-flex</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            {/* <!-- 8 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/prostoAct"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/prostoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/prostoAct.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>prostoAct</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>

            {/* <!-- 9 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/STONEACT"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/STONEACT.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/STONEACT.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>STONEACT</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* <!-- 10 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/WARTCURE"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/WARTCURE.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/WARTCURE.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>WARTCURE</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;150</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
        {/* <hr /> */}
        {/* <!-- Wilson drugs products --> */}
        <div className={home.card}>
          <h2 className={home.my1}>Wilson drugs's product</h2>
          <div className={home.cards}>
            {/* <!-- 1 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Deflan-syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Deflan-syrup.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Deflan-syrup.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Deflan-syrup</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* <!-- 2     --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Deflan-Tablet"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Deflan-Tablet.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Deflan-Tablet.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Deflan-Tablet</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            {/* <!-- 3 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Derment-Ointment"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Derment-Ointment.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Derment-Ointment.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Derment-Ointment</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            {/* <!-- 4 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Kasanil-Syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Kasanil-Syrup.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Kasanil-Syrup.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Kasanil-Syrup</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* <!-- 5 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Livopick-Capsules"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Livopick-Capsules.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Livopick-Capsules.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Livopick-Capsules</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            {/* <!-- 6 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Livopick-D.S-Syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Livopick-D.S-Syrup.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Livopick-D.S-Syrup.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Livopick-D.s-syrup</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            {/* <!-- 7 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Livopick-Syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Livopick-Syrup.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Livopick-Syrup.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Livopick-Syrup</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            {/* <!-- 8 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Neurel-Tablet"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Neurel-Tablet.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Neurel-Tablet.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Neurel-Tablet</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>

            {/* <!-- 9 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Vatorine-Capsule"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Vatorine-Capsule.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Vatorine-Capsule.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Vatorine-Capsule</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* <!-- 10 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Wilsoplex-Syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/wilson drugs/Wilsoplex-Syrup.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/wilson drugs/Wilsoplex-Syrup.webp`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Wilsoplex-Syrup</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;150</p>
                </div>
              </Link>
            </div>

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

export default Home
