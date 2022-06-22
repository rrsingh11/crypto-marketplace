import React from 'react'
import Slider from 'react-slick' 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css'
import { Avatar } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import { textAlign } from '@mui/system';
import ajay from '../assets/ajay_goyal.jpg'

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );
};

function Testimonials() {
  return (
    <div className='testimonial-container' style={{ 
      display:'flex',
      justifyContent: "center",
      marginTop:"50px"
      }}>
    <div style={{width:'60%',
      textAlign:'center'
      }}> 
    <h1 style={{
      marginBottom:'20px'
    }}>Our Global Team</h1>
      <Slider
      prevArrow={<PreviousBtn />}
      nextArrow={<NextBtn />}
      dots
      >
        <Card img={ajay}/>
      </Slider>
    </div>
    </div>
    
  )
}

const Card = ({img}) => {
    return(
      <div 
      style=
      {{ 
        display:'flex',
        alignItems:'center',
        flexDirection:"column", 
        margin:"10px",
        textAlign:'center',
        color:'gray',
      }}
      >
        <Avatar
        imgProps={{style: {
          borderradius: '50%'
        }}}
        src={img} 
        style={{ 
          width:'150px', 
          height:'150px',
          border:"1px solid lightgray",
          padding:'7px',
          marginBottom:20
          }}/>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat."</p>
        <p style={{
          fontSyle:"italic",
          marginTop:"20px"
        }}><span style={{
          fontWeight:'500', color:'yellowgreen'
        }}>Ajay Goyal</span>, CEO Bitbe Group India</p>
      </div>
    )
}

export default Testimonials