import LostInCodelogo from "../../assets/lostincode.svg";
import SheepOfIcelandlogo from "../../assets/sheepoficeland.png"
import HLHlogo from "../../assets/HLH.svg"
import React from 'react'

const projects = [
    {
        logo:LostInCodelogo,
        companyName:"LostInCode.blog" ,
        companyLink:"https://lostincode.blog",
        period:"Started summer 2017" ,
        description:"Computer Science's related blog I write with two of my friends",
        back:(<p>Three computer scientists graduates from Reykjavík University in Iceland writing a blog about subjects and topics that they find interesting in the field of Computer Science and related areas. <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog">Read on</a>.</p>)
    },
    {
        logo:HLHlogo, 
        companyName:"huldalilja.com" ,
        companyLink:"https://huldalilja.com/huldaliljaold",
        period:"Made in 2018" ,
        description:"My old website",
        back:(<p>My old website. Stopped updating in spring 2020. I made a <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog/2018/10/23/online-cv/">blog post</a> with some notes on how I made it.</p>)
    },
    {
        logo:SheepOfIcelandlogo ,
        companyName:"Sheep Of Iceland" ,
        companyLink:"https://huldalilja.com/sheepoficeland",
        period:"Made in the spring 2017" ,
        description:"Game where you collect sheep in Iceland",
        back:(<p>Unity game made in a three week course at Reykjavík University along two others. The player is a shepherd girl that travels around Iceland collecting her lost sheep.</p>)
    }
]

export default projects;
