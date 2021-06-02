import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../utils/baseUrl";
import PageBanner from "../components/Common/PageBanner";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const SignUp = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      await axios.post(url, payload);
      console.log(url);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageBanner
        pageTitle="Register"
        homePageUrl="/login"
        homePageText="Login"
        activePageText="Register"
        bgImgClass="item-bg3"
      />

      <section className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Login to your account!</h3>
                </div>

                <form>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn mb-30" type="submit">
                        <i className="bx bxl-google"></i>
                        Google
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn mb-30" type="submit">
                        <i className="bx bxl-facebook"></i>
                        Facebook
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn mb-30" type="submit">
                        <i className="bx bxl-twitter"></i>
                        Twitter
                      </button>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Username or Email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label>Remember me</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password">
                        <a className="forget">Forgot my password?</a>
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Log In Now
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Member already?{" "}
                        <Link href="/login">
                          <a>Login</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
