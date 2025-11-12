"use client";
import Link from "next/link"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaHouseUser, FaChartLine, FaCity, FaGolfBall, FaTree, FaStore, FaBiking, FaTruckMonster, FaHotel, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaStar } from "react-icons/fa6";
import { Home, Building, Trees, Umbrella, UmbrellaIcon, TreePine, Activity, Dumbbell, Sailboat, MapPin, Leaf, TrendingUp } from "lucide-react";
export default function Properties() {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}
    return (
        <>
            <section className="custom_container properties_section" id="polo">
              <div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>UNMATCHED EQUESTRIAN OPULENCE. ENDLESS LUXURY AWAITS</h1>
        </div>
      </div>
      <div className=''>
        <p className="down_styling para_styling">
 A regal residence where inspired architecture, breathtaking panoramas, and curated experiences unite in perfect harmony — a sanctuary of serenity where every day unfolds like a poetic masterpiece. Crafted for those who appreciate the art of detail, The Grand Polo Club and Resort redefines refined living with world-class amenities, from fitness centres and luxury spas to recreational spaces and fine dining, offering an exceptional lifestyle of unmatched opulence.
</p>

      </div>

        <div className="import_image">
         {/* <Image
          src="/assets/img/slider/polo_b_image.jpg"
           alt="Polo Large Image"
           height={1000}
           width={1000}
           className='main_image_styling'
         /> */}
         
       </div>

      {/* <div className="row apartment_row_styling margin_left_null">
            <div className="why_invest_wrapper why_invest_mobile_container col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <div className="apartment_container">
  <Image
    src="https://salescenter-siniyaisland.com/images/yachtside/2.jpg?v=1"
    alt="Apartment Image"
    width={1200}
    height={800}
    className="apartment_image_styling"
  />
</div>
            </div>
             <div className="why_invest_wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Apartments
                </div>
                <h3 className="project_title">Waterfront Apartments starting from AED 1.33M*</h3>
                <div className="currency_container">
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/gbp.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> GBP 275K*
                        </span>
                    </div>
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/usd_curr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 30 }}
                                                  /> USD 362K*
                        </span>
                    </div>
                    <div className="property_price icon_price_styling">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/eur.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> EUR 313K*
                        </span>
                    </div>
                   <div className="property_price">
                        <span className="property_price_span">
                          <Image
                                                    src="/assets/icon/sobha_icons/inr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> INR 3.21Cr*
                        </span>
                    </div>
                </div>

                <div className="consultation_btn_style btn_cen btn_mobile_resp">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            I AM INTERESTED
          </button>
</div>

<div className=''>
        <p className="down_styling_note" style={{color: "#9f8151 "}}>
  *The Global Prices may vary as per the Exchange Rate.
</p>

      </div>
            </div>
      </div>

      <div className="row apartment_row_styling margin_left_null reverse_section">
             <div className="why_invest_wrapper_villa why_invest_wrapper_villa_down col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="badge">
                Villas
                </div>
                <h3 className="project_title">Waterfront Villas starting from AED 10.75M*</h3>
                <div className="currency_container_villa">
                     <div className="property_price">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/gbp.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> GBP 2.22M*
                        </span>
                    </div>
                    <div className="property_price">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/usd_curr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 30 }}
                                                  /> USD 2.93M*
                        </span>
                    </div>
                    <div className="property_price">
                         <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/eur.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> EUR 2.53M*
                        </span>
                    </div>
                    <div className="property_price">
                        <span className="property_price_span">
                            <Image
                                                    src="/assets/icon/sobha_icons/inr.svg"
                                                    alt="world_class_amenities"
                                                    height={50}
                                                    width={300}
                                                    style={{ height: "auto", width: "100%", maxWidth: 22, marginRight: 5 }}
                                                  /> INR 25.97Cr*
                        </span>
                    </div>
                </div>

                <div className="consultation_btn_style btn_cen btn_mobile_resp">
  <button
            className="hover_external_btn"
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            I AM INTERESTED
          </button>
</div>

<div className='resp_usd'>
        <p className="down_styling_note" style={{color: "#9f8151 "}}>
  *The Global Prices may vary as per the Exchange Rate.
</p>

      </div>
            </div>

            <div className="why_invest_wrapper_villa col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
               <div className="villa_container">
  <Image
    src="https://salescenter-siniyaisland.com/images/coral/1.jpg?v=1"
    alt="Apartment Image"
    width={1200}
    height={800}
    className="apartment_image_styling"
  />
</div>
            </div>
      </div> */}
            </section>
        </>
    )
}