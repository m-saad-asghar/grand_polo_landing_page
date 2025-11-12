'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark, FaDollarSign, FaHouseUser, FaMoneyBill, FaWalking, FaMap, FaShieldAlt, FaChartLine, FaIdCard, FaLightbulb, FaGift } from "react-icons/fa";


export default function Map() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one service_padding" id="dubai-map" style={{paddingTop: 0}}>
             <div className="main-slider-one__content">
        <div className='custom_container'>

        <h1 className='heading_middle content_why_invest'>COMMUNITY MAP</h1>
        </div>
      </div>

            <div className="map_container">
<img src="assets/img/grand_polo_map.jpg" alt="" className="map_styling"/>
            </div>

        </section>
       
        </>
    )
}
