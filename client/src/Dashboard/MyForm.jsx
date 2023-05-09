import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./MyForm.css";

function MyForm() {
  let [authMode, setAuthMode] = useState("signin");
  const navigate = useNavigate();

  const login = async () => {
    await AuthProvider.login({ first_name: "Snehal", last_name: "Patil" });
    navigate("/myForm");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container event-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Add Event</h3>
            <div className="text-center"></div>
            <div className="form-group mt-3">
              <label>Email Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Desrciption</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Description"
              />
            </div>
            <div className="form-group mt-3">
              <label>Date Time</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Date Time"
              />
            </div>
            <div className="form-group mt-3">
              <label>Location</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Location"
              />
            </div>
            <div className="form-group mt-3">
              <label>Add Image</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Image"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={login}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MyForm;
