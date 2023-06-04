import React from "react";
import Illustration from "../assets/imgs/illustration.png";
import phone_icon from "../assets/imgs/phone_icon.svg";
import pwd_icon from "../assets/imgs/icon-psw.svg";
import profile_icon from "../assets/imgs/profile.svg";
import InputForm from "../components/InputForm";
import SubmitForm from "../components/SubmitForm";
import SelectInput from "../components/SelectInput";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  isPhoneNumberValid,
  isNomValide,
  isPasswordValid,
} from "../components/InputVirification";
import axios from "axios";
const url = "http://127.0.0.1:8000/user";

function Register({ as }) {
  const user = useRef({
    nom: "",
    prenom: "",
    tel: "",
    psw: "",
    specialité: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isNomValide(user.current.nom) &&
      isNomValide(user.current.prenom) &&
      isPhoneNumberValid(user.current.tel) &&
      isPasswordValid(user.current.psw)
    ) {
      console.log(user.current.nom);
      console.log(user.current.prenom);
      console.log(user.current.tel);
      console.log(user.current.psw);
      console.log(user.current.specialité);
      // try {
      const response = await axios.post(
        url,
        {
          nom: "sssss",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3001",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
      console.log(response.data); // Handle the response data here
      // }
      // catch (error) {
      //   console.log(error); // Handle any error that occurred
      // }
    }
  };
  ///
  return (
    <div className="App-header">
      <div
        style={{
          background: "#FFF",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          display: "flex",
          fontFamily: "Poppins",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "50%", padding: "50px" }}>
          <h1 style={{ marginBottom: "20px" }}>Register en eSbitar ! </h1>
          {/* <CustomAlert show={!valide} message={msg}></CustomAlert> */}
          <div style={{ display: "flex", gap: "10px" }}>
            <InputForm
              style={{ width: "50%" }}
              infos={{
                label: "Nom",
                placeHolder: "XYZ",
                type: "text",
                icon: profile_icon,
              }}
              onChange={(e) => {
                user.current.nom = e.target.value;
              }}
            />
            <InputForm
              style={{ width: "50%" }}
              infos={{
                label: "Prénom",
                placeHolder: "XYZ",
                type: "text",
                icon: profile_icon,
              }}
              onChange={(e) => {
                user.current.prenom = e.target.value;
              }}
            />
          </div>

          <InputForm
            infos={{
              label: "Numéro de téléphone",
              placeHolder: "xx-xx-xx-xx-xx",
              type: "text",
              icon: phone_icon,
            }}
            onChange={(e) => {
              user.current.tel = e.target.value;
            }}
          />
          {as === "doctor" ? (
            <SelectInput
              onChange={(e) => {
                user.current.specialité = e.target.value;
              }}
            />
          ) : null}

          <InputForm
            infos={{
              label: "mot de passe",
              placeHolder: "saisissez votre mot de passe ....",
              type: "password",
              icon: pwd_icon,
            }}
            onChange={(e) => {
              user.current.psw = e.target.value;
            }}
          />

          <SubmitForm text="Enregistrer" />
          <div style={{ marginTop: "10px" }}>
            <span
              style={{ color: "#545454", fontSize: "15px", fontWeight: "300" }}
            >
              Vous avez un compte médical?&nbsp;
              <Link className="link-style" to="/login">
                Connecter-vous{" "}
              </Link>{" "}
            </span>
          </div>
        </form>
        <div style={{ padding: "20px" }}>
          <img src={Illustration} style={{ height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Register;
