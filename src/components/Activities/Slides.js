import isiimg from "../../assets/carousel/isi.jpg";
import ahugamalislendinga from "../../assets/carousel/ahugamal-islendinga.jpg";
import systur from "../../assets/carousel/systur.jpg";
import sailingimg from "../../assets/carousel/sailing.jpg";
import santander from "../../assets/carousel/santander.JPG"

const slides = [
    {
        text: "My brother and I in a movie called",
        img: ahugamalislendinga,
        link: " Icelandic Hobbies.",
        url: "https://www.youtube.com/watch?v=MQE-UYHYUYc"
    },
    {
        text: "Member of the board in /sys/tur (2016-2017) an organization for female students at the computer science department at Reykjavík University.",
        img: systur
    },
    {
        text: "Been chosen female sailor of the year in Iceland nine times in the last 10 years.",
        img: isiimg
    },
    {
        text: "Secretary of the board for Brokey - Reykjavík Yacht club in 2019.",
        img: sailingimg
    },
    {
        text: "Been an Icelandic representative at various of international",
        img: santander,
        link: " sailing regattas.",
        url: "https://brokey.is/styrkur-vegna-landslidsverkefna/"
    }
]

export default slides;
