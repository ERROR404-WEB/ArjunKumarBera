import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "./style.css";
import Navbar from "./navbar"
import guntur from "./images/guntur.jpg"
import vista from "./images/vista.jpg"
import Footer from "./footer"
import me2 from "./images/me2.jpg";
import simon from "./images/simon.png";
import resume from "./images/resume.pdf";
import logoblack from "./images/logoblack.png";
import cc from "./images/cc.jpg";
import cf from "./images/cf.jpg";
import lc from "./images/lc.jpg";
import gfg from "./images/gfg.jpg";
import he from "./images/he.jpg";
import hr from "./images/hr.jpg";
import aboutwhite from "./images/aboutwhite.jpg";
import me from "./images/me.jpg";
import c from "./images/c.png";
import cpp from "./images/c++.png";
import js from "./images/JavaScript.png";
import html from "./images/html.png";
import css from "./images/css.png";
import python from "./images/python.png";
import mern from "./images/mern.png";
import dsa from "./images/dsa.png";
import farmbank from "./images/farmbank.png";
import canteen from "./images/canteen.png";
import college from "./images/college.png";
import text from "./images/editor.jpg";
import ccdsa from "./images/ccdsa.jpeg";
import rank from "./images/rank.png";
import dbms from "./images/dbms.jpg";
import kick1 from "./images/kick1.png";
import kick2 from "./images/kick2.png";
import qr from "./images/instaqr.jpg";
import java from "./images/java.png";
import gmail from "./images/gmail.png";
import insta from "./images/Instagram.png";
import linkedin from "./images/LinkedIn.png";
import flask from "./images/flask.png";
import wa from "./images/Whatsapp.png";
import tele from "./images/Telegram.png";
import snap from "./images/Snapchat.png";
import youtube from "./images/Youtube.png";
import git from "./images/github.png";
import discord from "./images/Discord.png";
import fb from "./images/Facebook.png";
import agri from "./images/agri.png";
import logowhite from "./images/logowhite.png";
import aboutblack from "./images/aboutblack.jpg";
import load from "./images/load.gif"


