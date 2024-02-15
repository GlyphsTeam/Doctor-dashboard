/* eslint-disable react/prop-types */
import React, { useEffect, lazy, Suspense } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
const LoginContainer = lazy(() => import("./client/components/login/login.jsx"));
const Register = lazy(() => import("./client/components/register/register.jsx"));
const ForgotPassword = lazy(() => import("./client/components/forgot-password"));
const MyPatient = lazy(() => import("./client/components/doctors/mypatient"));

const SearchDoctor = lazy(() => import("./client/components/pages/searchdoctor/search-doctor1"));
const Components = lazy(() => import("./client/components/pages/component"));
const Invoice = lazy(() => import("./client/components/pages/invoices/invoices"));

const DoctorChat = lazy(() => import("./client/components/doctors/chat"));
const PatientChat = lazy(() => import("./client/components/patients/chat"));

const DoctorDashboard = lazy(() => import("./client/components/doctors/dashboard"));
const SocialMedia = lazy(() => import("./client/components/doctors/socialmedia"));
const ScheduleTiming = lazy(() => import("./client/components/doctors/scheduletimings"));
const DoctorPassword = lazy(() => import("./client/components/doctors/password"));
const Appointments = lazy(() => import("./client/components/doctors/appointments"));
const AddPescription = lazy(() => import("./client/components/doctors/addpescription"));
const AddBilling = lazy(() => import("./client/components/doctors/addbilling"));
const ProfileSetting = lazy(() => import("./client/components/doctors/profilesetting"));
const Review = lazy(() => import("./client/components/doctors/reviews"));
const DoctorRegister = lazy(() => import("./client/components/doctors/register"));
const Registerstepone = lazy(() => import("./client/components/doctors/register/registerstepone"));
const Registersteptwo = lazy(() => import("./client/components/doctors/register/registersteptwo"));
const Registerstepthree = lazy(() => import("./client/components/doctors/register/registerstepthree"));
const Terms = lazy(() => import("./client/components/pages/terms"));
const Policy = lazy(() => import("./client/components/pages/policy"));


const BlankPage = lazy(() => import("./client/components/pages/starter page/index"));
const Doctorblog = lazy(() => import("./client/components/blog/doctorblog/doctorblog"));
const Doctoraddblog = lazy(() => import("./client/components/blog/doctorblog/doctoraddblog"));
const Doctorpendingblog = lazy(() => import("./client/components/blog/doctorblog/doctorpendingblog"));
const Doctoreditblog = lazy(() => import("./client/components/blog/doctorblog/doctoreditblog"));

const Generalhome = lazy(() => import("./client/components/home/general/generalhome"));

const Error404 = lazy(() => import("./client/components/pages/error/Error404"));
const Error500 = lazy(() => import("./client/components/pages/error/Error500"));
const LoginEmail = lazy(() => import("./client/components/pages/authentication/login-email"));
const LoginPhone = lazy(() => import("./client/components/pages/authentication/login-phone"));
const LoginEmailOtp = lazy(() => import("./client/components/pages/authentication/login-email-otp"));
const LoginPhoneOtp = lazy(() => import("./client/components/pages/authentication/login-phone-otp"));
const ForgotPassword2 = lazy(() => import("./client/components/pages/authentication/forgot-password2"));
const Signup = lazy(() => import("./client/components/pages/authentication/signup"));
const SuccessSignup = lazy(() => import("./client/components/pages/authentication/success-signup"));
const DoctorSignup = lazy(() => import("./client/components/pages/authentication/doctor-signup"));
const Faq = lazy(() => import("./client/components/pages/faq/index"));
const EmailOtp = lazy(() => import("./client/components/pages/authentication/email-otp"));
const MobileOtp = lazy(() => import("./client/components/pages/authentication/phone-otp"));
const AvailableTiming = lazy(() => import("./client/components/doctors/availabletiming/index"));
const Accounts = lazy(() => import("./client/components/doctors/account/index"))
const SearchDoctor2 = lazy(() => import('./client/components/pages/searchdoctor/search-doctor2'));
const Consultation = lazy(() => import("./client/components/home/consultation"));
const Payment = lazy(() => import("./client/components/home/payment"));
const Bookingsuccess = lazy(() => import("./client/components/home/bookingsuccess"));
const Patientdetails = lazy(() => import("./client/components/home/patientdetails"));
const Loginemail = lazy(() => import("./client/components/home/loginemail"));
const PatientProfile = lazy(() => import("./client/components/doctors/patientprofile"))

