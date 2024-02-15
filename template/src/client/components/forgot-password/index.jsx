import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { emailValidation } from '../../../helper/helper';
import Alert from '../doctors/Alert/Alert';

const ForgotPassword = (props) => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const showAlertMessage = (message, type) => {
    setCount(1);
    setType(type);
    setMessage(message);
    setShowAlert(true);
  };
  const handlerPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (emailValidation(email)) {
      showAlertMessage("The Email is not valid", "warning");
    }
    if (email === "") {
      showAlertMessage("The Email field is requried", "warning");
    }

    if (email !== "" && !emailValidation(email)) {
      let formData = new FormData();

      formData.append("email", email);

      e.target.reset();

    }
  }
  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  return (
    <>
      <Header {...props} />
      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Account Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="Login Banner"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>Forgot Password?</h3>
                        <p className="small text-muted">
                          Enter your email to get a password reset link
                        </p>
                      </div>
                      {/* Forgot Password Form */}
                      <form onSubmit={handlerPassword}>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control floating"
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/login">
                            Remember your password?
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </form>
                      {/* /Forgot Password Form */}
                    </div>
                  </div>
                </div>
                {/* /Account Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
      <Alert
       count={count}
       message={message}
       setCount={setCount}
       setShow={setShowAlert}
       show={showAlert}
       type={type}
      />

      <Footer {...props} />
    </>
  );
};

export default ForgotPassword;
