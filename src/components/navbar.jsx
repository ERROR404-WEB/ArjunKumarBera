import React, { useEffect, useState } from "react";
export default function Navbar({ isActive, handledarkmode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={loading ? "displaynone" : ""}>
      <div
        className={
          isActive ? "navbar bgblack bbwhite" : "navbar bgwhite bbblack"
        }
      >
        <ul className="navlist1">
          <li>
            <p>
              {" "}
              <b>Arjun Kumar Bera</b>
            </p>
          </li>
        </ul>
        <ul className="navlist2">
          <li>
            <a onClick={handledarkmode}>
              <span className={isActive ? "iconw" : "icon"}>
                <i className="fa-solid fa-gear " />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
