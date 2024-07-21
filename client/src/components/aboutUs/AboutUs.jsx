import "./aboutUs.css";
import suggu from "../../images/sugam.jpeg";
import arnav from "../../images/arnav.jpg";
import Nits from "../../images/NitS.jpg";

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs-left">
                <div className="left-1">
                    <img src={arnav} alt="" className="leftImg" />
                </div>
                <div className="left-2">
                    <img src={Nits} alt="" className="leftImg" />
                </div>
                <div className="left-3">
                    <img src={suggu} alt="" className="leftImg" />
                </div>
            </div>
            <div className="aboutUs-right">
                <div className="rightFirst">
                    <span>ABOUT US</span>
                </div>
                <div className="rightSecond">
                    <p>At AgroGuide, our mission is to empower individuals and communities to make informed
                        decisions about agriculture. We believe that agriculture plays a vital role in sustaining
                        our planet and feeding its inhabitants. With this in mind, we are committed to promoting
                        sustainable and responsible farming practices that benefit both the environment and society.
                    </p>
                    <p>AgroGuide is not just a website. It's a community of farmers and agriculture enthusiasts.
                        Join our forums, share your experiences, and connect with like-minded individuals who share
                        your passion for agriculture.
                    </p>
                </div>
                <div className="rightThird">
                    <button className="rightThirdBtn"> Learn More </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;