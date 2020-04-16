import React, { PureComponent} from 'react'
import "./Activities.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import isiimg from "../../assets/carousel/isi.jpg";
import ahugamalislendinga from "../../assets/carousel/ahugamal-islendinga.jpg";
import systur from "../../assets/carousel/systur.jpg";
import sailingimg from "../../assets/carousel/sailing.jpg";
import santander from "../../assets/carousel/santander.JPG"

class Activities extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            skipOneAutomaticChange: false,
            imgFadeClass: true,
            slideIndex: 0,
            slides: [
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
        }
    }

    componentDidMount() {
        setTimeout(this.automaticNextSlide, 8000);
    }

    automaticNextSlide= (n) => { 
        if (!this.state.skipOneAutomaticChange) {
            this.plusSlides(1);
        }
        else{
            this.setState({skipOneAutomaticChange: false})
        }
        setTimeout(this.automaticNextSlide, 5000);
    }

    plusSlides= (n) => {
        var idx = this.state.slideIndex + n;
        if (idx >= this.state.slides.length) {
            idx = 0;
        }
        else if (idx < 0) {
            idx = this.state.slides.length - 1;
        }
        this.setState({
            skipOneAutomaticChange: true,
            slideIndex: idx,
            imgFadeClass: !this.state.imgFadeClass
        })
    }


    currentSlide = (n) => {
        this.setState({
            skipOneAutomaticChange: true,
            slideIndex: n,
            imgFadeClass: !this.state.imgFadeClass
        })
    }


    render() {
        var slides = this.state.slides;
        var imglink = null;
        var imgClassNames = "carousel-img"
        if (!this.state.imgFadeClass){
            imgClassNames += " fade"
        }
        else {
            imgClassNames += " fade2"
        }
        if (this.state.slides[this.state.slideIndex].link !== undefined) {
            imglink =(
                <a target="_blank" rel="noopener noreferrer" href={this.state.slides[this.state.slideIndex].url}><br/>{this.state.slides[this.state.slideIndex].link}</a>
            )
        }
        return (
            <div id="ActivitiesDiv" className="page">
                <div className="carousel-container">
                    <a href="./" className="anchor" id="Activities">a</a>
                    <div className="title carousel-title">Activities <FontAwesomeIcon icon="anchor" className="wave"/></div>
                    <img className={imgClassNames} alt="" src={this.state.slides[this.state.slideIndex].img}/>
                    <div className="text">{this.state.slides[this.state.slideIndex].text}
                        {imglink}
                    </div>
                    <a className="prev" onClick={ () => {
                            this.plusSlides(-1)
                        }}><span className="center-inside">&#10094;</span></a>
                    <a className="next" onClick={ () => {
                            this.plusSlides(1)
                        }}><span className="center-inside">&#10095;</span></a>
                </div>

                <div className="carousel-dots">

                    {slides.map((item, idx) => {
                        let classNames = "dot";
                        if (this.state.slideIndex === idx) {
                            classNames += " active";
                        }
                        return (
                            <span key={idx} className={classNames} onClick={ () => {
                                this.currentSlide(idx)}}>
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Activities