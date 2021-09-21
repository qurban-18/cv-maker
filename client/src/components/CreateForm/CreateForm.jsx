import React, { useState } from "react";
import "./createform.css";
import axios from "axios";

export default function CreateForm() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
  });
  const [next, setNext] = useState(1);

  const getInputValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onNext = () => {
    setNext(next + 1);
  };

  const onBack = () => {
    setNext(next - 1);
  };

  const create = (e) => {
    e.preventDefault();
    console.log(userData);
    axios.post("http://localhost:3500/create", userData);
  };

  return (
    <div className="CreateForm">
      <div className="container p-5">
        <h3 className="mb-5">Let's create your cv</h3>
        <form onSubmit={create}>
          {next === 1 ? (
            <>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  value={userData.firstName}
                  placeholder="*First Name"
                  required
                  onChange={getInputValues}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  value={userData.lastName}
                  placeholder="*Last Name"
                  required
                  onChange={getInputValues}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={userData.email}
                  placeholder="*Your Email"
                  required
                  onChange={getInputValues}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  name="phone"
                  value={userData.phone}
                  placeholder="*Phone No."
                  required
                  onChange={getInputValues}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="website"
                  value={userData.website}
                  placeholder="www.example.com"
                  onChange={getInputValues}
                />
              </div>
            </>
          ) : (
            <>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="Website"
                  value={userData.website}
                  placeholder="www.example.com"
                  onChange={getInputValues}
                />
              </div>
            </>
          )}
          {next === 3 ? (
            <button className="btn btn-success">Create</button>
          ) : (
            <></>
          )}
        </form>
        {next === 2 ? (
          <button className="btn btn-success m-2" onClick={onBack}>
            Back
          </button>
        ) : (
          <></>
        )}
        <button className="btn btn-success" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
