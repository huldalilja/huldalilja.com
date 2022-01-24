import HRlogo from "../../assets/media/hr.svg";
import AUlogo from "../../assets/media/AU.svg";
import ETHlogo from "../../assets/media/eth.svg"
import Verzlologo from "../../assets/media/verzlo.svg";

const schools = [
    {
        logoLink: "https://en.ru.is/st/dcs/graduate-study/msc-software-engineering/",
        logo:ETHlogo,
        title:"Eidgenössische Technische Hochschule Zürich",
        period : "2020-: MSc in Computer Science" ,
        extraInfo: "Major in Data Management Systems and minor in Theoretical Computer Science.",
    },
    {
        logoLink:"https://en.ru.is/st/dcs/undergraduate-study/bsc-software-engineering/",
        logo:HRlogo,
        title:"Reykjavík University",
        period : "2015-2018: BSc in Software Engineering." ,
        extraInfo: "New-students’ scholarship when I started. After the second and fourth semesters I was a dean's list recipient."
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
        logoLink:"https://www.verslo.is/english/about-us/",
        logo:Verzlologo,
        title:"Commercial College of Iceland",
        period : "2010-2014: Matriculation exam." ,
        extraInfo: "Focus on math and science."
    }
]

export default schools;