export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    ScrollReveal({ reset: true });

    ScrollReveal().reveal(".show-once", {
      reset: false,
    });

    ScrollReveal().reveal(".title", {
      duration: 3000,
      origin: "top",
      distance: "100px",
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      rotate: {
        x: 20,
        z: -10,
      },
    });

    ScrollReveal().reveal(".fade-in", {
      duration: 5000,
      move: 0,
    });

    ScrollReveal().reveal(".scaleUp", {
      duration: 2000,
      scale: 0.85,
    });
    ScrollReveal().reveal(".slide-down-fade", {
      duration: 2000,
      origin: "top",
      distance: "100px",
      easing: "cubic-bezier(.37,.01,.74,1)",
      opacity: 0,
      scale: 0.5,
    });
    ScrollReveal().reveal(".flip", {
      delay: 500,
      duration: 2000,
      rotate: {
        x: 20,
        z: 20,
      },
    });

    ScrollReveal().reveal(".slide-right", {
      duration: 1000,
      origin: "left",
      distance: "100px",
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".slide-up", {
      duration: 2000,
      origin: "bottom",
      distance: "100px",
      easing: "cubic-bezier(.37,.01,.74,1)",
      opacity: 0.3,
      scale: 0.5,
    });
    ScrollReveal().reveal(".slide-down", {
      duration: 1000,
      origin: "top",
      distance: "1px",
      easing: "cubic-bezier(.37,.01,.74,1)",
      opacity: 0.3,
      scale: 0.1,
    });
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handledarkmode = () => {
    setIsActive(!isActive);
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    
    <div className={isActive ? "active" : ""}>
      
      {loading &&(
      <div className="blackcontainer">
        <img className="gif" src={load}></img>
        
      </div>
      
      )}


      <section className="desktop">
        <section className="pc">
          <div className="wrapper ">
            <div
              className={
                isActive ? "sidebar sidebarblackbg" : "sidebar sidebarwhitebg"
              }
            >
              <ul>
                <li>
                  <img
                    src={isActive ? logowhite : logoblack}
                    width="140rem"
                    style={{ margin: "1rem", marginBottom: "2rem" }}
                  />
                </li>
                <li>
                  <a
                    href="#home"
                    className={
                      activeSection === "home" && isActive
                        ? " activetext whiteh activebuttonw"
                        : isActive
                        ? "activetext whiteh"
                        : activeSection === "home"
                        ? "blackh activebuttonb"
                        : "blackh"
                    }
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="fas  fa-house fa-xl" />
                    </span>
                    <span className="item">Home</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className={
                      activeSection === "about" && isActive
                        ? " activetext whiteh activebuttonw"
                        : isActive
                        ? "activetext whiteh"
                        : activeSection === "about"
                        ? "blackh activebuttonb"
                        : "blackh"
                    }
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="far fa-user fa-xl" />
                    </span>
                    <span className="item">About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className={
                      activeSection === "skills" && isActive
                        ? " activetext whiteh activebuttonw"
                        : isActive
                        ? "activetext whiteh"
                        : activeSection === "skills"
                        ? "blackh activebuttonb"
                        : "blackh"
                    }
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="fas fa-magnifying-glass fa-xl" />
                    </span>
                    <span className="item">Skills</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className={
                      activeSection === "projects" && isActive
                        ? " activetext whiteh activebuttonw"
                        : isActive
                        ? "activetext whiteh"
                        : activeSection === "projects"
                        ? "blackh activebuttonb"
                        : "blackh"
                    }
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="far fa-plus-square fa-xl" />
                    </span>
                    <span className="item">Projects</span>
                  </a>
                </li>
                <li
                  className={activeSection === "achieve" ? "activebutton" : ""}
                >
                  <a
                    href="#achieve"
                    className={
                      activeSection === "achieve" && isActive
                        ? " activetext whiteh activebuttonw"
                        : isActive
                        ? "activetext whiteh"
                        : activeSection === "achieve"
                        ? "blackh activebuttonb"
                        : "blackh"
                    }
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="far fa-compass fa-xl" />
                    </span>
                    <span className="item">Achievements</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#hobby"
                    className={
                      activeSection === "hobby" && isActive
                        ? " activetext whiteh activebuttonw"
                        : isActive
                        ? "activetext whiteh"
                        : activeSection === "hobby"
                        ? "blackh activebuttonb"
                        : "blackh"
                    }
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="far fa-heart fa-xl" />
                    </span>
                    <span className="item">Certifications</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#message"
                    className={
                      activeSection === "message" && isActive
                        ? " activetext whiteh activebuttonw"
                        : isActive
                        ? "activetext whiteh"
                        : activeSection === "message"
                        ? "blackh activebuttonb"
                        : "blackh"
                    }
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="fa-brands fa-facebook-messenger fa-xl" />
                    </span>
                    <span className="item">Social Links</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handledarkmode}
                    className={isActive ? "activetext whiteh" : "blackh"}
                  >
                    <span className={isActive ? "iconw" : "icon"}>
                      <i className="fas fa-cog fa-xl" />
                    </span>
                    <span className="item">
                      {" "}
                      {isActive ? "Light Mode" : "Dark Mode"}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <section className="home" id="home">
            <div className="top">
              <div className="profilepic center slide-right">
                <a href={me2} target="_blank">
                  <img
                    src={me2}
                    className="profileimg "
                    style={{
                      width: "10rem",
                      marginTop: "37%",
                      marginLeft: "5%",
                    }}
                    target="_blank"
                  />
                </a>
              </div>

              <div className="maintext">
                <div
                  className="topmost slide-right"
                  style={{ display: "flex" }}
                >
                  <p
                    className={isActive ? "activetext" : ""}
                    style={{ fontSize: "20px" }}
                  >
                    Arjun Kumar Bera
                  </p>
                  <div className="buttons" style={{ marginTop: "0.6%" }}>
                    <a
                      href="https://www.instagram.com/x._mr_arjun_.x/"
                      className={isActive ? "activebtn" : "btns"}
                      target="_blank"
                    >
                      Follow
                    </a>
                    <a
                      href={resume}
                      className={isActive ? "activebtn" : "btns"}
                      target="_blank"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <div className="bottom slide-down-fade">
                  <div className="text1">
                    <p className={isActive ? "activetext" : ""}>
                      Front End Developer
                    </p>
                  </div>
                  <br />
                  <div className="text2" style={{ marginRight: "10%" }}>
                    <p className={isActive ? "activetext" : ""}>
                      Hi there,👋
                      <br />
                      I'm Arjun Kumar Bera,🧑‍💻 <br />
                      and I'm a front-end developer with a passion for becoming
                      a full-stack developer.🙂
                      <br />
                      <br />
                      I'm also proud to say that I'm a social media influencer,
                      with a growing following of 127k on Instagram. 😁
                      <br />
                      <br />I love showcasing my Photoshop editing skills on the
                      platform and connecting with fellow tech enthusiasts.😏
                    </p>
                    <a href="https://www.instagram.com/_captured_moments_official_/" target="__blank"><p className="captured"> @CapturedMoments</p></a> 
                  </div>
                </div>
              </div>
            </div>
            <div className="stories" style={{ display: "flex" }}>
              <div className="card slide-down-fade">
                <a
                  href="https://www.codechef.com/users/mrhacker_007"
                  target="_blank"
                >
                  <img
                    src={cc}
                    className={
                      isActive
                        ? "storyimg storyimgwhite"
                        : "storyimg storyimgblack"
                    }
                  />{" "}
                  <br />
                  <p
                    className={isActive ? "activetext" : ""}
                    style={{
                      fontStyle: "bold",
                      fontSize: "12px",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Code Chef
                  </p>
                </a>
              </div>
              <div className="card slide-down-fade">
                <a
                  href="https://codeforces.com/profile/MrHacker_007"
                  target="_blank"
                >
                  <img
                    src={cf}
                    className={
                      isActive
                        ? "storyimg storyimgwhite"
                        : "storyimg storyimgblack"
                    }
                  />{" "}
                  <br />
                  <p
                    className={isActive ? "activetext" : ""}
                    style={{
                      fontStyle: "bold",
                      fontSize: "12px",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Code Forces
                  </p>
                </a>
              </div>
              <div className="card slide-down-fade">
                <a href="https://leetcode.com/mrhacker007/" target="_blank">
                  <img
                    src={lc}
                    className={
                      isActive
                        ? "storyimg storyimgwhite"
                        : "storyimg storyimgblack"
                    }
                  />{" "}
                  <br />
                  <p
                    className={isActive ? "activetext" : ""}
                    style={{
                      fontStyle: "bold",
                      fontSize: "12px",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Leet Code
                  </p>
                </a>
              </div>
              <div className="card slide-down-fade">
                <a
                  href="https://auth.geeksforgeeks.org/user/djeditzzbyarjun/"
                  target="_blank"
                >
                  <img
                    src={gfg}
                    className={
                      isActive
                        ? "storyimg storyimgwhite"
                        : "storyimg storyimgblack"
                    }
                  />
                  <br />
                  <p
                    className={isActive ? "activetext" : ""}
                    style={{
                      fontStyle: "bold",
                      fontSize: "12px",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    GFG
                  </p>
                </a>
              </div>
              <a
                href="https://auth.geeksforgeeks.org/user/djeditzzbyarjun/"
                target="_blank"
              ></a>
              <div className="card slide-down-fade">
                <a
                  href="https://auth.geeksforgeeks.org/user/djeditzzbyarjun/"
                  target="_blank"
                ></a>
                <a
                  href="https://www.hackerearth.com/@djeditzzbyarjun"
                  target="_blank"
                >
                  <img
                    src={he}
                    className={
                      isActive
                        ? "storyimg storyimgwhite"
                        : "storyimg storyimgblack"
                    }
                  />{" "}
                  <br />
                  <p
                    className={isActive ? "activetext" : ""}
                    style={{
                      fontStyle: "bold",
                      fontSize: "12px",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Hacker Earth
                  </p>
                </a>
              </div>
              <div className="card slide-down-fade">
                <a href="https://www.hackerrank.com/20L31A0514" target="_blank">
                  <img
                    src={hr}
                    className={
                      isActive
                        ? "storyimg storyimgwhite"
                        : "storyimg storyimgblack"
                    }
                  />
                  <br />
                  <p
                    className={isActive ? "activetext" : ""}
                    style={{
                      fontStyle: "bold",
                      fontSize: "12px",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Hacker Rank
                  </p>
                </a>
              </div>
            </div>
          </section>
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.119)",
            }}
          />
          <section id="about" className="fill">
            <div className="container">
              <div className="left slide-right">
                <img
                  src={isActive ? aboutblack : aboutwhite}
                  width="450px"
                  style={{ margin: "20px" }}
                  className={isActive ? "postimgwhite" : "postimgblack"}
                />
              </div>
              <div
                className="right slide-down-fade"
                style={{ margin: "15px", paddingTop: "20px" }}
              >
                <p className={isActive ? "activetext abouttext" : "abouttext"}>
                  Hi there,👋
                  <br />
                  I'm Arjun Kumar Bera,🧑‍💻
                  <br />
                  and I'm a front-end developer with a passion for becoming a
                  full-stack developer. 😏
                  <br />
                  <br />
                  I'm also proud to say that I'm a social media influencer, with
                  a growing following of 127k on Instagram.😉
                  <br />
                  I love showcasing my Photoshop editing skills on the platform
                  and connecting with fellow tech enthusiasts.📸
                  <br />
                  <br />
                  When it comes to programming, I'm particularly interested in
                  data structures and algorithms, and I'm proud to have a strong
                  foundation in these areas. 🙂
                  <br />I also enjoy competing in programming competitions and
                  am confident in my abilities to tackle complex problems. 💪
                  <br />
                  <br />
                  I'm proficient in a number of programming languages, including
                  Python, C++, JavaScript, HTML, and CSS.😁 <br />I love
                  learning new technologies and staying up to date on the latest
                  trends in the industry. 😅
                  <br />
                  I'm excited about the possibilities that lie ahead and am
                  always eager to take on&nbsp;new&nbsp;challenges.😀
                </p>
                <br />
                <br />
                <p
                  style={{
                    color: isActive
                      ? "rgba(0, 255, 255, 0.900)"
                      : "rgba(11, 11, 197, 0.669)",
                  }}
                >
                  {" "}
                  #FrontEndDeveloper #Photographer #Editor
                  #CompetitiveProgrammer #SocialMediaInfluencer
                </p>
              </div>
            </div>
          </section>
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.119)",
            }}
          />

          <section id="skills" className="fill">
            <div
              className="heading slide-right"
              style={{ textAlign: "center", padding: "50px" }}
            >
              <p
                className={isActive ? "activetext heading" : "heading"}
                style={{
                  textDecoration: "overline",
                }}
              >
                My Skills
              </p>
            </div>
            <div className="container">
              <div className="game-board scaleUp">
                <div className="box ">
                  <img src={c} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      C is my First Programming Language. I learned All Basic
                      Syntax in C and Solved Problems using C.
                    </div>
                  </div>
                </div>
                <div className="box ">
                  <img src={cpp} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      C++ is my primary CP langauge. Standard Template Libraries
                      in C++ made my Competitive coding much easier.
                    </div>
                  </div>
                </div>
                <div className="box ">
                  <img src={python} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      I use python as my secondary competetive programming
                      language as it has vast builtin Libraries.
                    </div>
                  </div>
                </div>
                <div className="box ">
                  <img src={html} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      I am good at HTML and and I Have Good Practice In Creating
                      Webpages Using HTML.
                    </div>
                  </div>
                </div>
                <div className="box ">
                  <img src={css} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      I Have Sufficient Knowledge About CSS and I'm Capable of
                      Designing Responsive Websites.
                    </div>
                  </div>
                </div>
                <div className="box ">
                  <img src={js} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      I Have Basic Knowledge Of JAVASCRIPT.
                    </div>
                  </div>
                </div>
                <div className="box ">
                  <img src={mern} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      MERN is my primary stack for web development
                    </div>
                  </div>
                </div>
                <div className="box ">
                  <img src={dsa} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      I Have Proper Knowledge About DATA STRUCTURES and
                      ALGORITHMS. Solved 2000+ Coding Problems .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.119)",
            }}
          />

          <section id="projects" className="fill">
            <div
              className="heading slide-right"
              style={{ textAlign: "center", padding: "50px" }}
            >
              <p
                className={isActive ? "activetext heading" : "heading"}
                style={{
                  textDecoration: "overline",
                }}
              >
                My Projects
              </p>
            </div>
            <div className="game-board2 slide-up">
              <div className="box ">
                <a
                  href="https://github.com/ERROR404-WEB/Farm-Bank"
                  target="__blank"
                >
                  <img src={farmbank} className="skillsimg" />
                  <div className="overlay">
                    <div className="text">
                      Farm Bank is a webapp which provides an interface between
                      farmers and investors, which will help farmers to get loan
                      without any husstle.
                    </div>
                  </div>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://error404-web.github.io/classroomcanteen/"
                  target="__blank"
                >
                  <img src={canteen} className="skillsimg" />
                  <div className="overlay">
                    <div className="text">
                      Classroom Canteen provides an interface to view and order
                      food and stationary item from your college classroom. It
                      is a Static webpage Designed using HTML, CSS and JS.
                    </div>
                  </div>
                </a>
              </div>
              <div className="box ">
                <a
                  href="https://error404-web.github.io/thesimongame/"
                  target="__blank"
                >
                  <img src={simon} className="skillsimg" />
                  <div className="overlay">
                    <div className="text">
                      It is an interactive webapp game, developed using Jquery
                      and JS.
                    </div>
                  </div>
                </a>
              </div>
              <div className="box ">
                <a
                  href="https://error404-web.github.io/viit.github.io/"
                  target="__blank"
                >
                  <img src={college} className="skillsimg" />
                  <div className="overlay">
                    <div className="text">
                      Its a simple college Landing page build using bootstrap.
                    </div>
                  </div>
                </a>
              </div>
              <div className="box ">
                <a
                  href="https://github.com/ERROR404-WEB/TextEditorOperations"
                  target="__blank"
                >
                  <img src={text} className="skillsimg" />
                  <div className="overlay">
                    <div className="text">
                      It's a simple cpp program which demonstrates all text
                      editor operations.
                    </div>
                  </div>
                </a>
              </div>
              <div className="box ">
                <a
                  href="https://github.com/ERROR404-WEB/Agri-Expert"
                  target="__blank"
                >
                  <img src={agri} className="skillsimg" />
                  <div className="overlay">
                    <div className="text">
                      It is a web assistant for farmers which provides an
                      interface between farmers and agricultural experts. It
                      also has a chat bot which provides technological support.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.119)",
            }}
          />
          <section id="achieve" className="fill">
            <div
              className="heading slide-right"
              style={{ textAlign: "center", padding: "50px" }}
            >
              <p
                className={isActive ? "activetext heading" : "heading"}
                style={{
                  textDecoration: "overline",
                }}
              >
                My Achievements
              </p>
            </div>
            <div className="game-board3 scaleUp">
              <div className="box " style={{ margin: "20px" }}>
                <img src={vista} className="skillsimg box-radius" />
                <div className="overlay">
                  <div className="text">
                    <b>Won 2nd prize in AGRIHACK - 2.0 Hackathon </b>
                    Developed a webapp which provides an interface between
                    farmers and investors, which will help farmers to get loan
                    without any husstle.
                  </div>
                </div>
              </div>

              <div className="box " style={{ margin: "20px" }}>
                <img src={guntur} className="skillsimg box-radius" />
                <div className="overlay">
                  <div className="text">
                    <b>
                      Secured #3 in HACKATHON at NATIONAL LEVEL TECH
                      EXTRAVAGANZA - SRUJANANKURA 2023{" "}
                    </b>
                    Developed a web app named "Agri Expert ". It is a web
                    assistant for farmers which provides an interface between
                    farmers and agricultural experts. It also has a chat bot
                    which provides technological support and solve queries given
                    by farmers. It also provides 24/7 weather surveillance of
                    their city.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.119)",
            }}
          />
          <section id="hobby" className="fill">
            <div
              className="heading slide-right"
              style={{ textAlign: "center", padding: "50px" }}
            >
              <p
                className={isActive ? "activetext heading" : "heading"}
                style={{
                  textDecoration: "overline",
                }}
              >
                My Certifications
              </p>
            </div>
            <div className="game-board4 scaleUp">
              {/* scaleUp */}
              <div className="box ">
                <a
                  href="https://www.codechef.com/certificates/public/33f91c3"
                  target="__blank"
                >
                  <img src={ccdsa} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">CCDSA CERTICFICATION</div>
                  </div>
                </a>
              </div>
              <div className="box ">
                <a
                  href="https://www.hackerrank.com/certificates/720615d5fc32"
                  target="__blank"
                >
                  <img src={rank} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      Problem Solving Basics [ hacker rank ]
                    </div>
                  </div>
                </a>
              </div>
              <div className="box">
                <a href={dbms} target="__blank">
                  <img src={dbms} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">
                      Data base management system Certification [ NPTEL ]
                    </div>
                  </div>
                </a>
              </div>
              <div className="box ">
                <a
                  href="https://codingcompetitions.withgoogle.com/codejam/certificate/summary/0000000000c9694c/0000000000c95b94"
                  target="__blank"
                >
                  <img src={kick1} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">Google Farewell Round A - 2023</div>
                  </div>
                </a>
              </div>
              <div className="box ">
                <a
                  href="https://www.hackerrank.com/certificates/57e6ea3b1651"
                  target="__blank"
                >
                  <img src={java} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">Java (Basic) Certificate</div>
                  </div>
                </a>
              </div>
              <div className="box">
                <a
                  href="https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/00000000008caba4"
                  target="__blank"
                >
                  <img src={kick2} className="skillsimg box-radius" />
                  <div className="overlay">
                    <div className="text">Google Kick Start 2022</div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.119)",
            }}
          />
          <section id="message" className="fill">
            <div
              className="heading slide-right"
              style={{ textAlign: "center", padding: "30px 50px" }}
            >
              <p
                className={isActive ? "activetext heading" : "heading"}
                style={{
                  textDecoration: "overline",
                }}
                h
              >
                Social Links
              </p>
            </div>
            <div className="Qrdiv slide-right">
              <a
                href="https://www.instagram.com/x._mr_arjun_.x/"
                target="__blank"
              >
                <img src={qr} alt="qr" className="qrimg"></img>
              </a>
            </div>
            <div
              className={isActive ? "socials socialsb" : "socials socialsw "}
            >
              <div className="slide-down">
                <a
                  href="https://www.instagram.com/x._mr_arjun_.x/"
                  target="__blank"
                >
                  <img src={insta} className="socicon insta "></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-kumar-34b1bb229/"
                  target="__blank"
                >
                  <img src={linkedin} className="socicon linkedin "></img>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100012879760798"
                  target="__blank"
                >
                  <img src={fb} className="socicon fb "></img>
                </a>
                <a href="https://github.com/ERROR404-WEB" target="__blank">
                  <img src={git} className="socicon github "></img>
                </a>
                <a href="mailto:djeditzzbyarjun@gmail.com" target="__blank">
                  <img src={gmail} className="socicon gmail "></img>
                </a>
                <a href="https://wa.me/+918919912119" target="__blank">
                  <img src={wa} className="socicon whatsapp "></img>
                </a>
                <a
                  href="https://www.snapchat.com/add/im_arjunnnnn?share_id=rTCJPrFzrGE&locale=en-US"
                  target="__blank"
                >
                  <img src={snap} className="socicon snap "></img>
                </a>
                <a
                  href="https://discord.com/channels/@me/1113161690587091175"
                  target="__blank"
                >
                  <img src={discord} className="socicon discord "></img>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKecTlD3Ak9Ws17oLeDKUIA"
                  target="__blank"
                >
                  <img src={youtube} className="socicon youtube "></img>
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>
      
      <section className="mobile">
        <Navbar isActive={isActive} handledarkmode={handledarkmode}/>

        <div className="main-body">
          <section id="s1">
            <div className="profilecontainer ">
              <div className="topbox slide-down-fade">
                <div className="leftbox">
                  <img
                    src={me2}
                    className={
                      isActive
                        ? "profileimage borwhite"
                        : "borblack profileimage"
                    }
                  ></img>
                </div>
                <div className="rightbox">
                  <img
                    src={isActive ? logowhite : logoblack}
                    className="username"
                  ></img>
                  <p
                    className={
                      isActive ? "activetext subusername" : "subusername"
                    }
                  >
                    {" "}
                    FRONT END DEVELOPER{" "}
                  </p>
                </div>
              </div>
              <div className="bottombox">
                <div className="biotext scaleUp">
                  <p className={isActive ? "activetext bio" : "bio"}>
                    Hi there,👋
                    <br />
                    I'm Arjun Kumar Bera,🧑‍💻 <br />
                    and I'm a front-end developer with a passion for becoming a
                    full-stack developer.🙂
                    <br />
                    <br />
                    I'm also proud to say that I'm a social media influencer,
                    with a growing following of 127k on Instagram. 😁
                    <br />
                    <br />I love showcasing my Photoshop editing skills on the
                    platform and connecting with fellow tech enthusiasts.😏
                  </p>
                  <a href="https://www.instagram.com/_captured_moments_official_/" target="__blank"><p className="captured"> @CapturedMoments</p></a> 
                  
                </div>
                <div className="followbtns slide-right">
                <a
                      href="https://www.instagram.com/x._mr_arjun_.x/"
                      className={isActive ? "mbtnd mbtn" : "mbtn mbtnw"}
                      target="_blank"
                    >
                      Follow
                    </a>
                    <a
                      href={resume}
                      className={isActive ? "mbtnd mbtn" : "mbtn mbtnw"}
                      target="_blank"
                    >
                      Resume
                    </a>
                    <Link
                      to="/social"
                      className={isActive ? "mbtnd mbtn" : "mbtn mbtnw"}
                     
                    >
                      Contact
                    </Link>
                </div>
                <div className="story slide-right">
                  <div className="circle">
                    <a
                      href="https://www.codechef.com/users/mrhacker_007"
                      target="_blank"
                    >
                      <img
                        src={cc}
                        className={
                          isActive
                            ? "storyimage storyimgwhite"
                            : "storyimage storyimgblack"
                        }
                      ></img>
                    </a>
                    <br />
                    <p
                      className={isActive ? "activetext" : ""}
                      style={{
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Code Chef
                    </p>
                  </div>
                  <div className="circle">
                    <a href="https://leetcode.com/mrhacker007/" target="_blank">
                      <img
                        src={lc}
                        className={
                          isActive
                            ? "storyimage storyimgwhite"
                            : "storyimage storyimgblack"
                        }
                      ></img>
                    </a>
                    <br />
                    <p
                      className={isActive ? "activetext" : ""}
                      style={{
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Leet Code
                    </p>
                  </div>
                  <div className="circle">
                    <a href="https://codeforces.com/profile/MrHacker_007" target="_blank">
                      <img
                        src={cf}
                        className={
                          isActive
                            ? "storyimage storyimgwhite"
                            : "storyimage storyimgblack"
                        }
                      ></img>
                    </a>
                    <br />
                    <p
                      className={isActive ? "activetext" : ""}
                      style={{
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Code Forces
                    </p>
                  </div>
                  <div className="circle">
                    <a href="https://auth.geeksforgeeks.org/user/djeditzzbyarjun/" target="_blank">
                      <img
                        src={gfg}
                        className={
                          isActive
                            ? "storyimage storyimgwhite"
                            : "storyimage storyimgblack"
                        }
                      ></img>
                    </a>
                    <br />
                    <p
                      className={isActive ? "activetext" : ""}
                      style={{
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      GFG
                    </p>
                  </div>
                  <div className="circle">
                    <a href="https://www.hackerrank.com/20L31A0514" target="_blank">
                      <img
                        src={hr}
                        className={
                          isActive
                            ? "storyimage storyimgwhite"
                            : "storyimage storyimgblack"
                        }
                      ></img>
                    </a>
                    <br />
                    <p
                      className={isActive ? "activetext" : ""}
                      style={{
                        fontSize: "12px",
                        marginTop: "6px",
                      }}
                    >
                      Hacker Rank
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="s2">
            <hr
              style={{
                border: isActive
                  ? "1px solid rgba(255, 255, 255, 0.119)"
                  : "1px solid rgba(0, 0, 0, 0.200)",
              }}
            />
            <div className="headingbox slide-right">
              <p className={isActive ? "activetext mheading" : "mheading"}>
                My Skills
              </p>
            </div>
            <hr
              style={{
                border: isActive
                  ? "1px solid rgba(255, 255, 255, 0.119)"
                  : "1px solid rgba(0, 0, 0, 0.200)",
              }}
            />

            <div className="grid-container">
              <div className="boxm">
                <img src={c} className="skillsimg " />
                <div className="overlaym">
                  <div className="text">C Language.</div>
                </div>
              </div>
              <div className="boxm">
                <img src={python} className="skillsimg " />
                <div className="overlaym">
                  <div className="text">Python Programming</div>
                </div>
              </div>
              <div className="boxm">
                <img src={html} className="skillsimg " />
                <div className="overlaym">
                  <div className="text">HTML</div>
                </div>
              </div>
              <div className="boxm">
                <img src={css} className="skillsimg " />
                <div className="overlaym">
                  <div className="text">CSS</div>
                </div>
              </div>
              <div className="boxm">
                <img src={js} className="skillsimg " />
                <div className="overlaym">
                  <div className="text">JAVA SCRIPT</div>
                </div>
              </div>
              <div className="boxm">
                <img src={cpp} className="skillsimg " />
                <div className="overlaym">
                  <div className="text">C++ Programing</div>
                </div>
              </div>
              <div className="boxm">
                <img src={mern} className="skillsimg" />
                <div className="overlaym">
                  <div className="text">MERN STACK</div>
                </div>
              </div>
              <div className="boxm">
                <img src={dsa} className="skillsimg" />
                <div className="overlaym">
                  <div className="text">DSA</div>
                </div>
              </div>
              <div className="boxm">
                <img src={flask} className="skillsimg " />
                <div className="overlaym">
                  <div className="text">Flask</div>
                </div>
              </div>
            </div>
          </section>

          <section id="s3">
            <hr
              style={{
                border: isActive
                  ? "1px solid rgba(255, 255, 255, 0.119)"
                  : "1px solid rgba(0, 0, 0, 0.200)",
              }}
            />
            <div className="headingbox slide-right">
              <p className={isActive ? "activetext mheading" : "mheading"}>
                My Certifications
              </p>
            </div>
            <hr
              style={{
                border: isActive
                  ? "1px solid rgba(255, 255, 255, 0.119)"
                  : "1px solid rgba(0, 0, 0, 0.200)",
              }}
            />

            <div className="grid-container">
              <div className="boxm">
                <a
                  href="https://www.codechef.com/certificates/public/33f91c3"
                  target="__blank"
                >
                  <img src={ccdsa} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">CCDSA</div>
                  </div>
                </a>
              </div>
              <div className="boxm">
                <a
                  href="https://www.hackerrank.com/certificates/720615d5fc32"
                  target="__blank"
                >
                  <img src={rank} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">Hacker Rank</div>
                  </div>
                </a>
              </div>
              <div className="boxm">
                <a href={dbms} target="__blank">
                  <img src={dbms} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">DBMS [NPTEL] </div>
                  </div>
                </a>
              </div>
              <div className="boxm">
                <a
                  href="https://codingcompetitions.withgoogle.com/codejam/certificate/summary/0000000000c9694c/0000000000c95b94"
                  target="__blank"
                >
                  <img src={kick1} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">FAREWELL ROUND 1</div>
                  </div>
                </a>
              </div>
              <div className="boxm">
                <a
                  href="https://www.hackerrank.com/certificates/57e6ea3b1651"
                  target="__blank"
                >
                  <img src={java} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">JAVA </div>
                  </div>
                </a>
              </div>
              <div className="boxm">
                <a
                  href="https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/00000000008caba4"
                  target="__blank"
                >
                  <img src={kick2} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">KICK START</div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section id="s4">
            <hr
              style={{
                border: isActive
                  ? "1px solid rgba(255, 255, 255, 0.119)"
                  : "1px solid rgba(0, 0, 0, 0.200)",
              }}
            />
            <div className="headingbox slide-right">
              <p className={isActive ? "activetext mheading" : "mheading"}>
                My Projects
              </p>
            </div>
            <hr
              style={{
                border: isActive
                  ? "1px solid rgba(255, 255, 255, 0.119)"
                  : "1px solid rgba(0, 0, 0, 0.200)",
              }}
            />

            <div className="grid-container">
              <div className="boxm fixedbox">
                <a
                  href="https://github.com/ERROR404-WEB/Farm-Bank"
                  target="__blank"
                >
                  <img src={farmbank} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">FARM BANK</div>
                  </div>
                </a>
              </div>
              <div className="boxm fixedbox">
                <a
                  href="https://error404-web.github.io/classroomcanteen/"
                  target="__blank"
                >
                  <img src={canteen} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">CLASSROOM CANTEEN</div>
                  </div>
                </a>
              </div>
              <div className="boxm fixedbox">
                <a
                  href="https://error404-web.github.io/thesimongame/"
                  target="__blank"
                >
                  <img src={simon} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">SIMON GAME </div>
                  </div>
                </a>
              </div>
              <div className="boxm fixedbox">
                <a
                  href="https://error404-web.github.io/viit.github.io/"
                  target="__blank"
                >
                  <img src={college} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">VIIT LANDING</div>
                  </div>
                </a>
              </div>
              <div className="boxm fixedbox">
                <a
                  href="https://github.com/ERROR404-WEB/TextEditorOperations"
                  target="__blank"
                >
                  <img src={text} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">TEXT EDITOR </div>
                  </div>
                </a>
              </div>
              <div className="boxm fixedbox">
                <a
                  href="https://github.com/ERROR404-WEB/Agri-Expert"
                  target="__blank"
                >
                  <img src={agri} className="skillsimg " />
                  <div className="overlaym">
                    <div className="text">AGRI EXPERT</div>
                  </div>
                </a>
              </div>
            </div>
            
          </section>
          
        </div>

        <Footer isActive={isActive}/>
      </section>
      
    </div>
    
  );
}
