import HRlogo from "../../assets/hr.svg";
import AUlogo from "../../assets/AU.svg";
import Verzlologo from "../../assets/verzlo.svg";

const schools = [
    {
        logoLink: "https://en.ru.is/st/dcs/graduate-study/msc-software-engineering/",
        logo:HRlogo,
        title:"Reykjavík University",
        period : "2018-2020: Part-time MSc in Software Engineering. Not finished." ,
        extraInfo: "Part-time studies while working as a research assistant.",
    },
    {
        logoLink:"https://ingenioer.au.dk/en/education/international-programme/software-engineering/",
        logo:AUlogo,
        altLogo:"Aarhus University logo",
        title:"Aarhus University",
        period : "2017-2018: One semester exchange studies during BSc studies." ,
        extraInfo: "International programme for Software Engineering.",
    },
    {
        logoLink:"https://en.ru.is/st/dcs/undergraduate-study/bsc-software-engineering/",
        logo:HRlogo,
        title:"Reykjavík University",
        period : "2015-2018: BSc in Software Engineering." ,
        extraInfo: "New-students’ scholarship when I started. After the second and fourth semesters I was a dean's list recipient."
    },
    {
        logoLink:"https://www.verslo.is/english/about-us/",
        logo:Verzlologo,
        title:"Commercial College of Iceland",
        period : "2010-2014: Matriculation exam with focus on math and science." ,
        extraInfo: "Focus on math and science."
    }
]

export default schools;