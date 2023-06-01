import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import gunturb from "./images/gunturblack.jpg";
import gunturw from "./images/gunturwhite.jpg";
import vistab from "./images/vistablack.jpg";
import vistaw from "./images/vistawhite.jpg";
import aboutb from "./images/aboutblack.jpg";
import aboutw from "./images/aboutwhite.jpg";

export default function Posts() {
  const [isActive, setIsActive] = useState(false);

  const handledarkmode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? "bgblack" : "bgwhite"}>
      <Navbar isActive={isActive} handledarkmode={handledarkmode} />
      <section className={isActive ? "bgblack postsbody" : "bgwhite postsbody"}>
        <div className="postcard">
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.119)",
            }}
          />
          <img className="postimage" src={isActive ? aboutb : aboutw}></img>
          <details className="caption">
            <summary>Hi There 👋...</summary>
            <p>
              I'm Arjun Kumar Bera,🧑‍💻
              <br />
              and I'm a front-end developer with a passion for becoming a
              full-stack developer. 😏
              <br />
              <br />
              I'm also proud to say that I'm a social media influencer, with a
              growing following of 127k on Instagram.😉
              <br />
              I love showcasing my Photoshop editing skills on the platform and
              connecting with fellow tech enthusiasts.📸
              <br />
              <br />
              When it comes to programming, I'm particularly interested in data
              structures and algorithms, and I'm proud to have a strong
              foundation in these areas. 🙂
              <br />I also enjoy competing in programming competitions and am
              confident in my abilities to tackle complex problems. 💪
              <br />
              <br />
              I'm proficient in a number of programming languages, including
              Python, C++, JavaScript, HTML, and CSS.😁 <br />I love learning
              new technologies and staying up to date on the latest trends in
              the industry. 😅
              <br />
              I'm excited about the possibilities that lie ahead and am always
              eager to take on&nbsp;new&nbsp;challenges.😀
            </p>
            <p
              style={{
                color: isActive
                  ? "rgba(0, 255, 255, 0.900)"
                  : "rgba(11, 11, 197, 0.669)",
              }}
            >
              {" "}
              #FrontEndDeveloper #Photographer #Editor #CompetitiveProgrammer
              #SocialMediaInfluencer
            </p>
          </details>
        </div>
        <div className="postcard">
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.100)",
            }}
          />

          <img className="postimage" src={isActive ? gunturb : gunturw}></img>
          <details className="caption">
            <summary>Secured #3 🥳....</summary>
            <p>
              in HACKATHON at NATIONAL LEVEL TECH EXTRAVAGANZA - SRUJANANKURA
              2023. <br />
              Developed a web app named "Agri Expert ". It is a web assistant
              for farmers which provides an interface between farmers and
              agricultural experts.😏
              <br /> It also has a chat bot which provides technological support
              and solve queries given by farmers.🧑‍💻
              <br /> It also provides 24/7 weather surveillance of their city.
            </p>
          </details>
        </div>
        <div className="postcard">
          <hr
            style={{
              border: isActive
                ? "1px solid rgba(255, 255, 255, 0.119)"
                : "1px solid rgba(0, 0, 0, 0.100)",
            }}
          />
          <img className="postimage" src={isActive ? vistab : vistaw}></img>
          <details className="caption">
            <summary>Won 2nd prize 🥳....</summary>
            <p> in AGRIHACK - 2.0 Hackathon. <br/>Developed a webapp which provides an interface between
                    farmers and investors, which will help farmers to get loan
                    without any husstle.🙂</p>
          </details>
        </div>
      </section>
      <Footer isActive={isActive} />
    </div>
  );
}
