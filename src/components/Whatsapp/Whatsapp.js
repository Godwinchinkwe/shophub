import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <span className='Bg-toggler'>
      <a
        className='Bg-toggler'
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/2348064318819?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20product"
      >
        <BsWhatsapp fontSize={"25px"} />
      </a>
    </span>
  );
};

export default Whatsapp;