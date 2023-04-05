import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return ( 
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Convallis interdum purus adipiscing dis parturient
                    posuere ac a quam a eleifend montes parturient posuere
                    curae tempor
                </p>
                <div className="ctas">
                    <div className="banner-cta">read more</div>
                    <a href="#shopmore" spy={true} smooth={true} duration={500}>
                    <div className="banner-cta v2">shop now</div></a>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>
    );
};

export default Banner;
