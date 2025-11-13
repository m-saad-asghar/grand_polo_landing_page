'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Map() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one service_padding" id="map" style={{paddingTop: 0}}>
             <div className="main-slider-one__content">
        <div className='custom_container'>

        <h1 className='heading_middle content_why_invest'>SEAMLESS CONNECTION</h1>

         <div className=''>
        <p className="down_styling para_styling">
 Perfectly positioned in one of Dubai’s most sought-after locations, the community offers effortless access to the city’s key destinations — from world-class retail and dining to schools, leisure, and major transport routes. Wherever life takes you, you’re always just minutes away.
</p>

      </div>

      <div className="themed_icons">
                      <div className="row portions_styling">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 wow animated fadeInUp" data-wow-delay="0.1s">
                              <div className="service-one__single custom_height">
                                  
                                  <div className="service-one__single-inner">
                                      
                                      <div className="icon-box">
                                          {/* <span className="icon-plane" style={{color: "#9f8151 "}}>
                                                <Image
                              src="/assets/icon/polo_icons/themed_parks.svg"
                              alt="world_class_amenities"
                              height={50}
                              width={300}
                              className="icons_styling"
                            />
                                          </span> */}
                                      </div>
                                      <div className="content-box">
                                          <p className="amenities_styling">5 Mins</p>
                                          <div>Al Maktoum Int'l Airport.</div>
                                      </div>
                                  </div>
                              </div>
                              <div className="shadow_line">
                              <hr className="line_styling" />
                          </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 wow animated fadeInUp" data-wow-delay="0.1s">
                              <div className="service-one__single custom_height">
                                  
                                  <div className="service-one__single-inner">
                                      
                                      <div className="icon-box">
                                          {/* <span className="icon-plane" style={{color: "#9f8151 "}}>
                                               <Image
                             src="/assets/icon/polo_icons/clubhouses.svg"
                              alt="world_class_amenities"
                              height={50}
                              width={300}
                              className="icons_styling"
                            />
                                          </span> */}
                                      </div>
                                      <div className="content-box">
                                          <p className="amenities_styling">10 Mins</p>
                                          <p>Expo City.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="shadow_line">
                              <hr className="line_styling" />
                          </div>
                          </div>
      
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 wow animated fadeInUp" data-wow-delay="0.1s">
                              <div className="service-one__single custom_height">
                                  
                                  <div className="service-one__single-inner">
                                      
                                      <div className="icon-box">
                                          {/* <span className="icon-plane" style={{color: "#9f8151 "}}>
                                                <Image
                              src="/assets/icon/polo_icons/endless_tracks.svg"
                              alt="world_class_amenities"
                              height={50}
                              width={300}
                              className="icons_styling"
                            />
                                          </span> */}
                                      </div>
                                      <div className="content-box">
                                          <p className="amenities_styling">30 Mins</p>
                                          <p>Downtown Dubai.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="shadow_line">
                              <hr className="line_styling" />
                          </div>
                          </div>
      
                      </div>
                     
                  </div>
        </div>
      </div>

            <div className="map_container">
<img src="assets/img/grand_polo_map.jpg" alt="" className="map_styling"/>
            </div>

        </section>
       
        </>
    )
}
