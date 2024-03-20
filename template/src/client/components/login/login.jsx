/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
// import { useHistory } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
// const config = "/react/template/";
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/Auth/auth';
import Alert from "../doctors/Alert/Alert";
import { emailValidation } from '../../../helper/helper';
import axios from 'axios';


const LoginContainer = (props) => {
  // const history = useHistory();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  // const history = useHistory();

  const showAlertMessage = (type, message) => {
    setCount(1);
    setMessage(message);
    setType(type);
    setShowAlert(true);
  };

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const handlerLogin = async (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (passwordValue === "") {
      showAlertMessage("warning", "The password field is required!");
    }
    if (emailValidation(emailValue)) {
      showAlertMessage("warning", "The Email is not valid");
    }
    if (emailValue === "") {
      showAlertMessage("warning", "The Email field is requried");
    }
    if (emailValue && !emailValidation(emailValue) && passwordValue) {
      let formData = new FormData();
      formData.append("email", emailValue);
      formData.append("password", passwordValue);
      formData.append("guard", "doctor");
      
      await axios.post(`${props.backendUrl}/login`, formData).then((res) => {
        localStorage.setItem("access_token", res.data?.data?.token);
        localStorage.setItem("name", res.data?.data?.name);
        dispatch(setAuth(true));
        navigate("/doctor/doctor-dashboard")
      }).catch((err) => {
        console.log(err);
      });
    }
  }
  return (
    <>
      <Header {...props} />

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Login <span>Doccure</span>
                        </h3>
                      </div>
                      <form onSubmit={handlerLogin}>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            ref={emailRef}
                            className="form-control floating"
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            ref={passwordRef}
                            className="form-control floating"
                          />
                          <label className="focus-label">Password</label>
                        </div>
                        <div className="text-end">
                          <Link
                            className="forgot-link"
                            to="/pages/forgot-password"
                          >
                            Forgot Password ?
                          </Link>
                        </div>

                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Login
                        </button>
                        <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <Link to="/index" className="btn btn-facebook w-100">
                              <i className="fab fa-facebook-f me-1" /> Login
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link to="/index" className="btn btn-google w-100">
                              <i className="fab fa-google me-1" /> Login
                            </Link>
                          </div>
                        </div>
                        <div className="text-center dont-have">
                          Don’t have an account?{" "}
                          <Link to="/doctor/doctor-register">Register</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
      <Alert
        count={count}
        message={message}
        setCount={setCount}
        setShow={setShowAlert}
        show={showAlert}
        type={type}
      />
    </>
  );
};

export default LoginContainer;
