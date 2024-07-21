import React from "react";
// import {  useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
    // const navigate = useNavigate();

    // const handleLearnMore = () => {
    //     navigate("/login");
    // }



return (
    <div className="header">
       <div className="headerContainer">
           <div className="headerCont-items">
               <span>AGRICULTURAL</span>               
           </div>
           <div className="headerCont-items">
               <span>COMMUNITY</span>
           </div>
           <div className="headerCont-items">
               <span style={{color:"teal"}}>SERVICE</span>
           </div>
           <div className="headerCont-Btn">
            <div className="headbtn">
            <button 
            // onClick={() => handleLearnMore()}
            >
                LEARN MORE
             </button>
            </div>
             
           </div>
       </div>
    </div>
)
}

export default Header;