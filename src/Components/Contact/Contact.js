import { Box, Button, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import { details } from "../../details"
import "./Contact.css"

const Contact = () => {
    const [checked1, setChecked1] = useState(false);

    const [scrolled, setScrolled] = useState(0);

    window.addEventListener("scroll", () => {
        setScrolled(document.documentElement.scrollTop);
    })

    if (scrolled >= 2700) {

        setTimeout(() => {
            setChecked1(true)
        }, 500)
    }



    const mailTo = () => {
        window.open("mailto:sanchithanda7@gmail.com", "_blank");
    }
    return (
        <Box sx={{ width: "80%", margin: "10% auto", padding: "0% 10px" }}>
            <Typography className='contactheading' variant='h2' sx={{ textAlign: "center", fontWeight: "600", color: "black", fontFamily: "Poppins" }}>Get In Touch</Typography>
            <Typography className='contactSubHeading' variant='h5' sx={{ textAlign: "center", width: "70%", margin: "auto", color: "black", fontFamily: "Poppins" }}>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Typography>
            <Button className='contactButton' onClick={mailTo} variant="outlined" sx={{ border: "1px solid #008F11", color: "black", fontSize: "0.9rem", margin: "auto", padding: "1% 3%", display: "block", marginTop: "2%", fontFamily: "Poppins" }}>Say Hello</Button>
            <Box className='contact-logo' sx={{ marginTop: "2%", display: "flex", justifyContent: "center", alignContent: "start", alignItems: "center", gap: "15px", flexDirection: "column" }}>
                <a className='socialLogo' id="contact-github" target="_blank" rel="noopener noreferrer" href={details.githubLink} style={{ textDecoration: "none", color: "black", fontSize: "1.7rem" }}><i className="fa-brands fa-github"></i>   SanchitH17</a>
                <a className='socialLogo' id="contact-linkedin" target="_blank" rel="noopener noreferrer" href={details.linkedInLink} style={{ textDecoration: "none", color: "black", fontSize: "1.7rem" }}><i className="fa-brands fa-linkedin"></i>  Sanchit Handa</a>
                <a className='socialLogo' id="contact-phone" target="_blank" rel="noopener noreferrer" href={`tel:+91${details.phone}`} style={{ textDecoration: "none", color: "black", fontSize: "1.5rem" }}><i class="fa-solid fa-phone"></i>   +91 8700626238</a>
                <a className='socialLogo' id="contact-email" target="_blank" rel="noopener noreferrer" href={`mailto:${details.mailLink}`} style={{ textDecoration: "none", color: "black", fontSize: "1.5rem" }}><i className="fa-regular fa-envelope"></i>   sanchithanda7@gmail.com</a>
            </Box>
        </Box>
    )
}

export default Contact