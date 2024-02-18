/* eslint-disable react/prop-types */
import React, { useEffect, lazy, Suspense } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
const LoginContainer = lazy(() => import("./client/components/login/login.jsx"));
const Register = lazy(() => import("./client/components/register/register.jsx"));
const ForgotPassword = lazy(() => import("./client/components/forgot-password/index.jsx"));
const MyPatient = lazy(() => import("./client/components/doctors/mypatient/index.jsx"));

const SearchDoctor = lazy(() => import("./client/components/pages/searchdoctor/search-doctor1.jsx"));
const Components = lazy(() => import("./client/components/pages/component/index.jsx"));
const Invoice = lazy(() => import("./client/components/pages/invoices/invoices/index.jsx"));

const DoctorChat = lazy(() => import("./client/components/doctors/chat/index.jsx"));
// const PatientChat = lazy(() => import("./client/components/patients/chat/index.jsx"));

const DoctorDashboard = lazy(() => import("./client/components/doctors/dashboard/index.jsx"));
const SocialMedia = lazy(() => import("./client/components/doctors/socialmedia/index.jsx"));
const ScheduleTiming = lazy(() => import("./client/components/doctors/scheduletimings/index.jsx"));
const DoctorPassword = lazy(() => import("./client/components/doctors/password/index.jsx"));
const Appointments = lazy(() => import("./client/components/doctors/appointments/index.jsx"));
const AddPescription = lazy(() => import("./client/components/doctors/addpescription/index.jsx"));
const AddBilling = lazy(() => import("./client/components/doctors/addbilling/index.jsx"));
const ProfileSetting = lazy(() => import("./client/components/doctors/profilesetting/index.jsx"));
const Review = lazy(() => import("./client/components/doctors/reviews/index.jsx"));
const DoctorRegister = lazy(() => import("./client/components/doctors/register/index.jsx"));
const Registerstepone = lazy(() => import("./client/components/doctors/register/registerstepone.jsx"));
const Registersteptwo = lazy(() => import("./client/components/doctors/register/registersteptwo.jsx"));
const Registerstepthree = lazy(() => import("./client/components/doctors/register/registerstepthree.jsx"));
const Terms = lazy(() => import("./client/components/pages/terms/index.jsx"));
const Policy = lazy(() => import("./client/components/pages/policy/index.jsx"));


const BlankPage = lazy(() => import("./client/components/pages/starter page/index"));
const Doctorblog = lazy(() => import("./client/components/blog/doctorblog/doctorblog.jsx"));
const Doctoraddblog = lazy(() => import("./client/components/blog/doctorblog/doctoraddblog.jsx"));
const Doctorpendingblog = lazy(() => import("./client/components/blog/doctorblog/doctorpendingblog.jsx"));
const Doctoreditblog = lazy(() => import("./client/components/blog/doctorblog/doctoreditblog.jsx"));

const Generalhome = lazy(() => import("./client/components/home/general/generalhome.jsx"));

