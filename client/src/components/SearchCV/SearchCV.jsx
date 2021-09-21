import React, { useState } from "react";
import "./searchcv.css";
import axios from "axios";
import CV_template2 from "../cv_2/CV_template2";

export default function SearchCV() {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState();

  const search = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/search", { search: searchValue })
      .then((res) => {
        const data = res.data;
        if (data) {
          setUserData(data);
        }
      });
  };

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>Search</button>
      </form>
      {userData ? (
        <div className="resumeHolder">
          <CV_template2 data={userData} />
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