const AppContainer = function (props) {
  const Auth = useSelector((state) => state.auth);
  // const config = "/react/template/";
  if (props) {

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
            <Route path="/login" exact component={LoginContainer} />
            <Route
              path="/doctor/doctor-register"
              exact
              component={DoctorRegister}
            />

            <Route
              path="/registerstepone"
              exact
              component={Registerstepone}
            />
            <Route
              path="/register-step-2"
              exact
              component={Registersteptwo}
            />
            <Route
              path="/register-step- 3"
              exact
              component={Registerstepthree}
            />
            <Route
              path="/pages/forgot-password"
              exact
              component={ForgotPassword}
            />
            <Route
              path="/pages/forgot-password2"
              exact
              component={ForgotPassword2}
            />
            {/* <Route path="/error404" exact component={Error404} /> */}

            <Switch>
              {Auth.isAuth ? (
                <>
                  <Route path="/doctor/chat-doctor" exact component={DoctorChat} />
                  <Route path="/register" exact component={Register} />

                  <Route path="/pages/login-email" exact component={LoginEmail} />
                  <Route path="/pages/login-phone" exact component={LoginPhone} />
                  <Route path="/pages/email-otp" exact component={LoginEmailOtp} />
                  <Route path="/pages/phone-otp" exact component={LoginPhoneOtp} />
                  <Route path="/pages/eotp" exact component={EmailOtp} />
                  <Route path="/pages/motp" exact component={MobileOtp} />


                  <Route
                    path="/pages/doctor-signup"
                    exact
                    component={DoctorSignup}
                  />
                  <Route path="/success-signup" exact component={SuccessSignup} />
                  <Route path="/signup" exact component={Signup} />

                  <Route path="/index" exact component={Generalhome} />


                  <Route path="/doctor-blog" exact component={Doctorblog} />
                  <Route
                    path="/blog/doctor-add-blog"
                    exact
                    component={Doctoraddblog}
                  />
                  <Route
                    path="/blog/doctor-pending-blog"
                    exact
                    component={Doctorpendingblog}
                  />
                  <Route
                    path="/blog/doctor-edit-blog"
                    exact
                    component={Doctoreditblog}
                  />

                  <Route
                    path="/patient/search-doctor1"
                    exact
                    component={SearchDoctor}
                  />
                  <Route
                    path="/patient/search-doctor2"
                    exact
                    component={SearchDoctor2}
                  />
                  <Route path="/pages/component" exact component={Components} />
                  <Route path="/pages/blank-page" exact component={BlankPage} />
                  {/* <Route path="/pages/calendar" exact component={Calendar} /> */}
                  <Route path="/pages/invoice" exact component={Invoice} />
                  <Route path="/doctor/invoice" exact component={Invoice} />
                  {/* <Route path="/pages/invoice-view" exact component={InvoiceView} /> */}

                  {/* <Route path="/pages/comingsoon" exact component={Comingsoon} /> */}
                  {/* <Route path="/pages/maintenance" exact component={Maintenance} /> */}
                  {/* <Route path="/pages/pricing-plan" exact component={PricingPlan} /> */}
                  <Route path="/pages/error-500" exact component={Error500} />
                  <Route path="/pages/faq" exact component={Faq} />

                  <Route
                    path="/patient/patient-chat"
                    exact
                    component={PatientChat}
                  />


                  <Route path="/doctor/my-patients" exact component={MyPatient} />
                  {/* <Route
                path="/patient/change-password"
                exact
                component={Password}
              /> */}
                  <Route
                    path="/doctor/doctor-dashboard"
                    exact
                    component={DoctorDashboard}
                  />
                  <Route
                    path="/doctor/social-media"
                    exact
                    component={SocialMedia}
                  />
                  <Route
                    path="/doctor/schedule-timing"
                    exact
                    component={ScheduleTiming}
                  />
                  <Route
                    path="/doctor/available-timing"
                    exact
                    component={AvailableTiming}
                  />
                  <Route path="/doctor/account" exact component={Accounts} />
                  <Route
                    path="/doctor/doctor-change-password"
                    exact
                    component={DoctorPassword}
                  />
                  <Route
                    path="/doctor/appointments"
                    exact
                    component={Appointments}
                  />
                  <Route
                    path="/doctor/patient-profile"
                    exact
                    component={PatientProfile}
                  />
                  <Route
                    path="/add-prescription"
                    exact
                    component={AddPescription}
                  />
                  <Route path="/add-billing" exact component={AddBilling} />
                  <Route
                    path="/doctor/profile-setting"
                    exact
                    component={ProfileSetting}
                  />
                  <Route path="/doctor/review" exact component={Review} />


                  <Route path="/pages/terms" exact component={Terms} />
                  <Route path="/pages/privacy-policy" exact component={Policy} />
                  <Route path="/consultation" exact component={Consultation} />
                  <Route path="/payment" exact component={Payment} />
                  <Route path="/bookingsuccess" exact component={Bookingsuccess} />
                  <Route path="/patientdetails" exact component={Patientdetails} />
                  <Route path="/loginemail" exact component={Loginemail} />
                  {/* <Route path="/index-13" exact component={HomecareHome} /> */}
                </>) : <Route component={Error404} />
              }

            </Switch>

          </div>

        </Router>
      </Suspense>
    );
  }
  return null;
};

export default AppContainer;
