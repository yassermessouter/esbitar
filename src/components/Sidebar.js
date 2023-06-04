import { ReactComponent as Virus } from "../assets/imgs/virus_icon.svg";
import { ReactComponent as PowerOffIcon } from "../assets/imgs/power-off-solid.svg";
import profile_icon from "../assets/imgs/profile.svg";
import logo from "../assets/imgs/eSbitar_logo.webp";
import "../assets/styles/sidebar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PatientSidebar({ index, fullName, role }) {
  const [clickedItemIndex, setClickedItemIndex] = useState(index);
  const iconslist = [0, 1, 2, 3, 4, 5, 6];
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleItemClick = (index) => {
    setClickedItemIndex(index);
  };
  const items = [
    {
      icon: (
        <Virus
          fill={clickedItemIndex === iconslist[0] ? "#07004d" : "#8c8ca2"}
        />
      ),
      text: "Maladies",
      link: "/maladies",
    },
    {
      icon: (
        <PowerOffIcon
          fill={clickedItemIndex === iconslist[1] ? "#07004d" : "#8c8ca2"}
        />
      ),
      text: "Se deconnecter",
      link: "/logout",
    },
  ];
  const otherItems = [];
  return (
    <div className="sidebar" style={{ fontFamily: "poppins" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginLeft: "25px",
          alignItems: "center",
          fontSize: "20px",
          color: "#00d1bd",
        }}
      >
        <img src={logo} style={{ width: "40px" }} />
        <span>eSbitar</span>
      </div>

      <div>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "40px" }}>
          {items.map((item, index) => (
            <li onClick={() => handleItemClick(index)} key={index}>
              <Link to={item.link}>
                <div className="icon-container">{item.icon}</div>
                <span
                  style={
                    clickedItemIndex === index
                      ? { color: "#07004d", marginLeft: "10px" }
                      : { marginLeft: "10px" }
                  }
                >
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-picture-container">
        <div className="profile-picture">
          <img src={profile_icon} alt="Profile" />
        </div>

        <div className="user-details">
          <h2>{fullName}</h2>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default PatientSidebar;
