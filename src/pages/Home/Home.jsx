import React from 'react'
import banner from "./home-banner.jpg";
import "./Home.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='homepage'>
        <h1 className='homepage__tagline'>MORE THAN FASHION</h1>
        <img src={banner} alt="homepage banner - a woman with good fashion sense enjoying the nature." className="homepage__banner" />
        <Link to="/products">
        <ArrowOutwardIcon className="homepage__arrow" fontSize='large' />
        </Link>
    </div>
  )
}

export default Home