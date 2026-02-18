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
        <p className={home.textanimation}>GSTIN: 09DIDPM4340H1Z9</p>
        <p className={home.textanimation}>{displayText || "Medical Agency."}</p>
        <hr style={{ border: "0", height: "2px", background: "black", boxShadow: "none", opacity: 1 }} />

        {/* <!-- SBherbals products --> */}
        <div className={home.card}>
          <h2 className={home.my1}>Sb herbals's product</h2>
          <div className={home.cards}>
            {/* <!-- 1 --> */}
            <div className={home.cardItems}>

              <Link
                to="/product/Alovera_juice"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/Apple cider vinegar.webp" alt="" style={{ width: "110px" }} /> */}
                {/* <img src={`http://192.168.29.234:4000/uploads/products/sbherbals/Alovera juice.jpg`} alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Alovera_juice/Alovera_juice.jpg`} alt="" style={{ width: "110px" }} />

                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Alovera juice</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>

                </div>
              </Link>
            </div>

            {/* <!-- 2     --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Amla_juice"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/CYST_YOG-600x600-2.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Amla juice/Amla juice.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Amla juice</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            {/* <!-- 3 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Apple_cider_vinegar_sugar_free"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/dentoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Apple cider vinegar - sugar free/Apple cider vinegar - sugar free.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Apple cider vinegar - sugar free</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            {/* <!-- 4 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Apt_Act_syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/EZYDAY-PD.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Apt-Act syrup/Apt-Act syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Apt-Act syrup</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* <!-- 5 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Aratavin_alopecia_areta_spray"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Ibs set.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/PowderGrnules & Sachets/Aratavin alopecia areta spray/Aratavin alopecia areta spray.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Aratavin alopecia areta spray</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            {/* <!-- 6 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Arjun_Aswarganda_ras"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/NervoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Arjun Ashwarganda raj/Arjun Aswarganda ras.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Arjun Aswarganda ras</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            {/* <!-- 7 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Asthma_Act_Syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Oesto-flex.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Asthama act syrup/Asthma Act Syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Asthma Act Syrup</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            {/* <!-- 8 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Brain_o_herb_malt"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/prostoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Brain-o-herb malt/Brain-o-herb malt.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Brain-o-herb malt</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>

            {/* <!-- 9 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Charcoal_facewash"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/STONEACT.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Charcoal facewash/Charcoal facewash.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Charcoal facewash</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* <!-- 10 --> */}
            <div className={home.cardItems}>
              <Link
                to="/product/Charcoal_soap"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/WARTCURE.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Charcoal soap/Charcoal soap.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${home.textCenter} ${home.my2}`}>Charcoal soap</p>
                  <p className={`${home.textCenter} ${home.my2}`}>&#8377;150</p>
                </div>
              </Link>
            </div>

          </div>
          <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>
  <Link to="/sbherbals-product">View all Sb herbals's product
 →</Link>
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
