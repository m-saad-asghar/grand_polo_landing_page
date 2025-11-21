"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/CustomComponents/WhatsappButton.module.css"
import { useSearchParams } from 'next/navigation';

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
   const searchParams = useSearchParams();
      const [countryValue, setCountryValue] = useState('');
  const [originValue, setOriginValue] = useState('');

     useEffect(() => {
    const origin = searchParams.get('origin');
    const country = searchParams.get('country');

    if (origin) {
      if (origin.toLowerCase() === 'meta') {
        setOriginValue('Meta');
      } else if (origin.toLowerCase() === 'google') {
        setOriginValue('Google Ads');
      } else {
        setOriginValue('');
      }
    } else {
      setOriginValue('');
    }

    if (country) {
  const formattedCountry = country
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
  setCountryValue(formattedCountry);
} else {
      setCountryValue('');
    }
  }, [searchParams]);

  const saveToBitrix = async () => {
     const payload = {
    fields: {
      TITLE: `Grand Polo Club & Resort EN Landing Page From Whatsapp Button`,
      UF_CRM_1760777561731: originValue,
      NAME: "",
      PHONE_TEXT: "",
      PHONE: [
        {
          VALUE: "",
          VALUE_TYPE: "WORK",
        },
      ],
      EMAIL: [
        {
          VALUE: "",
          VALUE_TYPE: "WORK",
        },
      ],
      SOURCE_DESCRIPTION: "",
      SOURCE_ID: "WEB",
      ASSIGNED_BY_ID: 25,
      UF_CRM_1754652292782: "Grand Polo Club & Resort EN Landing Page From Whatsapp Button",
      UF_CRM_1761206533: countryValue,
    },
    params: {
      REGISTER_SONET_EVENT: "Y",
    },
  };


  try {
    const response = await fetch(
      "https://crm.shiroestate.ae/rest/25/btnspp9oeepo8jt6/crm.lead.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

  } catch (error) {
    console.log("Something Went Wrong. Please Try Again.")
  }

  };

  const sendEmail = async () => {
     const payload_email = {
    LANDING_PAGE: "Grand Polo Club & Resort EN Landing Page From Whatsapp Button",
    ORIGIN: originValue,
    COUNTRY: countryValue,
    NAME: "",
    PHONE_TEXT: "",
    EMAIL: "",
    MESSAGE: "",
  };
   try {
    const res = await fetch("/api/send-email-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload_email),
    });

    const data = await res.json();
    console.log("Email sent:", data);
  } catch (err) {
    console.error("Error sending email:", err);
  }
  };

  useEffect(() => {
    // const hasSeenMessage = sessionStorage.getItem("whatsappGreeting");

    // if (!hasSeenMessage) {
    //   setShowMessage(true);
    //   sessionStorage.setItem("whatsappGreeting", "true");
    // }
  }, []);

  return (
    <div className={styles.whatsappContainer}>
      {/* {showMessage && (
        <div className={styles.greetingMessage}>
          👋 Hi there! Need help? Chat with us on WhatsApp.
          <button onClick={() => setShowMessage(false)}>✖</button>
        </div>
      )} */}

<div
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >

{showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "110%",
            backgroundColor: "#25d366",
            color: "#ffffff",
            padding: "8px 12px",
            borderRadius: "6px",
            whiteSpace: "nowrap",
            zIndex: 9999,
            fontSize: "14px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          className="whatsapp_message"
        >
          Reach us on WhatsApp for Instant Property Guidance!
        </div>
      )}

      <Link
        href="https://wa.me/971588888461?text=Hello%2C%20I%E2%80%99m%20interested%20in%20your%20Real%20Estate%20Expertise.%20How%20can%20Shiro%20Estate%20assist%20me%20with%20my%20Next%20Purchase%3F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp_button}
        onClick={() => {
          saveToBitrix();
          sendEmail();
        }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          srcset="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
          priority
          width={100}
          height={100}
          className={styles.whatsapp_icon}
        />
      </Link>
      </div>
    </div>
  );
};

export default WhatsAppButton;