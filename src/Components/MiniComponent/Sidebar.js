import { Box, Slide } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {AiFillGithub} from "react-icons"
import "./Sidebar.css";
import { details } from '../../details';

const Sidebar = () => {
    const [checked,setChecked]= useState(false);
    const introLoaded=()=>{
        setTimeout(()=>{
            setChecked(true);
    
        },900)
    }
        useEffect(()=>{
            introLoaded();
        },[])
  return (

    <Slide direction='up'  in={checked}>

        <Box className="sidebar" sx={{position:"fixed",bottom:"5%",left:"4%",display:"grid",justifyContent:"center",alignContent:"center",gap:"15px"}}>
            <a className='socialLogo' id="contact-github" target={"_blank"} href={details.githubLink} style={{textDecoration:"none",color: "black",fontSize:"1.7rem"}}><i className="fa-brands fa-github"></i></a>
            <a className='socialLogo' id="contact-linkedin" target={"_blank"} href={details.linkedInLink} style={{textDecoration:"none",color: "blue",fontSize:"1.7rem"}}><i className="fa-brands fa-linkedin"></i></a>
            <a className='socialLogo' id="contact-phone" target={"_blank"} href={`tel:+91${details.phone}`} style={{textDecoration:"none",color: "black",fontSize:"1.5rem"}}><i class="fa-solid fa-phone"></i></a>
            <a className='socialLogo' id="contact-email" target={"_blank"} href={`mailto:${details.mailLink}`} style={{textDecoration:"none",color: "red",fontSize:"1.5rem"}}><i className="fa-regular fa-envelope"></i></a>
        </Box>
        
    </Slide>
  )
}

export default Sidebar