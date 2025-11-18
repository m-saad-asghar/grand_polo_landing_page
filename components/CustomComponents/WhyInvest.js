"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from 'react'
import ContactFormBrochure from "./ContactFormBrochure";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaHouseUser, FaChartLine, FaCity, FaGolfBall, FaTree, FaStore, FaBiking, FaTruckMonster, FaHotel, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaIdCard, FaLightbulb, FaGift, FaKey, FaUsers, FaBriefcase, FaPassport, FaStar } from "react-icons/fa6";
import { Home, Building, Trees, Umbrella, UmbrellaIcon, TreePine, Activity, Dumbbell, Sailboat, MapPin, Leaf, TrendingUp } from "lucide-react";
export default function WhyInvest() {
  const [showModal, setShowModal] = useState(false);
    const handleBrochureSuccess = () => {
    setShowModal(false);
  };
    return (
        <>
          {/* Modal */}
{showModal && (
  <div className="custom_modal_overlay">
    <div
      className="custom_modal_content"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="custom_modal_close" onClick={() => setShowModal(false)}>
        ✕
      </button>
      {/* Modal Content Start */}
       <ContactFormBrochure onSuccess={handleBrochureSuccess}/>
      {/* Modal Content End */}
    </div>
  </div>
)}
            <section className="custom_container" id="welcome">
                <div className="row margin_left_null">
<div className="why_invest_wrapper_pictures col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
<div className="main-slider-one__content">
        <div className='banner_text_container'>

        <h1 className='heading_middle content_why_invest'>WELCOME TO GRAND POLO CLUB & RESORT</h1>
        </div>
      </div>
      <div className=''>
        <p className="down_styling para_styling mobile_para">
 A masterpiece of luxurious living where equestrian grace meets modern sophistication. Grand Polo Club & Resort by Emaar — valued at over AED 41 billion and located near The Oasis — redefines harmony between nature, design, and lifestyle. With lush landscapes, world-class amenities, and family-inspired townhouses, it stands as Dubai’s most prestigious equestrian community.
</p>

      </div>

      <div className="why_invest_wrapper why_invest_wrapper_mobile shadow_i">
                     <div className="model_image_container">
                        <Image
                        src="/assets/img/polo_model_picture.png"
                        alt="Model Image"
                        height={1000}
                        width={1000}
                        style={{ height: "auto", width: "auto" }}
                        className="right_image"
                      />
                     </div>
                </div>

       <div className="row feature_row">
                                  <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="feauture-one__single" 
                                        >
                                            <div className="feauture-one__single-text">
                
                                              <div className="feauture-one__single-bottom">
                                                <div className="icon-box">
                                                    <span className="icon-plane">
                                                        <Image
                        src="/assets/icon/polo_icons/townhouses.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        style={{ height: "auto", width: "100%", maxWidth: 30 }}
                      />
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                                <h2 className="investment_content">
                <a href="javascript:void(0);">3 & 4 Bedroom</a></h2>
                <p className="investment_text">
                  <span className="about_para_span">Townhouses.</span>
                </p> 
                                            </div>
                                        </div>
                                    </div>
                
                                     <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="feauture-one__single" 
                                        >
                                            <div className="feauture-one__single-text">
                
                                              <div className="feauture-one__single-bottom">
                                                <div className="icon-box">
                                                    <span className="icon-plane">
                                                        <Image
                        src="/assets/icon/polo_icons/down_payment.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        style={{ height: "auto", width: "100%", maxWidth: 30 }}
                      />
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                                <h2 className="investment_content">
                <a href="javascript:void(0);">
                10%</a></h2>
                
                <p className="investment_text">
                  <span className="about_para_span">Down Payment.</span>
                </p> 
                                            </div>
                                        </div>
                                    </div>
                
                                     <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="feauture-one__single" 
                                        >
                                            <div className="feauture-one__single-text">
                
                                              <div className="feauture-one__single-bottom">
                                                <div className="icon-box">
                                                    <span className="icon-plane">
                                                          <Image
                       src="/assets/icon/polo_icons/payment_plan.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        className="invert brightness-200"
                        style={{ height: "auto", width: "100%", maxWidth: 30 }}
                      />
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                                <h2 className="investment_content">
                <a href="javascript:void(0);">70/20</a></h2>
                <p className="investment_text">
                  <span className="about_para_span">Payment Plan.</span>
                </p>
                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="feauture-one__single" 
                                        >
                                            <div className="feauture-one__single-text">
                
                                              <div className="feauture-one__single-bottom">
                                                <div className="icon-box">
                                                    <span className="icon-plane">
                                                        <Image
                        src="/assets/icon/polo_icons/handover.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        style={{ height: "auto", width: "100%", maxWidth: 30 }}
                      />
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                                <h2 className="investment_content">
                <a href="javascript:void(0);">Handover</a></h2>
                <p className="investment_text">
                  <span className="about_para_span">Q3 2029.</span>
                </p> 
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="feauture-one__single" 
                                        >
                                            <div className="feauture-one__single-text">
                
                                              <div className="feauture-one__single-bottom">
                                                <div className="icon-box">
                                                    <span className="icon-plane">
                                                        <Image
                        src="/assets/icon/polo_icons/high_roi.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        style={{ height: "auto", width: "100%", maxWidth: 30 }}
                      />
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                                <h2 className="investment_content">
                <a href="javascript:void(0);">High</a></h2>
                <p className="investment_text">
                  <span className="about_para_span">ROI.</span>
                </p> 
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="feauture-one__single" 
                                        >
                                            <div className="feauture-one__single-text">
                
                                              <div className="feauture-one__single-bottom">
                                                <div className="icon-box">
                                                    <span className="icon-plane">
                                                        <Image
                       src="/assets/icon/polo_icons/polo_inspired.svg"
                        alt="world_class_amenities"
                        height={50}
                        width={300}
                        style={{ height: "auto", width: "100%", maxWidth: 30 }}
                      />
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                                <h2 className="investment_content">
                <a href="javascript:void(0);">Polo - Inspired</a></h2>
                <p className="investment_text">
                  <span className="about_para_span">Luxury Community.</span>
                </p> 
                                            </div>
                                        </div>
                                    </div>
                
                                </div>

                               <div className="consultation_btn_style btn_cen custom_spacing_btn">
  <button
            className="hover_external_btn"
            onClick={() => setShowModal(true)}
          >
            DOWNLOAD BROCHURE
          </button>
</div>

                </div>
                <div className="why_invest_wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 why_invest_wrapper_mobile app_i">
                     <div className="model_image_container">
                        <Image
                        src="/assets/img/polo_model_picture.png"
                        alt="Model Image"
                        height={1000}
                        width={1000}
                        style={{ height: "auto", width: "auto" }}
                        className="right_image"
                      />
                     </div>
                </div>
                </div>


                        
            </section>
        </>
    )
}
