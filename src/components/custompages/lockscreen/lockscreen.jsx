import React from "react";
import { Link } from "react-router-dom";
import { Card,Form } from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";

export default function LockScreen() {
  
  return (
        <div className="">
          <div className="col-login mx-auto mt-7">
            <div className="text-center">
              <img
                src={Imagesdata("logo")}
                className="header-brand-img"
                alt=""
              />
            </div>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-0">
              <Card.Body>
                <Form className="login100-form validate-form ">
                  <div className="text-center mb-4">
                    <img
                      src={
                        Imagesdata("users8")
                      }
                      alt="lockscreen "
                      className="avatar avatar-xxl brround mb-2"
                    />
                    <h4>Elizabeth Dyer</h4>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                  >
                    <input
                      className="input100"
                      type="text"
                      name="pass"
                      placeholder="Password"
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="container-login100-form-btn">
                    <Link
                      to={`${import.meta.env.BASE_URL}dashboard/`}
                      className="login100-form-btn btn-primary"
                    >
                      Unlock
                    </Link>
                  </div>
                  <div className="text-center pt-2">
                    <span className="txt1">  I Forgot</span>
                    <Link
                      to={`${import.meta.env.BASE_URL}custompages/forgotPassword/`}
                      className="txt2"
                    >
                      Give me Hint </Link>
                  </div>
                </Form>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-center my-3">
                  <Link to="#" className="social-login  text-center me-4">
                    <i className="fa fa-google"></i>
                  </Link>
                  <Link to="#" className="social-login  text-center me-4">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="#" className="social-login  text-center">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </div>
              </Card.Footer>
            </div>
          </div>
        </div>
  );
}
