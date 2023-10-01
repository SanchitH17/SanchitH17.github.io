import { Box, Button, Slide, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { details } from '../../details';
import LinearDeterminate from '../MiniComponent/ProgressComp';
import "./Intro.css"
import Typewriter from 'typewriter-effect/dist/core'
import Scroll from "react-scroll-to-element";
const Intro = () => {
    const [checked,setChecked]= useState(false);
    const [hoverEffect,SetHoverEffect]=useState(0);

    const introLoaded=()=>{
        setTimeout(()=>{
            setChecked(true);

        },800)
    }
    useEffect(()=>{
        introLoaded();
    },[])
    var typewriter = new Typewriter(document.getElementById("subHeading"), {
        loop: true,
        delay: 75,
      });
    typewriter
    .pauseFor(500)
    .typeString('I am <strong>Full Stack Developer<strong>')
    .pauseFor(1000)
    .deleteChars(25)
    .typeString('I build things for <strong>Front-End</strong>')
    .pauseFor(300)
    .deleteChars(9)
    .typeString('<strong>Back-End</strong>')
    .pauseFor(1000)
    .start();
  return (
    <Box id="home" className='introDiv'  sx={{width:"80%",margin:"auto",marginTop:"5%"}}>
        <Box className='headingContainer' sx={{cursor:"pointer",width:"fit-content"}} onMouseOut={()=>{SetHoverEffect(0)}} onMouseOver={()=>SetHoverEffect(1)}>
            <Zoom  in={checked}>
                {/* <Typography className="heading1" sx={{color:"rgb(191,201,232)",fontFamily:"Poppins",fontSize:"6rem",fontWeight:'600'}} variant='h1' >{details.firstname+" "+details.lastname}</Typography> */}
                <Typography id="user-detail-name" className="heading1" sx={{color:"black",fontFamily:"Poppins",fontSize:"6rem",fontWeight:'600'}} variant='h1' >{details.firstname+" "+details.lastname}</Typography>
                
            </Zoom>
            
        </Box>
        <Zoom  in={checked}>
            {/* <typewriter
            
            /> */}
            {/* <Typography id="subHeading" className='heading1' sx={{color:"rgb(136,146,176)",fontFamily:"Poppins",fontSize:"4rem"}} variant='h1'></Typography> */}
            <Typography id="subHeading" className='heading1' sx={{color:"black",fontFamily:"Poppins",fontSize:"4rem"}} variant='h1'></Typography>
        </Zoom>
        <Zoom  in={checked}>
            <Typography id="user-detail-intro" className='intro' sx={{color:"black",fontFamily:"Poppins",width:"65%",marginTop:"2%",fontSize:"1.4rem"}} variant='h5'>I’m a Full Stack Web Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</Typography>
        </Zoom>
        <Scroll offset={-150} type="class" element={details.className[3]}>
            <Zoom in={checked}>
                
                <Button 
                className='goToButton'
                sx={{
                    border: "1px solid black",
                    color: "black",
                    fontSize: "1rem",
                    marginTop:"4%",
                    padding:"1%",
                    fontFamily:"Poppins"
                }}>Check Out My Work</Button>
            </Zoom>
        </Scroll>
    </Box>
  )
}

export default Intro