import React, { useState } from "react";
import "./login.css";
import axios from "axios";
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import HttpsIcon from '@mui/icons-material/Https';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSuccess } from "../../redux/actions/toast.action";
import { ToastContainer } from "react-toastify";
import { saveUserInfo } from "../../redux/actions/user.action";
import { BASE_URL } from "../../assests/UrlUtils";

const Login = () => {

    const myStorage = window.localStorage;
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);

    const [registerFormData, setRegisterFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleIconClick = () => {
        navigate("/");
    }

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterFormData({
            ...registerFormData,
            [name]: value
        });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name]: value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${BASE_URL}/user/register`, registerFormData);
            if (res.status === 200) {
                setRegisterFormData({
                    username: '',
                    email: '',
                    password: ''
                });
                dispatch(showSuccess(`${registerFormData.username} has been registered`));

            }

        } catch (err) {
            console.log("Couldn't register", err);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${BASE_URL}/user/login`, loginFormData);
            if (res.status === 200) {
                setLoginFormData({
                    email: '',
                    password: ''
                });
                // dispatch(showSuccess(`${registerFormData.username} has been registered`));
                console.log(res.data);
                dispatch(saveUserInfo(res.data));
                myStorage.setItem("user",res.data.username);
                navigate("/sensor");
            }
        } catch (err) {
            console.log("Couldn't register", err);
        }
    }

    return (
    <>
        
        <div className="Login">
        {/* <ToastContainer /> */}
            <div className="loginContainer">
                <CancelIcon className="materialIcon"
                    onClick={() => handleIconClick()}
                />
                {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}

                <div className="signUp">
                
                    <form onSubmit={handleRegister}>
                        <label
                            for="chk"
                            aria-hidden="true"
                            onClick={() => {
                                console.log(check);
                                setCheck(!check)
                            }}
                            style={check ? { transform: `scale(${.6})` } : {}}
                        > Sign up </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="User name"
                            value={registerFormData.username}
                            onChange={handleRegisterChange}
                            required=""
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={registerFormData.email}
                            onChange={handleRegisterChange}
                            required=""
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={registerFormData.password}
                            onChange={handleRegisterChange}
                            required=""
                        />
                        <button>Sign up</button>
                    </form>

                </div>

                <div
                    className={check ? "activateSignIn" : "signIn"}
                // style={ check ?  {  transform:`translateY(${-500})` } : {transform:`translateY(${-180})`}}
                >
                    <form onSubmit={handleLogin}>

                        <label
                            for="chk"
                            aria-hidden="true"
                            onClick={() => setCheck(!check)}
                            style={check ? { color: "green", transform: `scale(${1})` } : {}}
                        >
                            Login
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={loginFormData.email}
                            onChange={handleLoginChange}
                            required="" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginFormData.password}
                            onChange={handleLoginChange}
                            required="" />

                        <button>Login</button>
                    </form>

                </div>
            </div>




        </div>
    </>
    )
}

export default Login;