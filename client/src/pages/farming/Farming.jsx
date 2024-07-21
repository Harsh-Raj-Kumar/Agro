import React from "react";
import "./farming.css";
import Navbar from "../../components/navbar/Navbar";
import ContactUs from "../../components/contactUs/ContactUs";
import Image from "../../images/vertival_Farm.jpg";
import Image1 from "../../images/vFarm-2.jpg";
import Image2 from "../../images/instrument-1.jpg";
import EC from "../../images/EC.png";
import IC from "../../images/IC.png";
import pH from "../../images/pH.png";
import Soil from "../../images/Soil.png";


const Farming = () => {
    return (
        <>
            <Navbar />
            <div className="farmingContainer">
                <div className="farmContTop">
                    <div className="farmContTop-left">
                        <div className="farmContTop-left-heading">
                            Vertical Farming
                        </div>
                        <div className="farmContTop-left-info">
                            <div className="farmContTop-left-info-para">
                                Vertical farming is an innovative and sustainable agricultural practice that involves
                                growing crops in vertically stacked layers or vertically inclined surfaces, often in
                                controlled indoor environments. This method aims to maximize the use of space,
                                increase crop yields, and minimize resource consumption.
                                It represents a forward-thinking approach to agriculture, addressing
                                the challenges of population growth, urbanization, and climate change by providing
                                a more sustainable and efficient way to produce food.
                            </div>
                        </div>
                        <div className="farmContTop-left-info-marker">

                        </div>
                    </div>
                    <div className="farmContTop-right">
                        <img src={Image} alt="" className="farmContTop-right-Img" />
                    </div>
                </div>
                <div className="farmContBottom">
                    <div className="farmContBottom-heading">
                        <img src={Image1} alt="" className="farmContBottom-heading-img" />
                        <div className="farmContBottom-heading-stroke">

                        </div>
                        <div className="farmContBottom-heading-title">
                            Process Involved in Vertical Farming
                        </div>
                    </div>
                    <div className="farmContBottom-process">
                        <div className="farmContBottom-process-items">
                            <div className="farmContBottom-process-items-title">
                                Vertical Structure design
                                <div className="farmContBottom-process-items-horizontal-stroke">

                                </div>
                            </div>
                            <div className="farmContBottom-process-items-body">
                                <div className="farmContBottom-process-items-body-top">
                                    Key Points :
                                </div>
                                <div className="farmContBottom-process-items-body-bottom">
                                  Plan and build vertical farming structures with multiple layers or towers,
                                  optimizing space usage. Design each layer to accommodate crops.
                                </div>
                            </div>
                            <div className="farmContBottom-process-items-button">
                                Learn More
                            </div>
                        </div>
                        <div className="farmContBottom-process-items">
                            <div className="farmContBottom-process-items-title">
                                Climate Control
                                <div className="farmContBottom-process-items-horizontal-stroke">

                                </div>
                            </div>
                            <div className="farmContBottom-process-items-body">
                                <div className="farmContBottom-process-items-body-top">
                                    Key Points :
                                </div>
                                <div className="farmContBottom-process-items-body-bottom">
                                Implement HVAC systems to regulate temperature, humidity, and airflow in each 
                                cultivation layer. This ensures a stable and optimal microclimate.
                                </div>
                            </div>
                            <div className="farmContBottom-process-items-button">
                                Learn More
                            </div>
                        </div>
                        <div className="farmContBottom-process-items">
                            <div className="farmContBottom-process-items-title">
                                LED Lights Installation
                                <div className="farmContBottom-process-items-horizontal-stroke">

                                </div>
                            </div>
                            <div className="farmContBottom-process-items-body">
                                <div className="farmContBottom-process-items-body-top">
                                    Key Points :
                                </div>
                                <div className="farmContBottom-process-items-body-bottom">
                                   Install LED grow lights to simulate natural sunlight for photosynthesis. 
                                   These lights provide a controlled light spectrum & promots plant growth.
                                </div>
                            </div>
                            <div className="farmContBottom-process-items-button">
                                Learn More
                            </div>
                        </div>
                        <div className="farmContBottom-process-items">
                            <div className="farmContBottom-process-items-title">
                                Nutrient Monitoring
                                <div className="farmContBottom-process-items-horizontal-stroke">

                                </div>
                            </div>
                            <div className="farmContBottom-process-items-body">
                                <div className="farmContBottom-process-items-body-top">
                                    Key Points :
                                </div>
                                <div className="farmContBottom-process-items-body-bottom">                           
                                  Utilize sensors to check nutrient concentrations in hydroponic or aeroponic solutions. 
                                  By constantly monitoring, growers can adjust nutrient levels.
                                </div>
                            </div>
                            <div className="farmContBottom-process-items-button">
                                Learn More
                            </div>
                        </div>
                    </div>
                    <div className="farmContBottom-heading">
                        <img src={Image2} alt="" className="farmContBottom-heading-img" />
                        <div
                            className="farmContBottom-heading-stroke"
                        // style={{backgroundColor:"#e57c00"}}
                        >
                        </div>
                        <div
                            className="farmContBottom-heading-title"
                        // style={{color:"teal"}}
                        >
                            Instruments & Sensors
                        </div>
                    </div>
                    <div className="farmContBottom-instruments">
                        <div className="farmContBottom-instruments-items">
                            <div className="farmContBottom-instruments-content">
                                <div className="farmContBottom-instruments-content-title">
                                    Climate Sensors
                                    <div className="farmContBottom-instruments-content-title-horizontal-stroke">

                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-body">
                                    <div className="farmContBottom-instruments-content-body-top">
                                        Integrated climate sensors monitor and regulate temperature, humidity, and
                                        other environmental variables within each cultivation layer. This data is crucial
                                        for HVAC systems to create an optimal microclimate for plant growth in the
                                        vertical structure.
                                    </div>
                                    <div className="farmContBottom-instruments-content-body-bottom">
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                fontFamily: "'Lora', serif",
                                                fontSize: "18px",
                                                color: "#e57c00"
                                            }}
                                        >
                                            Example :
                                        </span>
                                        &nbsp;
                                        <span
                                            style={{
                                                fontFamily: " 'Lobster', sans-serif",
                                                fontSize: "18px",
                                                color: "#2a2b2e"
                                            }}
                                        >
                                            Integrated climate sensors.
                                        </span>
                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-button">
                                    Learn More
                                </div>
                            </div>
                            <img src={IC} alt="" className="farmContBottom-instruments-img" />
                        </div>
                        <div className="farmContBottom-instruments-items">
                            <img src={EC} alt="" className="farmContBottom-instruments-img" />
                            <div className="farmContBottom-instruments-content">
                                <div className="farmContBottom-instruments-content-title">
                                    Nutrient Sensors
                                    <div className="farmContBottom-instruments-content-title-horizontal-stroke">

                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-body">
                                    <div className="farmContBottom-instruments-content-body-top">
                                        EC sensors measure the electrical conductivity of nutrient solutions in
                                        hydroponic or aeroponic systems. By continuously monitoring nutrient levels, growers
                                        can adjust the nutrient composition to meet the specific needs of plants in each vertical
                                        layer, optimizing resource use.
                                    </div>
                                    <div className="farmContBottom-instruments-content-body-bottom">
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                fontFamily: "'Lora', serif",
                                                fontSize: "18px",
                                                color: "#e57c00"
                                            }}
                                        >
                                            Example :
                                        </span>
                                        &nbsp;
                                        <span
                                            style={{
                                                fontFamily: " 'Lobster', sans-serif",
                                                fontSize: "18px",
                                                color: "#2a2b2e"
                                            }}
                                        >
                                            Electrical conductivity (EC) sensors.
                                        </span>
                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-button">
                                    Learn More
                                </div>
                            </div>
                        </div>
                        <div className="farmContBottom-instruments-items">
                            <div className="farmContBottom-instruments-content">
                                <div className="farmContBottom-instruments-content-title">
                                    Moisture Sensors
                                    <div className="farmContBottom-instruments-content-title-horizontal-stroke">

                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-body">
                                    <div className="farmContBottom-instruments-content-body-top">
                                        Moisture sensors, such as tensiometers or capacitance sensors, measure
                                        soil moisture levels in the growing medium. These sensors prevent overwatering or
                                        underwatering by providing real-time data on moisture content, enabling automated
                                        irrigation adjustments for each vertical layer.
                                    </div>
                                    <div className="farmContBottom-instruments-content-body-bottom">
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                fontFamily: "'Lora', serif",
                                                fontSize: "18px",
                                                color: "#e57c00"
                                            }}
                                        >
                                            Example :
                                        </span>
                                        &nbsp;
                                        <span
                                            style={{
                                                fontFamily: " 'Lobster', sans-serif",
                                                fontSize: "18px",
                                                color: "#2a2b2e"
                                            }}
                                        >
                                            Tensiometers or capacitance sensors.
                                        </span>
                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-button">
                                    Learn More
                                </div>
                            </div>
                            <img src={Soil} alt="" className="farmContBottom-instruments-img" />
                        </div>
                        <div className="farmContBottom-instruments-items">
                            <img src={pH} alt="" className="farmContBottom-instruments-img" />
                            <div className="farmContBottom-instruments-content">
                                <div className="farmContBottom-instruments-content-title">
                                    pH Sensors
                                    <div className="farmContBottom-instruments-content-title-horizontal-stroke">

                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-body">
                                    <div className="farmContBottom-instruments-content-body-top">
                                        pH sensors monitor the acidity or alkalinity of nutrient solutions in vertical
                                        farming. Automated pH sensors ensure that the pH remains within the optimal range for
                                        nutrient uptake, preventing imbalances and supporting healthy plant development
                                        across multiple layers.
                                    </div>
                                    <div className="farmContBottom-instruments-content-body-bottom">
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                fontFamily: "'Lora', serif",
                                                fontSize: "18px",
                                                color: "#e57c00"
                                            }}
                                        >
                                            Example :
                                        </span>
                                        &nbsp;
                                        <span
                                            style={{
                                                fontFamily: " 'Lobster', sans-serif",
                                                fontSize: "18px",
                                                color: "#2a2b2e"
                                            }}
                                        >
                                            pH meters or sensors.
                                        </span>
                                    </div>
                                </div>
                                <div className="farmContBottom-instruments-content-button">
                                    Learn More
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs />
        </>

    );
}

export default Farming;