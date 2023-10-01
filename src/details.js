import adventour from './media/adventour.png'
import portfolio from './media/portfolio.png'
import expedia from './media/expedia.png'
import bigbasket from './media/bigbasket.png'
import instagram from './media/instagram.png'
import flipkart from './media/Flipkart.png'
import skinstore from './media/Skin Store.png'
import travelious from "./media/TRAVLIOUS.png"
export const details={
    firstname:"Sanchit",
    lastname:"",
    // navList:["Home","About","Skills","Work","Contact"],
    navList:[{
        val1:"Home",
        val2:"nav-link home"
      },{
        val1:"About",
        val2:"nav-link about"
      },{
        val1:"Skills",
        val2:"nav-link skills"
      },{
        val1:"Work",
        val2:"nav-link projects"
      },{
        val1:"Contact",
        val2:"nav-link contact"
      }],
    scrollPosition:[0,545,1070,1730,3400],
    className:["introDiv","about section","skillContainer","workDiv","contactDiv"],
    // className:["nav-link home","nav-link about","nav-link skills","nav-link projects"],
    linkedInLink:"https://www.linkedin.com/in/sanchithanda/",
    githubLink:"https://github.com/SanchitH17",
    phone: '8700626238',
    mailLink:'sanchithanda7@gmail.com',
    techStack:[
            {
                name:"HTML",
                img:"https://img.icons8.com/color/512/html-5--v1.png"
            },
            {
                name:"CSS",
                img:"https://img.icons8.com/fluency/512/css3.png"
            },
            {
                name:"JavaScript",
                img:"https://img.icons8.com/color/512/javascript.png"
            },
            {
                name:"Java",
                img:"https://img.icons8.com/?size=512&id=Pd2x9GWu9ovX&format=png"
            },
            {
                name:"React",
                img:"https://img.icons8.com/office/512/react.png"
            },
            {
                name:"Material UI",
                img:"https://img.icons8.com/color/512/material-ui.png"
            },
            {
                name:"Chakra UI",
                img:"https://img.icons8.com/color/512/chakra-ui.png"
            },
            {
                name:"Node JS",
                img:"https://img.icons8.com/fluency/512/node-js.png"
            },
            {
                name:"BootStrap",
                img:"https://img.icons8.com/color/512/bootstrap.png",

            },
            {
                name:"Github",
                img:"https://img.icons8.com/glyph-neue/512/github.png"
            },
            {
                name:"Express JS",
                img:"https://img.icons8.com/ios/512/express-js.png"
            },
            {
                name:"Mongo DB",
                img:"https://img.icons8.com/color/512/mongodb.png"
            },
            {
                name:"Redux",
                img:"https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
            },
            {
                name:"Firebase",
                img:"https://img.icons8.com/?size=512&id=62452&format=png"
            }

    ],
    projects:[

        {
            name:"Flipkart Clone",
            github:"https://github.com/hasbealam/flipkart-clone",
            live:"https://flipkart-clone-eight-pi.vercel.app/index.html#",
            type:"Colaborative",
            tech:["React","Redux","Chakra UI","Firebase"],
            img: flipkart,
            description:"An e-commerce website where users can explore and buy clothes, electronics, groceries, etc"
        },
        
        {
            name:"Skin Store Clone",
            github:"https://github.com/shree1109/SkinStore.com-Unit4",
            live:"https://masaiskinstorecom.netlify.app/index.html",
            type:"Collaborative",
            tech:["React","Redux","Chakra UI", "Firebase"],
            img: skinstore,
            description:"Skin Store is the top beaty product e-commerce website with over 3600 products to choose from."
        },

        {
            name:"Portfolio",
            github:"#",
            live:"#",
            type:"Individual",
            tech:["React","Chakra UI"],
            img: portfolio,
            description:"It's a Portfolio App anyone can see my all project, skills, contact details, about section etc."
        },
    
        {
            name:"TRLVS",
            github:"https://github.com/pranshushuklagithub/travelious-clone",
            live:"https://travelious-clone-app.vercel.app/",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript","React"],
            img: travelious,
            description:"Travelious is an online travel agency. The site book airline tickets, hotel reservations etc"
        },
        

    ]

}