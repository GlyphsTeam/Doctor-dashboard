import React, { useEffect, useRef, useState } from "react";
// import loginBanner from '../../../assets/images/login-banner.png';
import Logo from "../../../assets/images/logo.png";
// import camera from '../../../assets/images/icons/camera.svg';
// import male from '../../../assets/images/icons/male.png'
// import female from '../../../assets/images/icons/female.png'

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  setCardNumber,
  setCertfcation,
  setDate,
  setDoctorID,
  setGender,
  setImage,
  setName,
  setNationality,
  setPassword,
  setPhone,
  setSpecialities,
  setUploadImg,
  setCity, 
  setState

} from '../../../../store/Register/register';
import Alert from '../Alert/Alert';

const Registerstepthree = () => {
  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.register);


  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [count, setCount] = useState(0);


  const showAlertMessage = (message, type) => { 
    setShowAlert(true);
    setMessage(message);
    setCount(1);
    setType(type);
  }
  const handlerRegister = (e) => {
    e.preventDefault();

    const stateValue = stateRef.current.value;
    const cityValue = cityRef.current.value;

    if(!stateValue){
      showAlertMessage("State is required.", "warning");
    }

    if(!cityValue){
      showAlertMessage( "City is required.", "warning" );
    }
    if(stateValue && cityValue) {
      let formData = new FormData();

      formData.append("name", registerState.name);
      formData.append("password", registerState.password);
      formData.append("phone", registerState.phone);
      formData.append("img", registerState.img);
      formData.append("gender", registerState.gender);
      formData.append("address", registerState.address);
      formData.append("certifcate", registerState.certifcate);
      formData.append("uploadImg", registerState.uploadImg);
      formData.append("date", registerState.date);
      formData.append("cardNumber", registerState.cardNumber);
      formData.append("nationality", registerState.nationality);
      formData.append("doctorId", registerState.doctorId);
      formData.append("specialities", registerState.specialities);

      dispatch(setDoctorID(""));
      dispatch(setCardNumber(""));
      dispatch(setNationality(""));
      dispatch(setSpecialities(""));
      dispatch(setPassword(""));
      dispatch(setPhone(""));
      dispatch(setUploadImg(null));
      dispatch(setGender(""));
      dispatch(setImage(null));
      dispatch(setName(""));
      dispatch(setCertfcation(null));
      dispatch(setCity(""));
      dispatch(setState(""));
      dispatch(setDate(""));


    }
  }

  return (
    <>
      <>
        {/* Page Content */}
        <div className="content login-page pt-0">
          <div className="container-fluid">
            {/* Register Content */}
            <div className="account-content">
              <div className="row align-items-center">
                <div className="login-right">
                  <div className="inner-right-login">
                    <div className="login-header">
                      <div className="logo-icon">
                        <img src={Logo} alt="" />
                      </div>
                      <div className="step-list">
                        <ul>
                          <li>
                            <Link to="#" className="active-done">
                              1
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="active-done">
                              2
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="active">
                              3
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <form onSubmit={handlerRegister}>
                        <h3 className="my-4">Your Location</h3>
                        <div className="form-group">
                          <label>Select City</label>
                          <select
                            className="form-select form-control"
                            id="location"
                            name="location"
                            tabIndex={-1}
                            aria-hidden="true"
                            ref={cityRef}
                          >
                            <option value="">Select Your City</option>
                            <option value={1}>City 1</option>
                            <option value={2}>City 2</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Select State</label>
                          <select
                            className="form-select form-control"
                            id="state"
                            name="state"
                            tabIndex={-1}
                            aria-hidden="true"
                            ref={stateRef}
                          >
                            <option value="">Select Your State</option>
                            <option value={1}>State 1</option>
                            <option value={2}>State 2</option>
                          </select>
                        </div>
                        <div className="mt-5">
                          <Link
                            to="/doctor/doctor-dashboard"
                            className="btn btn-primary w-100 btn-lg login-btn step5_submit"
                          >
                            Update{" "}
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="login-bottom-copyright">
                    <span>© 2022 Doccure. All rights reserved.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /Register Content */}
          </div>
        </div>
        {/* /Page Content */}
        <Alert
         count={count}
         message={message}
         setCount={setCount}
         setShow={setShowAlert}
         show={showAlert}
         type={type}
        />
      </>
    </>
  );
};

export default Registerstepthree;
