import HRlogo from "../../assets/hr.svg";
import Mimirlogo from "../../assets/mimir.svg";
import NPAlogo from "../../assets/npa.svg";
import Brokeylogo from "../../assets/brokey.svg";
import Reglalogo from "../../assets/regla.svg";
import React from 'react'

const works = [
    {
        logo:Reglalogo,
        companyName:"Regla ehf/ Fakta ehf",
        companyLink:"https://www.regla.is/is/vorur/verkbokhald/",
        period:"Summers of 2017 and 2018, part-time 2018-2020" ,
        description:"Cross-platform and web developer",
        back:(<p>Made the company’s first cross-platform mobile app(Xamarin Forms), available on android and iOS. Made a responsive website(ASP.NET) with some of the company’s features as well as new ones that required adopting all layers.</p>)
    },
    {
        logo:HRlogo, 
        companyName:"Reykjavík University", 
        companyLink:"http://datawell.ru.is",
        period:"August 2018 - Spring 2020" ,
        description:"Research assistant, working as a full-stack developer",
        back:(<p>Creating a sport and health data platform(Datawell) in Django and React in cooperation with the Sports Science Department. Automatically gathering consecutive and single measurements and visualizing the data.</p>)
    },
    {
        logo:Mimirlogo, 
        companyName:"Mímir símenntun", 
        companyLink:"https://www.mimir.is/is/moya/page/staerdfraedi-menntastodir",
        period:"Winter 2019-2020" ,
        description:"Math teacher at a high school level",
        back:(<p>Teaching math at a high school level for individuals returning to school along with my dad. Part-time remotely due to circumstances. Inspired me to write a post about <a target="_blank" rel="noopener noreferrer" href="https://lostincode.blog/2020/03/11/studying-math-focus/">studying math</a>.</p>)
    },
    {
        logo:NPAlogo ,
        companyName:"NPA miðstöðin" ,
        companyLink:"https://www.npa.is",
        period:"2014-2015" ,
        description:"Assistant to a paraplegic person",
        back:(<p>Duties included assisting a paraplegic person that is deaf-blind with everyday life. Used tactile signing to communicate with her on a daily basis.</p>)
    },
    {
        logo:Brokeylogo ,
        companyName:"Brokey - Reykjavík Yacht club " ,
        companyLink:"https://www.brokey.is",
        period:"Summers 2011-2015" ,
        description:"Dinghy sailing coach" ,
        back:(<p>Taught beginners to sail in the summer. I held courses at the sailing club alongside two More employees.</p>)
    }
]

export default works;