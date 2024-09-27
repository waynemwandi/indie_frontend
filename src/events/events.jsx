import React from "react";
import Konnect from "../assets/images/screenshot-2024-05-13-at-06.06.03-696x695.webp";
import Comedy from "../assets/images/screenshot-2024-05-13-at-06.13.11-696x697.webp";
import LaughBar from "../assets/images/screenshot-2024-05-13-at-06.14.05-696x691.webp";
import Minds from "../assets/images/screenshot-2024-05-13-at-06.15.31-657x658.webp";
import Lust from "../assets/images/screenshot-2024-05-13-at-06.21.18-585x714.webp";
import "./events.css";

const AttendEvent = () => {
  return (
    <>
      <div className="attendevent">
        <div className="attend-container">
          <div className="attend-card">
            <div className="attend-card-row">
              <img src={Konnect} alt="Event A" />
            </div>
            <div className="attend-card-text">
              <h5> Event A </h5>
              <h6>Date</h6>
              <p>Details</p>
              {/* <div className="attend-card-button">
                            <a href="/tickets">Buy Ticket </a>
                          </div> */}
            </div>
          </div>

          <div className="attend-card">
            <div className="attend-card-row">
              <img src={Comedy} alt="Event B" />
            </div>
            <div className="attend-card-text">
              <h5> Event B </h5>
              <h6>Date</h6>
              <p>Details</p>
              {/* <div className="attend-card-button">
                            <a href="/tickets">Buy Ticket </a>
                        </div> */}
            </div>
          </div>

          <div className="attend-card">
            <div className="attend-card-row">
              <img src={LaughBar} alt="Event C" />
            </div>
            <div className="attend-card-text">
              <h5> Event C </h5>
              <h6>Date</h6>
              <p>Details</p>
              {/*  <div className="attend-card-button">
                            <a href="/tickets">Buy Ticket </a>
                    </div> */}
            </div>
          </div>

          <div className="attend-card">
            <div className="attend-card-row">
              <img src={Minds} alt="Event D" />
            </div>
            <div className="attend-card-text">
              <h5> Event D </h5>
              <h6>Date</h6>
              <p>Details</p>
              {/* <div className="attend-card-button">
                            <a href="/tickets">Buy Ticket </a>
                </div> */}
            </div>
          </div>

          <div className="attend-card">
            <div className="attend-card-row">
              <img src={Lust} alt="Event E" />
            </div>
            <div className="attend-card-text">
              <h5> Event E </h5>
              <h6>Date</h6>
              <p>Details</p>
              {/* <div className="attend-card-button">
                            <a href="/tickets">Buy Ticket </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AttendEvent;
