/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import DashboardSidebar from "../sidebar/index";
import Header from "../../header";
import camera from "../../../assets/images/icons/camera.svg";
import Alert from '../Alert/Alert';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';


const AddBlog = (props) => {
    const { id } = useParams();
    const [count, setCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState(null);
    const [titleBlog, setTitleBlog] = useState("");
    const [descriptioBlog, setDescriptionBlog] = useState("");
    const [changeImage, setChangeImage] = useState(null);


    const token = localStorage.getItem("access_token");
    const navigation = useNavigate();
    const showAlertMessage = (message, type) => {
        setCount(1);
        setType(type);
        setMessage(message);
        setShowAlert(true);
    }
    const handlerGetEdit = async (id) => {
        await axios.get(`${props.backendUrl}/doctor/blogs/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }

        }).then((res) => {
            setTitleBlog(res.data?.data.title);
            setDescriptionBlog(res.data?.data?.description);
            setImage(res.data?.data?.image);

        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        if (id) {
            handlerGetEdit(id)
        }
    }, [id])
    const handlerSubmit = async (e) => {
        e.preventDefault();

        const titleValue = e.target.title.value;
        const descriptionValue = e.target.description.value;
        
        console.log('titleValue>>',titleValue)
        if (!descriptionValue) {
            showAlertMessage("The description field is requried", "warning")
        }
        if (!titleValue) {

            showAlertMessage("The Title field is requried","warning")
        }
        if (descriptionValue && titleValue) {
            let formData = new FormData();

            formData.append("title", titleValue);
            formData.append("description", descriptionValue);
            formData.append("image", image);
            if (id) {
                await axios.put(`${props.backendUrl}/doctor/blogs/${id}`, formData, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(() => {
                    navigation("/doctor/blogs")
                }).catch((err) => {
                    console.log(err)
                    showAlertMessage("There is a problem with server","warning")
                })
            }
        }
    }
    const handlerUpload = (e) => {
        const image = e.target.files[0];

        if (image?.type !== 'image/jpeg' &&
            image?.type !== 'image/png' &&
            image?.type !== 'image/jpg') {
            showAlertMessage("The Image must be jpeg or png or jpg", "warning");
        }
        else {
            setChangeImage(image)
            setImage(URL.createObjectURL(image));
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
                                                <input type="text" className="form-control" name="title" defaultValue={titleBlog}/>
                                            </div>
                                            <div className="form-group">
                                                <label>description</label>
                                                <input type="text" className="form-control" name="description" defaultValue={descriptioBlog}/>
                                            </div>
                                            <div className="profile-pic-upload">
                                                <div className="cam-col">
                                                    <img
                                                        src={image ? image : camera}
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
                                                    onChange={handlerUpload}
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
