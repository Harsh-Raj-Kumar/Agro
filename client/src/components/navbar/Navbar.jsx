import React from "react";
import "./navbar.css";
import Logo from "../../images/logo-1.2.png";
import { useState } from "react";
import { Link } from "react-scroll"; // Import from react-scroll
// To navigate to pages thorugh link import from react-router-dom
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Navbar = ({ type, getSensorData,getStartSensorCall, setGetStartSensorCall }) => {

  const user = window.localStorage.getItem("user");
  const [selectedItem, setSelectedItem] = useState("Home");
  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsonHover, setShowOptionsonHover] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();



  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    // itemName === "Info" && navigate("/info");
    // setSelectClicked(true);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleProfile = () => {
    setShowProfileModal(!showProfileModal);
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  }

  const handleReadingClick = () => {
    // getSensorData();
    setGetStartSensorCall(!getStartSensorCall);
  }

  return (
    <div className="navBar">
      <div className="navContainer">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => { navigate("/") }} />
        </div>

        <div className="navItems">
          {!user && type === "notFarming" &&
            <>

              <div className="items home">
                <span
                  className={selectedItem === "Home" ? "activeNavItem" : ""}
                // onClick={() => handleItemClick("Home")}
                >
                  <Link
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as needed
                    duration={700}
                    // activeClass={selectedItem === "Home" ? "activeNavItem" : ""}
                    onMouseOver={() => setShowOptions(false)}
                    onClick={() => {
                      handleItemClick("Home");
                      setShowOptions(false);
                    }}
                  >
                    Home
                  </Link>
                </span>
              </div>
              <div className="items">
                <span
                  className={selectedItem === "About Us" ? "activeNavItem" : ""}
                >
                  <Link
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    onMouseOver={() => setShowOptions(false)}
                    onClick={() => {
                      handleItemClick("About Us");
                      setShowOptions(false);
                    }}
                  >
                    About us
                  </Link>
                </span>
              </div>
              <div className="items">
                <span
                  className={selectedItem === "Info" ? "activeNavItem" : ""}
                  onMouseOver={() => setShowOptionsonHover(true)}
                  onMouseLeave={() => setShowOptionsonHover(false)}
                  onClick={() => {
                    handleItemClick("Info");
                    setShowOptions(!showOptions);
                  }}
                >
                  Farming <ArrowDropDownIcon style={{ fontSize: "small" }} />
                </span>
                {(showOptions || showOptionsonHover) && <div className="Farminglist" onMouseOver={() => setShowOptions(true)}>
                  <div className="options" onClick={() => { navigate("/farming") }}>Vertical</div>
                  <div className="options" onClick={() => { navigate("/farming") }}>Organic</div>
                  <div className="options" onClick={() => { navigate("/farming") }}>Precision</div>
                </div>

                }

              </div>
              <div className="items">
                <span
                  className={selectedItem === "Contact Us" ? "activeNavItem" : ""}
                >
                  <Link
                    to="contactUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onMouseOver={() => setShowOptions(false)}
                    onClick={() => {
                      handleItemClick("Contact Us");
                      setShowOptions(false);
                    }}
                  >
                    Contact us
                  </Link>
                </span>
              </div>

            </>
          }
        </div>


        {!user ?
          <div className="navbtn">
            <div className="Btn">
              <button
                onClick={() => handleLogin()}
              >
                Start Here
              </button>
            </div>
          </div>
          :
          <>
            <div className="avatarbtn">
              <div className="Btn">
                <button
                  onClick={handleReadingClick}
                >
                  {getStartSensorCall ? "Stop " : "Start "} reading
                </button>
              </div>

              
              <div className="circle-avatar" onClick={handleProfile}>
                <span className="avatar-initial">
                  {user.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            {
              showProfileModal && <div className="profile">
                <div className="profileItem">
                  <AccountCircleIcon style={{ color: "teal", fontWeight: "bold" }} />
                  <span style={{ color: "black" }}>{user}</span>
                </div>
                <div className="profileItem" onClick={handleLogout}>
                  <LogoutIcon style={{ color: "teal", fontWeight: "bold" }} />
                  <span style={{ color: "black" }}>Logout</span>
                </div>
              </div>
            }
          </>
        }



      </div>
    </div>
  )
}

export default Navbar;