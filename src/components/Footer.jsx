import React from 'react';
import "./style.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from "react-router-dom"


import {logo} from "../utils/constants"
import SearchBar from "./SearchBar"
import Instagram from '@mui/icons-material/Instagram';

function Footer() {
  return  (
    <div className="footer">
        <h2>Zikriddin</h2>
        <a target="_blank" href="https://instagram.com/uzbekmoliyachisi" >
        <div className='icon'> 
            <Instagram/>
        </div>
        </a>  
        <a target="_blank" href="https://telegram.me/Kali1407" >
          <div className='icon'> 
            <TelegramIcon/>
          </div>
        </a>
        <a target="_blank" href="https://zikriddin2022surxonidinov@gmail.com" >
          <div className='icon'> 
            <GoogleIcon/> 
          </div>
        </a>    
    </div>
  )
}

export default Footer;