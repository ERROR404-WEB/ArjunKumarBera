import React from "react";
import Home from "./home";
import me from "./images/me2.jpg";

import { Link, useNavigate } from 'react-router-dom';
export default function Footer({ isActive }) {
    const navigate = useNavigate();
    const handleClick = (targetSection) => {
        navigate('/', { scrollOptions: { behavior: 'smooth' }, state: { scrollTo: targetSection } });
      };
      const handleClick2 = (targetSection) => {
        navigate('/social', { scrollOptions: { behavior: 'smooth' }, state: { scrollTo: targetSection } });
      };

  return (
    <>
      <div
        className={
          isActive ? "footer bgblack btwhite" : "footer bgwhite btblack"
        }
      >
        <div className="footerbox">
          <ul className="footerlist">
            <li>
              <Link
                to="/posts"
                
                className={isActive ? " activetext whiteh" : "blackh"}
                
              >
                <span className={isActive ? "iconw" : "icon"}>
                  <i className="fas  fa-house fa-xl" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/social"
                onClick={() => handleClick2('qr')}
                className={isActive ? "activetext whiteh" : "blackh"}
              >
                <span className={isActive ? "iconw" : "icon"}>
                  <i className="far fa-heart fa-xl" />
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#s2"
                onClick={() => handleClick('s2')}
                className={isActive ? " activetext whiteh" : "blackh"}
              >
                <span className={isActive ? "iconw" : "icon"}>
                  <i className="far fa-plus-square fa-xl" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#s3"
                onClick={() => handleClick('s3')}
                className={isActive ? " activetext whiteh" : "blackh"}
              >
                <span className={isActive ? "iconw" : "icon"}>
                  <i className="far fa-compass fa-xl" />
                </span>
              </a>
            </li>

            <li>
              <a
                href="#s1"
                onClick={() => handleClick('s1')}
                className={isActive ? " activetext whiteh" : "blackh"}
              >
                <span className={isActive ? "iconw" : "icon"}>
                  <img
                    src={me}
                    className={
                      isActive ? "profileicon borwhite" : "profileicon borblack"
                    }
                  ></img>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
