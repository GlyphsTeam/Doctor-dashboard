import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { error404 } from "../../imagepath";
import { useSelector } from 'react-redux';

const Error404 = (props) => {
  const auth = useSelector((state) => state.register);

  return (
    <>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Page not found 404</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">

                  <li className="breadcrumb-item" aria-current="page">
                    Error 404
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Error 404 */}
      <section className="error-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 text-center">
              <div className="error-info">
                <div className="error-404-img">
                  <img src={error404} className="img-fluid" alt="" />
                  <div className="error-content error-404-content">
                    <h2>Oops! That Page Can’t Be Found.</h2>
                    <p>The page you are looking for was never existed.</p>
                    {auth.isAuth ?
                      <Link to="/doctor/doctor-dashboard" className="btn btn-primary prime-btn">
                        Back to dashboard
                      </Link>
                      : <Link to="/login" className="btn btn-primary prime-btn">
                        Back to Login
                      </Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Error 404 */}
      <Footer {...props} />
    </>
  );
};

export default Error404;
