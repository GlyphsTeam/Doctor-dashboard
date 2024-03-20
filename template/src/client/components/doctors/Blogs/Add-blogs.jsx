/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import DashboardSidebar from "../sidebar/index";
import Header from "../../header";
import camera from "../../../assets/images/icons/camera.svg";
import Alert from '../Alert/Alert';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const AddBlog = (props) => {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const token = localStorage.getItem("access_token");
  const navigation = useNavigate();

  const handlerSubmit = async (e)=>{
    e.preventDefault();

    const titleValue = titleRef.current.value;
    const  descriptionValue = descriptionRef.current.value;
    
    if(!descriptionValue){
      setCount(1);
      setShowAlert(true);
      setType("warning");
      setMessage("The description field is requried");
    }
    if(!titleValue){
      setCount(1);
      setShowAlert(true);
      setType("warning");
      setMessage("The Title field is requried");
    }
    if(descriptionValue && titleValue){
      let formData = new FormData();
      
      formData.append("title", titleValue);
      formData.append("description", descriptionValue);
      formData.append("image", image);

      await axios.post(`${props.backendUrl}/doctor/blogs`, formData,{
        headers:{
          "Authorization": `Bearer ${token}`
        }
      }).then(()=>{
        navigation("/doctor/blogs")
      }).catch((err)=>{
        console.log(err)
        setCount(1);
        setShowAlert(true);
        setType("warning");
        setMessage("There is a problem with server");
      })
    }
  }
  const handlerRegister = (e) => {
    e.preventDefault();

    let image = e.target.files[0];

    if (!image.type.startsWith('image/')) {
      setCount(1);
      setShowAlert(true);
      setType("warning");
      setMessage("The image field is requried");
    }
    else {
      setImage(image);
    }
  }
  return (
    <>
      <div>
        <Header {...props} />
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Blogs</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index-2">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Blogs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <DashboardSidebar />
              </div>

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handlerSubmit}>
                      <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" ref={titleRef}/>
                      </div>
                      <div className="form-group">
                        <label>description</label>
                        <input type="text" className="form-control" name="description" ref={descriptionRef}/>
                      </div>
                      <div className="profile-pic-upload">
                        <div className="cam-col">
                          <img
                            src={image ? URL.createObjectURL(image) : camera}
                            id="prof-avatar"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <span>Upload Image</span>
                        <input
                          type="file"
                          id="profile_image"
                          name="profile_image"
                          onChange={handlerRegister}
                        />
                      </div>
                      <div className="submit-section">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default AddBlog;
