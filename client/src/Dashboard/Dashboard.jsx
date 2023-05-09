import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import test from "../assets/test.jpeg";
// import UserDetails from "../components/User/UserDetails";

const Dashboard = () => {
  let [myEventsExists, setMyEventsExists] = useState(false);

  const events = [
    {
      id: 1,
      name: "Alice",
      description: "Austria",
      location: "India",
      date_time: "Date & Time",
      image_url: "",
    },
    {
      id: 2,
      name: "Alice 2 ",
      description: "Austria",
      location: "India",
      date_time: "Date & Time",
      image_url: "",
    },
    {
      id: 3,
      name: "Alice 3",
      description: "Austria",
      location: "India",
      date_time: "Date & Time",
      image_url: "",
    },
  ];

  return (
    <div>
      {/* <nav>
        <div className="navbar">
          <div className="nav-item">
            <button className="nav-btn">All Events</button>
            { myEventsExists && <button className="nav-btn">My Events</button> }
          </div>
          <Link
            to="/add-event"
            className="nav-btn"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Add Event
          </Link>
        </div>
      </nav> */}
      <br />
      <br />
      <div className="event-list">
        <div className="add-event">
          <Link
            to="/add-event"
            className="nav-btn"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Add Event
          </Link>
        </div>
        {events.map((event) => {
          return (
            <div className="event-container">
              <div className="event-image">
                <img src={test} />
              </div>
              <div className="event-data-container">
                <div>
                  <label>Event Name :</label>
                  <span>{event.name}</span>
                </div>
                <div>
                  <label>Event Description :</label>
                  <span>{event.description}</span>
                </div>
                <div>
                  <label>Location :</label>
                  <span>{event.location}</span>
                </div>
                <div>
                  <label>Date & Time :</label>
                  <span>{event.date_time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
