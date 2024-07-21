import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import AboutUs from "../../components/aboutUs/AboutUs";
import ContactUs from "../../components/contactUs/ContactUs";
import "./home.css";
import { Element } from "react-scroll";


const Home = () => {
    return (
      <>
      <Navbar type={"notFarming"}/>
      <Element name ="header">
      <Header />
      </Element>
      <Element name="aboutUs">
        <AboutUs />
      </Element>
      <Element name="contactUs">
        <ContactUs />
      </Element>
      </>
    )
}

export default Home;