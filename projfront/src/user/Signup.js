import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div class="bg-img">
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form style= {{marginTop:"20%"}}>
            <div className="form-group">
            <h4 className="text-dark text-center"><b>SIGNUP PAGE</b></h4>
              <label className="text-dark"><b>Name</b></label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
                style={{border:"0.90px solid gray"}}
              />
            </div>
            <div className="form-group">
              <label className="text-dark"><b>Email</b></label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
                style={{border:"0.90px solid gray"}}
              />
            </div>

            <div className="form-group">
              <label className="text-dark"><b>Password</b></label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
                style={{border:"0.90px solid gray"}}
              />
            </div>

           
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please{" "}
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign up page" description="A page for user to sign up!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
