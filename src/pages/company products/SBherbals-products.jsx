import React from 'react'
import { Link } from "react-router-dom";
import sbherbalsCSS from "./sbherbalsCSS.module.css";
import BASE_URL from '../config';
import products from '../../data/products';

const SBherbals = () => {
  return (
    <main className={sbherbalsCSS.main}>
      <div className={sbherbalsCSS.container}>
        {/* <!-- SBherbals products --> */}
        <div className={sbherbalsCSS.card}>
          <h2 className={sbherbalsCSS.my1}>Sb herbals's product</h2>
          <div className={sbherbalsCSS.cards}>
            {/* Ayurvedic Syrups, Drops & Malth */}
            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Apt_Act_syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/EZYDAY-PD.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Apt-Act syrup/Apt-Act syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Apt-Act syrup</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Asthma_Act_Syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Oesto-flex.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Asthama act syrup/Asthma Act Syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Asthma Act Syrup</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Cyst_yog_syrup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/CYST_YOG-600x600-2.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Cyst-yog syrup/Cyst-yog syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Cyst-yog syrup</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Ezyday_pd"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/EZYDAY-PD.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Ezyday pd/Ezyday pd.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Ezyday pd</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Gripvon_grip_water"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/NervoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Gripvob grip water/Gripvon grip water.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Gripvon grip water</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Mediliv_Drops"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/dentoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Mediliv Drops/Mediliv Drops.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Mediliv</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Medliv_plus"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/EZYDAY-PD.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Medliv plus/Medliv plus.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Medliv plus</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Medliv_DS_Liver_Tonic"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Ibs set.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Medliv-DS Liver Tonic/Medliv-DS Liver Tonic.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Medliv-DS Liver Tonic</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>

              <Link
                to="/product/Nefrawin_kft_syrup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/Apple cider vinegar.webp" alt="" style={{ width: "110px" }} /> */}
                {/* <img src={`http://192.168.29.234:4000/uploads/products/sbherbals/Alovera juice.jpg`} alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Nefrawin kst syrup/Nefrawin kft syrup.jpg`} alt="" style={{ width: "110px" }} />

                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Nefrawin kft syrup</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>

                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Otiherb_ear_drops"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/EZYDAY-PD.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Otiherb ear drops/Otiherb ear drops.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Otiherb ear drops</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Brain_o_herb_malt"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/prostoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Brain-o-herb malt/Brain-o-herb malt.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Brain-o-herb malt</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/SuperAct_Vital"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/CYST_YOG-600x600-2.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/SuperAct Vital/SuperAct Vital.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>SuperAct Vital</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>

              <Link
                to="/product/Shilajit_malt"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/Apple cider vinegar.webp" alt="" style={{ width: "110px" }} /> */}
                {/* <img src={`http://192.168.29.234:4000/uploads/products/sbherbals/Alovera juice.jpg`} alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Shilajit malt/Shilajit malt.jpg`} alt="" style={{ width: "110px" }} />

                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Shilajit malt</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>

                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Kidset_drops"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/WARTCURE.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Kidset drops/Kidset drops.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Kidset drops</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;150</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Leucoset_syrup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/CYST_YOG-600x600-2.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Leucoset Syrup/Leucoset syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Leucoset syrup</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Pregbless_syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/NervoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Pregbless syrup/Pregbless syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Pregbless syrup</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Sbron_syrup"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/STONEACT.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Syrups, Drops & Malts/Sbron syrup/Sbron syrup.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Sbron syrup</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            {/* Ayurvedic Juices */}
            <div className={sbherbalsCSS.cardItems}>

              <Link
                to="/product/Alovera_juice"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/Apple cider vinegar.webp" alt="" style={{ width: "110px" }} /> */}
                {/* <img src={`http://192.168.29.234:4000/uploads/products/sbherbals/Alovera juice.jpg`} alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Alovera_juice/Alovera_juice.jpg`} alt="" style={{ width: "110px" }} />

                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Alovera juice</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>

                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Apple_cider_vinegar_sugar_free"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/dentoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Apple cider vinegar - sugar free/Apple cider vinegar - sugar free.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Apple cider vinegar - sugar free</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Amla_juice"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/CYST_YOG-600x600-2.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Amla juice/Amla juice.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Amla juice</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Arjun_Aswarganda_ras"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/NervoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Arjun Ashwarganda raj/Arjun Aswarganda ras.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Arjun Aswarganda ras</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Giloy_juice"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Ibs set.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Giloy juice/Giloy juice.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Giloy juice</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Neem_karela_jamun"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/prostoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Neem Karela Jamun/Neem karela jamun.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Neem karela jamun</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Noni_juice"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/dentoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Noni juice/Noni juice.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Noni juice</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Nirgundi_ras"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/CYST_YOG-600x600-2.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Juices/Nirgundi ras/Nirgundi ras.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Nirgundi ras</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            {/* Ayurvedic Capsules */}

            <div className={sbherbalsCSS.cardItems}>

              <Link
                to="/product/Cyst_yog_capsule"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/Apple cider vinegar.webp" alt="" style={{ width: "110px" }} /> */}
                {/* <img src={`http://192.168.29.234:4000/uploads/products/sbherbals/Alovera juice.jpg`} alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/Cyst-yog capsule/Cyst-yog capsule.jpg`} alt="" style={{ width: "110px" }} />

                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Cyst-yog capsule</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>

                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/IBS_set"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/prostoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/IBS set/IBS set.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>IBS set</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Migraset_capsule"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/NervoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/Migraset capsule/Migraset capsule.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Migraset capsule</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/YouSlim_weight_loss_capsule"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/STONEACT.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/Youslim - weight loss capsule/YouSlim - weight loss capsule.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>YouSlim - weight loss capsule</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Pcodset"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Ibs set.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/Pcodset/Pcodset.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Pcodset</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/SBFLAM_ESR"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/prostoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/SBFLAM-ESR/SBFLAM-ESR.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>SBFLAM-ESR</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Uricset_capsules"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/EZYDAY-PD.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/Uricset capsules/Uricset capsules.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Uricset capsules</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Varicoset"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Ibs set.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/Varicoset/Varicoset.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Varicoset</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Ovumset_capsule_for_women"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/NervoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Capsules/Ovumset - capsule for women/Ovumset - capsule for women.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Ovumset - capsule for women</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;110</p>
                </div>
              </Link>
            </div>

            {/* Ayurvedic Tablets */}
            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Mindease_Tablet"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Oesto-flex.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Tablets/MindEase Tablet/Mindease Tablet.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Mindease Tablet</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/SuperAct_99_senior_with_shudh_shilajit"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/dentoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Tablets/SuperAct-99 senior with shudh shilajit/SuperAct-99 senior with shudh shilajit.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>SuperAct-99 senior with shudh shilajit</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Rasraj_ras_with_gold"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Oesto-flex.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Tablets/Rasraj ras witgold/Rasraj ras with gold.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Rasraj ras with gold</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Sciavin"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/WARTCURE.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Tablets/Sciavin/Sciavin.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Sciavin</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;150</p>
                </div>
              </Link>
            </div>

            {/* Ayurvedic Softgel Capsules */}

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Heelset"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Oesto-flex.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Ayurvedic Softgel Capsules/Heelset/Heelset.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Heelset</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            {/* Powder/Grnules & Sachets */}
            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Weight_gain_management_powder"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Oesto-flex.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/PowderGrnules & Sachets/Weight gain management powder/Weight gain management powder.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Weight gain management powder</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;50</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Aratavin_alopecia_areta_spray"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/Ibs set.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/PowderGrnules & Sachets/Aratavin alopecia areta spray/Aratavin alopecia areta spray.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Aratavin alopecia areta spray</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;80</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>

              <Link
                to="/product/Lactoadd_grandnules"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img src="/Images/SBherbals/Apple cider vinegar.webp" alt="" style={{ width: "110px" }} /> */}
                {/* <img src={`http://192.168.29.234:4000/uploads/products/sbherbals/Alovera juice.jpg`} alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/PowderGrnules & Sachets/Lacktoadd grandnules/Lactoadd grandnules.jpg`} alt="" style={{ width: "110px" }} />

                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Lactoadd grandnules</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>

                </div>
              </Link>
            </div>

            {/* Herbal Cosmetics */}
            <div className={sbherbalsCSS.cardItems}>
                          <Link
                            to="/product/Charcoal_facewash"
                            style={{ textDecoration: "none", color: "inherit" }}>
                            {/* <img src="/Images/SBherbals/STONEACT.webp" alt="" style={{ width: "110px" }} /> */}
                            <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Charcoal facewash/Charcoal facewash.jpg`} alt="" style={{ width: "110px" }} />
                            <div className="item-details">
                              <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Charcoal facewash</p>
                              <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                            </div>
                          </Link>
                        </div>

                        <div className={sbherbalsCSS.cardItems}>
                                      <Link
                                        to="/product/Charcoal_soap"
                                        style={{ textDecoration: "none", color: "inherit" }}>
                                        {/* <img src="/Images/SBherbals/WARTCURE.webp" alt="" style={{ width: "110px" }} /> */}
                                        <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Charcoal soap/Charcoal soap.jpg`} alt="" style={{ width: "110px" }} />
                                        <div className="item-details">
                                          <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Charcoal soap</p>
                                          <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;150</p>
                                        </div>
                                      </Link>
                                    </div>

                                    <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/DentoAct_herbal_tothpaste"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/dentoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/DentoAct herbal tothpaste/DentoAct herbal tothpaste.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>DentoAct herbal tothpaste</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;90</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Kesh_101"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/STONEACT.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Kesh 101/Kesh 101.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Kesh 101</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Neem_tulsi_alovera"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/WARTCURE.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Neem tulsi alvovera/Neem tulsi alovera.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Neem tulsi alovera</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;150</p>
                </div>
              </Link>
            </div>

             <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Neem_tulsi_alovera_soap"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/STONEACT.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Neem tulsi alover - soap/Neem tulsi alovera soap.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Neem tulsi alovera soap</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;60</p>
                </div>
              </Link>
            </div>

            <div className={sbherbalsCSS.cardItems}>
              <Link
                to="/product/Youshine"
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* <img src="/Images/SBherbals/prostoAct.webp" alt="" style={{ width: "110px" }} /> */}
                <img src={`${BASE_URL}/uploads/products/sbherbals/Herbal Cosmetics/Youshine/Youshine.jpg`} alt="" style={{ width: "110px" }} />
                <div className="item-details">
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>Youshine</p>
                  <p className={`${sbherbalsCSS.textCenter} ${sbherbalsCSS.my2}`}>&#8377;70</p>
                </div>
              </Link>
            </div>



          </div>
        </div>
        {/* <hr /> */}
        {/* <!-- Wilson drugs products --> */}

      </div>
    </main>
  )
}

export default SBherbals
