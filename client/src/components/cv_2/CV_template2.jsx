import React from "react";
import "./cv_template2.css";

export default function CV_template2({ data }) {
  return (
    <div class="Resume">
      <div class="resume_left">
        <img
          src="https://i.ibb.co/S56MQBk/b.jpg"
          alt="profile"
          class="profile_img"
        />
        <div class="left_title">
          <div class="title_design"></div>
          <h3>contact</h3>
        </div>
        <ul>
          <li>
            <span>Phone</span>
            <br />
            {data.phone}
          </li>
          <li>
            <span>Email</span>
            <br />
            {data.email}
          </li>
          <li>
            <span>Address</span>
            <br />
          </li>
        </ul>
        <div class="left_title" style={{ marginTop: "100px" }}>
          <div class="title_design"></div>
          <h3>Education</h3>
        </div>
        <ul>
          <li>
            2014 - 2016
            <br />
            degree name <br />
            institute name
          </li>
        </ul>
      </div>
      <div class="resume_right">
        <div class="profile_head">
          <h2 class="profile_name">
            {data.firstName}
            <br />
            {data.lastName}
          </h2>
          <p class="profile_title">MERN Stack dev</p>
        </div>
        <div class="left_title right_title">
          <div class="title_design"></div>
          <h3>Profile</h3>
        </div>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eaque illum aperiam ratione modi numquam cumque beatae possimus,
            tempora officia nesciunt error eos, repellendus eveniet. Quibusdam
            iste labore, ipsa nobis nihil nesciunt sapiente accusantium enim
            ullam, maxime tenetur omnis error!
          </li>
        </ul>
        <div class="left_title right_title" style={{ marginTop: "50px" }}>
          <div class="title_design"></div>
          <h3>Experiance</h3>
        </div>
        <ul>
          <li>
            <div class="exp"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
