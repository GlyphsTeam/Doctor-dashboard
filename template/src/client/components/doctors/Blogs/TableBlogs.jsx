/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import {
  IMG01,

} from "../dashboard/img";

const AppointmentTab = ({ blogs, deleteBlogs }) => {
  return (
    <>
      {/* Today Appointment Tab */}
      <div className="tab-pane" id="today-appointments">
        <div className="card card-table mb-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-center mb-0">
                <thead style={{ borderBottom: "none" }}>
                  <tr>
                    <th> Image Blog </th>
                    <th>Title Blog</th>
                    <th>Description Blog</th>
                  </tr>
                </thead>
                <tbody style={{ borderTop: "none" }}>
                  {blogs?.map((blog) => {
                    return <tr key={blog.id}>
                      <td>
                        <h2 className="table-avatar">
                          <Link
                            to="/doctor/patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={blog.image ? blog.image : IMG01}
                              alt="User Image"
                            />
                          </Link>
                          {/* <Link to="/doctor/patient-profile">
                            Elsie Gilley
                          </Link> */}
                        </h2>
                      </td>
                      <td>
                        {blog?.title}
                      </td>
                      <td>{blog?.description}</td>
                      <td className="text-end">
                        <div className="table-action">
                          <Link to="#" className="btn btn-sm bg-info-light" style={{ marginRight: "5px" }}>
                            <i className="far fa-eye" /> View
                          </Link>
                          <Link to={`/doctor/edit-blog/${blog.id}`} className="btn btn-sm bg-success-light" style={{ marginRight: "5px" }}>
                            Edit
                          </Link>
                          <button onClick={() => deleteBlogs(blog.id)} className="btn btn-sm bg-danger-light" >
                            <i className="fas fa-times" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Today Appointment Tab */}
    </>
  );
};

export default AppointmentTab;