const Error404 = lazy(() => import("./client/components/pages/error/Error404.jsx"));
const Error500 = lazy(() => import("./client/components/pages/error/Error500.jsx"));
const LoginEmail = lazy(() => import("./client/components/pages/authentication/login-email.jsx"));
const LoginPhone = lazy(() => import("./client/components/pages/authentication/login-phone.jsx"));
const LoginEmailOtp = lazy(() => import("./client/components/pages/authentication/login-email-otp.jsx"));
const LoginPhoneOtp = lazy(() => import("./client/components/pages/authentication/login-phone-otp.jsx"));
const ForgotPassword2 = lazy(() => import("./client/components/pages/authentication/forgot-password2.jsx"));
const Signup = lazy(() => import("./client/components/pages/authentication/signup.jsx"));
const SuccessSignup = lazy(() => import("./client/components/pages/authentication/success-signup.jsx"));
const DoctorSignup = lazy(() => import("./client/components/pages/authentication/doctor-signup.jsx"));
const Faq = lazy(() => import("./client/components/pages/faq/index"));
const EmailOtp = lazy(() => import("./client/components/pages/authentication/email-otp.jsx"));
const MobileOtp = lazy(() => import("./client/components/pages/authentication/phone-otp.jsx"));
const AvailableTiming = lazy(() => import("./client/components/doctors/availabletiming/index"));
const Accounts = lazy(() => import("./client/components/doctors/account/index"))
const SearchDoctor2 = lazy(() => import('./client/components/pages/searchdoctor/search-doctor2.jsx'));
const Consultation = lazy(() => import("./client/components/home/consultation.jsx"));
const Payment = lazy(() => import("./client/components/home/payment.jsx"));
const Bookingsuccess = lazy(() => import("./client/components/home/bookingsuccess.jsx"));
const Patientdetails = lazy(() => import("./client/components/home/patientdetails.jsx"));
const Loginemail = lazy(() => import("./client/components/home/loginemail.jsx"));
const PatientProfile = lazy(() => import("./client/components/doctors/patientprofile/index.jsx"))

