import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import qr from "./images/instaqr.jpg";

import wa from "./images/Whatsapp.png";
import tele from "./images/Telegram.png";
import snap from "./images/Snapchat.png";
import youtube from "./images/Youtube.png";
import git from "./images/github.png";
import discord from "./images/Discord.png";
import fb from "./images/Facebook.png";
import gmail from "./images/gmail.png";
import insta from "./images/Instagram.png";
import linkedin from "./images/LinkedIn.png";
import Scrollspy from "react-scrollspy";
import ScrollReveal from "scrollreveal";

export default function Social() {

  useEffect(() => {
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".scaleUp", {
      duration: 2000,
      scale: 0.85,
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

  return (
    <div>
      <Navbar isActive={isActive} handledarkmode={handledarkmode} />
      <section
        className={isActive ? "bgblack socialbody" : "socialbody"}
        id="qr"
      >
        <div className="qrcodebox scaleUp">
          <img src={qr} className="qrm"></img>
          
        </div>
        <div
          className="heading slide-right"
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <p
            className={isActive ? "activetext heading" : "heading"}
          >
            Social  Links
          </p>
        </div>
        <div className="socialiconsbox">
          <div className="gridbox slide-down">
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
      <Footer isActive={isActive} />
    </div>
  );
}
