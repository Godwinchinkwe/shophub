import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import "./Whatsapp.css"
const whatsapp = () => {
  return (
    <span className='Bg-toggler' >
     <a className='Bg-toggler'  target="_blank" rel="noreferrer" href="https://wa.link/o6wkpz">
       <BsWhatsapp fontSize={"25px"} /> 
     </a>
   </span>
  )
}
export default whatsapp