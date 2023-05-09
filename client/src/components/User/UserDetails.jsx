import React from "react";
import image from '../../assets/image.png'
import { Link } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
   return(
    <div>
        <img src={image} alt="user" width="80"></img>
    </div>
   )
}

export default UserDetails