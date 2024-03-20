/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import axios from 'axios';
import StickyBox from "react-sticky-box";
import TableBlogs from './TableBlogs';
import Header from '../../header';
import { useNavigate } from 'react-router-dom';



const Blogs = (props) => {
    const [blogs, setBlogs] = useState(null);
    const token = localStorage.getItem("access_token");
    const navigation = useNavigate();
    
    const getBlogs = async () => {
        await axios.get(`${props.backendUrl}/doctor/blogs`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            setBlogs(res.data?.data)

        }).catch((err) => console.log(err))
    }

    const deleteBlogs = async (id) => {
        await axios.delete(`${props.backendUrl}/doctor/blogs/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }).then(() => {
            getBlogs();

        }).catch((err) => console.log(err));
    }


    useEffect(() => {

        getBlogs();
        
    }, [blogs]);


    const handlerAddBlog = () => { 
        navigation("/doctor/add-blog")

    }
    return (
        <>
            <Header {...props} />

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
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <DoctorSidebar />
                            </StickyBox>
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">

                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="mb-4">Blogs</h4>
                                    <button className="add-blog" onClick={() => handlerAddBlog()}>Add Blog</button>
                                    <div className="appointment-tab">
                                        {/* Appointment Tab */}
                                        <TableBlogs blogs={blogs} deleteBlogs={deleteBlogs}/>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
