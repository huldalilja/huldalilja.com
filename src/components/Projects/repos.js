import LostInCodelogo from "../../assets/media/lostincode.svg";
import SheepOfIcelandlogo from "../../assets/media/sheepoficeland.png"
import RegiftLogo from "../../assets/media/regift.png"
import HLHlogo from "../../assets/media/HLH.svg"
import HLHlogoOrange from "../../assets/media/HLHorange.svg"
import React from 'react'

const projects = [
    {
        logo:HLHlogoOrange, 
        companyName:"huldalilja.com" ,
        companyLink:"https://huldalilja.com/",
        period:"Made in the spring 2020" ,
        description:"My website",
        back:(<p>Too pretty to not mention, even though it seems like you have already visited it! You can see the source code(React) <a target="_blank" rel="noopener noreferrer" href="https://github.com/huldalilja/huldalilja.com">here</a>.</p>)
    },
    {
        logo:RegiftLogo ,
        companyName:"Regift" ,
        companyLink:"https://regift.huldalilja.com",
        period:"Made in the spring 2020" ,
        description:"Reusable gift wrapping design and tutorials.",
        back:(<p>Website made in React around a design for reusable gift wrapping along tutorials with original photos. The source code can be seen <a target="_blank" rel="noopener noreferrer" href="https://github.com/huldalilja/regift">here</a>.</p>)
    },
    {
        logo:HLHlogo, 
        companyName:"old.huldalilja.com" ,
        companyLink:"https://old.huldalilja.com/",
        period:"Made in 2018" ,
        description:"My old website",
        back:(<p>My old website. Stopped updating in spring 2020. I made a <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog/2018/10/23/online-cv/">blog post</a> with some notes on how I made it.</p>)
    },
    {
        logo:SheepOfIcelandlogo ,
        companyName:"Sheep Of Iceland" ,
        companyLink:"https://sheepoficeland.huldalilja.com",
        period:"Made in the spring 2017" ,
        description:"Game where you collect sheep in Iceland",
        back:(<p>Unity game made in a three week course at Reykjavík University along two others. The player is a shepherd girl that travels around Iceland collecting her lost sheep.</p>)
    },
    {
        logo:LostInCodelogo,
        companyName:"LostInCode.blog" ,
        companyLink:"https://lostincode.blog",
        period:"Summer 2017 - 2019" ,
        description:"Computer Science's related blog I wrote with two of my friends",
        back:(<p>Three computer scientists graduates from Reykjavík University in Iceland writing a blog about subjects and topics that they find interesting in the field of Computer Science and related areas. <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog">Read on</a>.</p>)
    }
]

export default projects;