const AppContainer = function () {
  const Auth = useSelector((state) => state.auth);
  // const config = "/react/template/";

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorOuter) {
        cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }

      if (cursorInner) {
        cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    const handleMouseEnter = () => {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorInner) {
        cursorInner.classList.add("s");
      }

      if (cursorOuter) {
        cursorOuter.classList.add("s");
      }
    };

    const handleMouseLeave = (event) => {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (
        event.target.tagName !== "A" ||
        !event.target.closest(".cursor-pointer")
      ) {
        if (cursorInner) {
          cursorInner.classList.remove("cursor-hover");
        }

        if (cursorOuter) {
          cursorOuter.classList.remove("cursor-hover");
        }
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const cursorInner = document.querySelector(".cursor-inner");
    const cursorOuter = document.querySelector(".cursor-outer");

    if (cursorInner) {
      cursorInner.style.visibility = "visible";
    }

    if (cursorOuter) {
      cursorOuter.style.visibility = "visible";
    }

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router basename={`${config.publicPath}`}>
        <div>
          <Routes>
            <Route path="/login" exact element={<LoginContainer />} />
            <Route
              path="/doctor/doctor-register"
              exact
              element={<DoctorRegister />}
            />

            <Route
              path="/registerstepone"
              exact
              element={<Registerstepone />}
            />
            <Route
              path="/register-step-2"
              exact
              element={<Registersteptwo />}
            />
            <Route
              path="/register-step- 3"
              exact
              element={<Registerstepthree />}
            />
            <Route
              path="/pages/forgot-password"
              exact
              element={<ForgotPassword />}
            />
            <Route
              path="/pages/forgot-password2"
              exact
              element={<ForgotPassword2 />}
            />
            {/* <Route path="/error404" exact element={Error404} /> */}



            {/* <Route element={<Error404 />} exact path="/ss" /> */}
            <>
              <Route path="/doctor/chat-doctor" exact element={<DoctorChat />} />
              <Route path="/register" exact element={<Register />} />

              <Route path="/pages/login-email" exact element={<LoginEmail />} />
              <Route path="/pages/login-phone" exact element={<LoginPhone />} />
              <Route path="/pages/email-otp" exact element={<LoginEmailOtp />} />
              <Route path="/pages/phone-otp" exact element={<LoginPhoneOtp />} />
              <Route path="/pages/eotp" exact element={<EmailOtp />} />
              <Route path="/pages/motp" exact element={<MobileOtp />} />


              <Route
                path="/pages/doctor-signup"
                exact
                element={<DoctorSignup />}
              />
              <Route path="/success-signup" exact element={<SuccessSignup />} />
              <Route path="/signup" exact element={<Signup />} />

              <Route path="/index" exact element={<Generalhome />} />


              <Route path="/doctor-blog" exact element={<Doctorblog />} />
              <Route
                path="/blog/doctor-add-blog"
                exact
                element={<Doctoraddblog />}
              />
              <Route
                path="/blog/doctor-pending-blog"
                exact
                element={<Doctorpendingblog />}
              />
              <Route
                path="/blog/doctor-edit-blog"
                exact
                element={<Doctoreditblog />}

              />

              <Route
                path="/patient/search-doctor1"
                exact
                element={<SearchDoctor />}
              />
              <Route
                path="/patient/search-doctor2"
                exact
                element={<SearchDoctor2 />}
              />
              <Route path="/pages/component" exact element={<Components />} />
              <Route path="/pages/blank-page" exact element={<BlankPage />} />
              {/* <Route path="/pages/calendar" exact component={Calendar} /> */}
              <Route path="/pages/invoice" exact element={<Invoice />} />
              <Route path="/doctor/invoice" exact element={<Invoice />} />
              {/* <Route path="/pages/invoice-view" exact component={InvoiceView} /> */}

              {/* <Route path="/pages/comingsoon" exact component={Comingsoon} /> */}
              {/* <Route path="/pages/maintenance" exact component={Maintenance} /> */}
              {/* <Route path="/pages/pricing-plan" exact component={PricingPlan} /> */}
              <Route path="/pages/error-500" exact element={<Error500 />} />
              <Route path="/pages/faq" exact element={<Faq />} />

              <Route
                path="/patient/patient-chat"
                exact
                element={<Accounts />}
              />


              <Route path="/doctor/my-patients" exact element={<MyPatient />} />
              {/* <Route
                path="/patient/change-password"
                exact
                component={Password}
              /> */}
              <Route
                path="/doctor/doctor-dashboard"
                exact
                // element={<DoctorDashboard/>}
                element={Auth.isAuth ? (
                  <DoctorDashboard />
                ) : (
                  <Navigate to="/login" />
                )}

              />
              <Route exact path="/*" element={<Error404 />} />

              <Route
                path="/doctor/social-media"
                exact
                element={<SocialMedia />}
              />
              <Route
                path="/doctor/schedule-timing"
                exact
                element={<ScheduleTiming />}
              />
              <Route
                path="/doctor/available-timing"
                exact
                element={<AvailableTiming />}
              />
              <Route path="/doctor/account" exact element={<Accounts />} />
              <Route
                path="/doctor/doctor-change-password"
                exact
                element={<DoctorPassword />}
              />
              <Route
                path="/doctor/appointments"
                exact
                element={
                  Auth.isAuth ? (
                    <Appointments />
                  ) : (
                    <Navigate to="/login" />
                  )
                }

              />
              <Route
                path="/doctor/patient-profile"
                exact
                element={<PatientProfile />}
              />
              <Route
                path="/add-prescription"
                exact
                element={<AddPescription />}
              />
              <Route path="/add-billing" exact element={<AddBilling />} />
              <Route
                path="/doctor/profile-setting"
                exact
                element={<ProfileSetting />}
              />
              <Route path="/doctor/review" exact element={<Review />} />

              {Auth.isAuth ?
                <>
                  <Route path="/pages/terms" exact element={<Terms />} />
                  <Route path="/pages/privacy-policy" exact element={<Policy />} />
                  <Route path="/consultation" exact element={<Consultation />} />
                  <Route path="/payment" exact element={<Payment />} />
                  <Route path="/bookingsuccess" exact element={<Bookingsuccess />} />
                  <Route path="/patientdetails" exact element={<Patientdetails />} />
                  <Route path="/loginemail" exact element={<Loginemail />} />
                </>
                : null
              }
              {/* <Route path="/index-13" exact element={HomecareHome} /> */}
            </>
          </Routes>

        </div>

      </Router>
    </Suspense>
  );


};

export default AppContainer;
