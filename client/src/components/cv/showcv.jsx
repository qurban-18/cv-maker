import React from "react";
import "./showcv.css";
export default function Showcv() {
  return (
    <div className="cv-main">
      <div className="container">
        <div className="person-info">
          <div className="info">
            <h1
              style={{
                fontFamily: "sans-serif",
                color: "#414344",
                fontSize: "35px",
                marginLeft: "15px",
                textTransform: "uppercase",
              }}
            >
              Qurban Hussain
            </h1>
            <h4
              style={{
                fontFamily: "sans-serif",
                color: "#414344",
                paddingTop: "5px",
                marginLeft: "15px",
                textTransform: "uppercase",
              }}
            >
              MERN Stack dev
            </h4>
          </div>
          <div className="icon-locate">
            <div className="icon-pack">
              <i className="fas fa-phone-alt"></i>
              <i className="fas fa-envelope"></i>
              <i className="fas fa-globe"></i>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="locate">
              <a href="fake.com">
                <p>9794723947324</p>
              </a>
              <a href="fake.com">
                <p>qurban@gmail.com</p>
              </a>
              <a href="fake.com">
                <p>qurban.com</p>
              </a>
              <a href="fake.com">
                <p>lahore, pak</p>
              </a>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-sec"></div>
          <div className="profile-sec">
            <h2 style={{ color: "white", fontFamily: "sans-serif" }}>
              PROFILE <hr style={{ width: "90%" }} />
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus voluptatem praesentium, in iste nihil repudiandae.
            </p>
          </div>
        </div>
        <div className="award-skill-sec">
          <div className="award-sec">
            <h2 style={{ fontFamily: "sans-serif", marginLeft: "5px" }}>
              AWARDS{" "}
              <hr
                style={{
                  backgroundColor: "black",
                  height: "2px",
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </h2>
            <h5
              style={{
                fontFamily: "sans-serif",
                marginTop: "15px",
                marginLeft: "5px",
              }}
            >
              ENTER YOUR REWARD
            </h5>
            <p
              style={{
                fontFamily: "monospace",
                marginLeft: "5px",
                marginTop: "5px",
                textTransform: "capitalize",
              }}
            >
              reward`
            </p>
            <h5
              style={{
                fontFamily: "sans-serif",
                marginTop: "15px",
                marginLeft: "5px",
              }}
            >
              ENTER YOUR REWARD
            </h5>
            <p
              style={{
                fontFamily: "monospace",
                marginLeft: "5px",
                marginTop: "5px",
                textTransform: "capitalize",
              }}
            >
              reward1
            </p>
          </div>
          <div className="ref-sec">
            <h2 style={{ fontFamily: "sans-serif", marginLeft: "5px" }}>
              REFRENCE{" "}
              <hr
                style={{
                  backgroundColor: "black",
                  height: "2px",
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </h2>
            <h5
              style={{
                marginLeft: "5px",
                marginTop: "5px",
                fontFamily: "sans-serif",
                textTransform: "capitalize",
              }}
            >
              <b>refer</b>
            </h5>
            <p style={{ marginLeft: "5px", marginTop: "5px" }}>hello</p>
            <p
              style={{
                marginLeft: "5px",
                marginTop: "5px",
                fontFamily: "monospace",
              }}
            >
              <b>Phone:23423423</b>
            </p>
            <p
              style={{
                marginLeft: "5px",
                marginTop: "5px",
                fontFamily: "monospace",
              }}
            >
              <b>Email:qslfsdf</b>
            </p>
          </div>
          <div className="skill-sec">
            <h2 style={{ fontFamily: "sans-serif", marginLeft: "5px" }}>
              SKILLS{" "}
              <hr
                style={{
                  backgroundColor: "black",
                  height: "2px",
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </h2>
            <div className="s-sec">
              <p
                style={{
                  fontFamily: "monospace",
                  marginLeft: "5px",
                  textTransform: "capitalize",
                }}
              >
                skill
              </p>
              {/* <div className="range">
                            <div className="c-range"></div>
                        </div> */}
            </div>
            <div className="s-sec">
              <p
                style={{
                  fontFamily: "monospace",
                  marginLeft: "5px",
                  textTransform: "capitalize",
                }}
              >
                skill2
              </p>
              {/* <div className="range">
                            <div className="c-range c1"></div>
                        </div> */}
            </div>
            <div className="s-sec">
              <p
                style={{
                  fontFamily: "monospace",
                  marginLeft: "5px",
                  textTransform: "capitalize",
                }}
              ></p>
              {/* <div className="range">
                            <div className="c-range c2"></div>
                        </div> */}
            </div>
            <div className="s-sec">
              <p
                style={{
                  fontFamily: "monospace",
                  marginLeft: "5px",
                  textTransform: "capitalize",
                }}
              ></p>
              {/* <div className="range">
                            <div className="c-range c3"></div>
                        </div> */}
            </div>
            <div className="s-sec">
              <p
                style={{
                  fontFamily: "monospace",
                  marginLeft: "5px",
                  textTransform: "capitalize",
                }}
              ></p>
              {/* <div className="range">
                            <div className="c-range c4"></div>
                        </div> */}
            </div>
            <div className="s-sec">
              <p
                style={{
                  fontFamily: "monospace",
                  marginLeft: "5px",
                  textTransform: "capitalize",
                }}
              ></p>
              {/* <div className="range">
                            <div className="c-range c5"></div>
                        </div> */}
            </div>
          </div>
        </div>
        <div className="exp-edu-sec">
          <div className="exp-sec">
            <h2 style={{ fontFamily: "sans-serif", marginLeft: "5px" }}>
              EXPERIENCE{" "}
              <hr
                style={{
                  backgroundColor: "black",
                  height: "2px",
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </h2>
            <div className="exp">
              <p style={{ fontFamily: "monospace" }}>2013-2014</p>
              <div className="dot">
                <hr
                  style={{
                    border: "none",
                    outline: "none",
                    height: "73px",
                    width: "3px",
                    backgroundColor: "black",
                    marginTop: "5px",
                    marginLeft: "3.5px",
                  }}
                />
              </div>
              <div className="data">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                  }}
                ></h5>
                <p style={{ fontFamily: "monospace", marginTop: "4px" }}>
                  Lorem ipsum dolor, sit amet elit. Quasi praesentium rem quis
                  quo nam odio.
                </p>
              </div>
            </div>
            <div className="exp">
              <p style={{ fontFamily: "monospace" }}>2014-2015</p>
              <div className="dot">
                <hr
                  style={{
                    border: "none",
                    outline: "none",
                    height: "73px",
                    width: "3px",
                    backgroundColor: "black",
                    marginTop: "5px",
                    marginLeft: "3.5px",
                  }}
                />
              </div>
              <div className="data">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                  }}
                ></h5>
                <p style={{ fontFamily: "monospace", marginTop: "4px" }}>
                  Lorem ipsum dolor, sit amet elit. Quasi praesentium rem quis
                  quo nam odio.
                </p>
              </div>
            </div>
            <div className="exp">
              <p style={{ fontFamily: "monospace" }}>2015-2016</p>
              <div className="dot">
                <hr
                  style={{
                    border: "none",
                    outline: "none",
                    height: "73px",
                    width: "3px",
                    backgroundColor: "black",
                    marginTop: "5px",
                    marginLeft: "3.5px",
                  }}
                />
              </div>
              <div className="data">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                  }}
                ></h5>
                <p style={{ fontFamily: "monospace", marginTop: "4px" }}>
                  Lorem ipsum dolor, sit amet elit. Quasi praesentium rem quis
                  quo nam odio.
                </p>
              </div>
            </div>
          </div>
          <div className="edu-sec">
            <h2 style={{ fontFamily: "sans-serif", marginLeft: "5px" }}>
              EDUCATION{" "}
              <hr
                style={{
                  backgroundColor: "black",
                  height: "2px",
                  width: "100%",
                  border: "none",
                  outline: "none",
                }}
              />
            </h2>
            <div className="edu">
              <p style={{ fontFamily: "monospace" }}>2012-2013</p>
              <div className="dot">
                <hr
                  style={{
                    border: "none",
                    outline: "none",
                    height: "73px",
                    width: "3px",
                    backgroundColor: "black",
                    marginTop: "5px",
                    marginLeft: "3.5px",
                  }}
                />
              </div>
              <div className="data">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                  }}
                ></h5>
                <p style={{ fontFamily: "monospace", marginTop: "4px" }}>
                  Lorem ipsum dolor, sit amet elit. Quasi praesentium rem quis
                  quo nam odio.
                </p>
              </div>
            </div>
            <div className="edu">
              <p style={{ fontFamily: "monospace" }}>2014-2016</p>
              <div className="dot">
                <hr
                  style={{
                    border: "none",
                    outline: "none",
                    height: "73px",
                    width: "3px",
                    backgroundColor: "black",
                    marginTop: "5px",
                    marginLeft: "3.5px",
                  }}
                />
              </div>
              <div className="data">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                  }}
                ></h5>
                <p style={{ fontFamily: "monospace", marginTop: "4px" }}>
                  Lorem ipsum dolor, sit amet elit. Quasi praesentium rem quis
                  quo nam odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
