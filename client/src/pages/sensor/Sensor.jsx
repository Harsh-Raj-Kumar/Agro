import React, { useEffect, useRef, useState } from "react";
import "./sensor.css";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import CancelIcon from '@mui/icons-material/Cancel';
// import { useNavigate } from "react-router-dom";
import ContactUs from "../../components/contactUs/ContactUs";
import HighchartsReact from "highcharts-react-official"
import Highcharts from 'highcharts';
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";
import { useDispatch } from "react-redux";
import { showError } from "../../redux/actions/toast.action";
import { ToastContainer } from "react-toastify";
import { Alert } from "@mui/material";
import { BASE_URL, ESP_URL, SMS_RECEIVER, SMS_MESSAGE } from "../../assests/UrlUtils";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const Sensor = () => {

    // const navigate = useNavigate();

    const dispatch = useDispatch();

    const [getStartSensorCall, setGetStartSensorCall] = useState(true);
    const [saveSensorData, setSaveSensorData] = useState(false);

    const [temperature, setTemperature] = useState(0.0);
    const [moisture, setMoisture] = useState(0.0);
    const [readingTime, setReadingTime] = useState('');

    const [lineGraphData, setLineGraphData] = useState([]);

    const [showMoistureAlert, setShowMoistureAlert] = useState(false);

    const [motorON, setMotorON] = useState(false);

    // const dhtData = [0.3, 2.5, 9.76, 12.6, 30.6, 52.8, 34.8, 78.8, 65.6, 97.8];
    // const moistureData = [0.6, 9.5, 18.2, 34.9, 11.6, 60.6, 58.8, 88.8, 16.6, 94.8];
    // const timeData = ['12:00 PM', '12:10 PM', '12:20 PM', '12:30 PM', '12:40 PM', '12:50 PM', '01:00 PM', '01:10 PM', '01:20 PM', '01:30 PM'];

    const getSensorData = async () => {
        console.log("sensor data is called");
        try {
            const res = await axios.get(`${ESP_URL}/data`);
            // console.log(res.data);
            const arr = res.data.split(":");
            // console.log(arr);
            var temp = arr[1].split('C\n')[0].trim();
            temp = temp.split(' ')[0];
            setTemperature(parseFloat(temp));
            var moist = arr[3].trim();
            moist = moist.split(' ')[0];
            const moistureValue = parseFloat(1024.0 - parseFloat(moist));
            setMoisture(moistureValue);
            if (parseFloat(moistureValue) < 400) {
                setShowMoistureAlert(true);
                notifySMS();
            }
            getSensorReadingTime();
            setSaveSensorData(true);
        } catch (err) {
            console.log("Couldn't fetch sensor data", err);
        }
    }

    const getSensorReadingTime = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
        setReadingTime(`${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`);
    }

    const getLineGraphData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/sensor`);
            // console.log(res.data);
            setLineGraphData(res.data)
        } catch (err) {
            console.log("Couldn't fetch sensor data for line graph", err);
        }
    }


    const postingSensorData = async () => {
        try {
            const sensorData = {
                temperature_in_c: temperature,
                moisture: moisture,
                time: readingTime
            };
            const res = await axios.post(`${BASE_URL}/sensor`, sensorData);
            // console.log(res.data);
            setSaveSensorData(false);
        } catch (err) {
            console.log("Couldn't post sensor data to database", err);
        }
    }

    const notifySMS = async () => {
        try {
            const message = {
                message: SMS_MESSAGE,
                to: SMS_RECEIVER,
            };
            const res = await axios.post(`${BASE_URL}/notify`, message);
            console.log(res.data);
        } catch (err) {
            console.log("Couldn't notify the user with SMS", err);
        }
    }

    useEffect(() => {
        if (saveSensorData) postingSensorData();
    }, [saveSensorData]);

    useEffect(() => {
        // getSensorData();
        if(getStartSensorCall) {
            const interval = setInterval(getSensorData, 5000);
      
          // Cleanup function to clear the interval when component unmounts
          return () => clearInterval(interval);
        }
      
        getLineGraphData();
    }, [getStartSensorCall]);

    useEffect(() => {  
      getLineGraphData();
    }, []);


    var dhtData = [];
    var moistureData = [];
    var timeData = [];

    for (var i = 0; i < lineGraphData.length; i++) {
        dhtData.push(lineGraphData[i].temperature_in_c);
        moistureData.push(lineGraphData[i].moisture);
        timeData.push(lineGraphData[i].time);
    }


    const lineGraphOptions = {
        chart: {
            width: 800,
            height: 500,
            backgroundColor: 'whitesmoke'
        },
        title: {
            text: 'Temperature & Moisture',
            align: 'center'
        },
        subtitle: {
            text: 'Sensor readings',
            align: 'center'
        },
        yAxis: {
            title: {
                text: '' // Customize axis title
            },
            min: 0, // Set minimum value for Y-axis
            max: 1000, // Set maximum value for Y-axis
            tickInterval: 100, // Set the interval between ticks
            lineWidth: 1,
            tickWidth: 1, // Set the width of Y-axis ticks
            tickLength: 5, // Set the length of Y-axis ticks
            labels: {
                style: {
                    color: '#333' // Customize axis label color
                }
            }
        },
        xAxis: {
            // accessibility: {
            //     rangeDescription: 'Range: 1 to 10'
            // },
            categories: timeData,
            lineWidth: 1,
            tickWidth: 1, // Set the width of Y-axis ticks
            tickLength: 6,
            tickmarkPlacement: 'on'
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: timeData[0], // Start time for the first data point (Assuming May 12, 2024, 12:00 PM)
                // pointInterval: 600000,
            }
        },
        tooltip: {
            formatter: function () {
                // const index = this.point.x - timeData[0] / 600000; 
                return '<b>' + this.series.name + ' : ' + '</b>' + this.y + ` ${this.series.name === "DHT" ? "&deg;C" : "%"}` + '</br>' +
                    `<b>Time : </b>${timeData[this.point.x]} <br/>`;
                // 'X: ' + this.x + '<br/>' +
            }
        },
        series: [
            {
                name: 'DHT',
                data: dhtData,
                color: '#e57c00'
            },
            {
                name: 'Moisture',
                data: moistureData,
                color: 'teal'
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 300
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },
        credits: {
            enabled: false,
        }
    };

    const temperatureGaugeOptions = {
        chart: {
            type: "solidgauge",
            width: 320,
            height: 240,
            backgroundColor: 'whitesmoke'
        },
        title: {
            text: 'Temperature Reading',
            align: 'center'
        },
        yAxis: {
            min: 0,
            max: 100,
            tickInterval: 20, // Set tick interval to 20
            tickWidth: 1,
            tickLength: 6,
            minorTickInterval: null,
            // labels: {
            //     y: 0
            //   }
        },
        series: [
            {
                name: "DHT",
                data: [{
                    color: '#e57c00',
                    y: temperature
                }],
                dataLabels: {
                    format:
                        '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">°C</span>' +
                        '</div>'
                }
            }
        ],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} &deg;C</b>'
        },
        credits: {
            enabled: false,
        }
    };

    const moistureGaugeOptions = {
        chart: {
            type: "solidgauge",
            width: 320,
            height: 240,
            backgroundColor: 'whitesmoke'
        },
        title: {
            text: 'Moisture Reading',
            align: 'center'
        },
        yAxis: {
            min: 0,
            max: 1000,
            tickInterval: 200, // Set tick interval to 20
            tickWidth: 1,
            tickLength: 6,
            minorTickInterval: null,
            // labels: {
            //     y: 0
            //   }
        },
        series: [
            {
                name: 'Moisture',
                data: [{
                    color: `${(moisture < 400.0 ? "red" : (moisture >400.0 && moisture < 600.0) ? "yellow" : "green")}`,
                    y: moisture
                }],
                dataLabels: {
                    format:
                        '<div style="text-align:center">' +
                        '<span style="font-size:25px">{y}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">°C</span>' +
                        '</div>'
                }


            }
        ],
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y} %</b>'
        },
        credits: {
            enabled: false,
        }
    };

    const sendDataToSensor = async () => {
        try {
            const response = await axios.post(`${ESP_URL}/data`, "ON");

            if (response.status === 200) {
                setMotorON(!motorON);
                console.log('Data sent successfully');
            } else {
                console.log("Data couldn't be sent");
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }


    return (

        <>
            <Navbar getSensorData={getSensorData} getStartSensorCall={getStartSensorCall} setGetStartSensorCall={setGetStartSensorCall} />

            <div className="sensorContainer">
                {showMoistureAlert &&
                    <div className="moistureAlert">
                        <Alert variant="filled" severity="error" onClose={() => {setShowMoistureAlert(false)}}
                            style={
                                {
                                    width: '310px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }
                            }>
                            Moisture percentage is too low !
                        </Alert>
                    </div>

                }
                <div className="sensorContHeading">

                </div>
                <div className="sensorContMiddle">
                    <div className="lineGraphContainer">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={lineGraphOptions}
                        />
                    </div>
                    <div className="gaugeContainer">
                        <div className="gaugeGraphCont">
                            <HighchartsReact highcharts={Highcharts} options={temperatureGaugeOptions} />
                        </div>
                        <div className="gaugeGraphCont">
                            <HighchartsReact highcharts={Highcharts} options={moistureGaugeOptions} />
                        </div>
                    </div>
                </div>
                <div className="sensorContBottom">
                    <div className="sensorContBottomRight">
                        {/* <button onClick={()=>{}}>Download report</button> */}
                    </div>
                    <div className="sensorContBottomLeft">
                        <button  onClick={sendDataToSensor}>{motorON ? "Stop " : "Start "}motor</button>
                    </div>

                </div>
            </div>
            <ContactUs />
        </>

    )
}

export default Sensor;