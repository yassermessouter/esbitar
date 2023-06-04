import React from "react";
import InputForm from "../components/InputForm";
import search_icon from "../assets/imgs/search_icon.svg";
import { Link } from "react-router-dom";
import SubmitForm from "./SubmitForm";
import { useState } from "react";
function ListMaladies() {
  const [role, setRole] = useState("doctor");
  const [items, setItems] = useState([
    "Sxxsaab",
    "Vsvsvsolvo",
    "BfvdfMW",
    "Vofvddlvo",
    "BMvdfxdxW",
    "Volxswvo",
    "BvvfsdMW",
    "Vvngnolvo",
    "BgbggMW",
  ]);
  const [updateItems, setUpdateItems] = useState(items);
  const [searchValue, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setUpdateItems(items);
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUpdateItems(filteredItems);
  };
  return (
    <div>
      <div style={{ display: "flex", marginBottom: "20px", gap: "20px" }}>
        <div
          className="input-group"
          style={{ width: "50%", paddingLeft: "2px" }}
        >
          <img src={search_icon} className="icon" />
          <input
            className="form-control"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
        {role === "doctor" ? (
          <div style={{ width: "50%" }}>
            <Link
              to="/maladies/add"
              style={{
                textDecoration: "none",
                color: "#07004d",
                alignItems: "center",
                color: "#FFF",
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", height: "100%" }}
              >
                Ajouter une maladie
              </button>
            </Link>
          </div>
        ) : null}
      </div>
      <div style={{ fontFamily: "poppins" }}>
        {updateItems.map((item, index) => (
          <div
            key={index}
            style={{ borderBottom: "1px solid #9cd9db", padding: "10px 0" }}
          >
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "#07004d",
                width: "fit-content",
                display: "block",
              }}
            >
              <p
                style={{
                  width: "fit-content",
                  margin: "0",
                  fontSize: "22px",
                }}
              >
                {item}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListMaladies;
