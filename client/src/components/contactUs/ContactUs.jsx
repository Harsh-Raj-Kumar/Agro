import "./contactUs.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from "../../images/cs-2.jpeg";


const ContactUs = () => {
    return (
        <div className="ContactUs">
            <div className="ContactUsTop">
                <div className="topfirst">
                    <div className="topFirstItem">
                        <div className="topFirstItem-1">
                            <img src={Logo} alt="logo" />
                            <div className="topFirstItem-1-text">
                                <h2>Smart Farming</h2>
                                <h4>Sustainable Future</h4>
                            </div>
                        </div>
                        <div className="topFirstItem-2">
                            <p>Our vision is to empower farmers worldwide with cutting-edge IoT solutions,
                                transforming the way they cultivate crops, raise livestock, and manage agricultural resources.
                            </p>
                        </div>
                        <div className="topFirstItem-3">
                            <FacebookIcon
                                style={{ fontSize: "2rem", color: " #0866FF" }}
                            />
                            <InstagramIcon
                                style={{ fontSize: "2rem" }}
                                className="instaIcon"
                            />
                            <TwitterIcon
                                style={{ fontSize: "2rem", color: " #26a7de" }}
                            />
                            <LinkedInIcon
                                style={{ fontSize: "2rem", color: " #0072b1" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="topSecond">
                    <div className="topSecondItem">
                        <div className="itemHeader">
                            QUICK LINKS
                        </div>
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Info</span>
                        <span>Contact Us</span>
                    </div>
                </div>
                <div className="topThird">
                    <div className="topThirdItem">
                        <div className="itemHeader">
                            CONTACTS
                        </div>
                        <div className="topThirdItems">
                            <div className="topThirdItemIcon">
                                <RoomIcon
                                    style={{ fontSize: "1rem", color: "white" }}
                                />
                            </div>
                            <div className="topThirdItemDetails">
                                <span>210, Jawahar Marg,</span>
                                <span>M.P - 454001</span>
                            </div>
                        </div>
                        <div className="topThirdItems">
                            <div className="topThirdItemIcon">
                                <PhoneIcon
                                    style={{ fontSize: "1rem", color: "white" }}
                                />
                            </div>
                            <div className="topThirdItemDetails">
                                <span>Local: +91 8210555662</span>
                                <span>Toll Free: +91 1800522222</span>
                            </div>
                        </div>
                        <div className="topThirdItems">
                            <div className="topThirdItemIcon">
                                <EmailIcon
                                    style={{ fontSize: "1rem", color: "white" }}
                                />
                            </div>
                            <div className="topThirdItemDetails">
                                <span>info@agroguide.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topFourth">
                    <div className="topFourthItem">
                        <div className="itemHeader">
                            NEWS LETTER
                        </div>
                        <div className="topFourthItem-1">
                            <input type="email"
                                placeholder="Enter Your Email"
                                className="emailSearchInput"
                            //     onChange={e=>setDestination(e.target.value)}
                            />
                            <div className="emailBtn">
                                <TelegramIcon
                                    style={{ fontSize: "2rem", color: "white" }}
                                    className="telegramIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ContactUsBottom">
                <span>Copyright © 2023 AgroGuide. All rights reserved.</span>
            </div>
        </div>
    )
}

export default ContactUs;