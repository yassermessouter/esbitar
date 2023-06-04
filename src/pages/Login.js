import React from "react";
import Illustration from "../assets/imgs/illustration.png";
import phone_icon from "../assets/imgs/phone_icon.svg";
import pwd_icon from "../assets/imgs/icon-psw.svg";
import InputForm from "../components/InputForm";
import SubmitForm from "../components/SubmitForm";
import { Link } from "react-router-dom";
import { isPhoneNumberValid } from "../components/InputVirification";
import { isPasswordValid } from "../components/InputVirification";
import { useRef } from "react";

function Login() {
  const user = useRef({
    tel: "",
    psw: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isPhoneNumberValid(user.current.tel) &&
      isPasswordValid(user.current.psw)
    ) {
      console.log(user.current.tel);
      console.log(user.current.psw);
    }
  };
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
          <h1 style={{ marginBottom: "20px" }}>Bienvenue à eSbitar ! </h1>
          {/* <CustomAlert show={!valide} message={msg}></CustomAlert> */}

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
          <Link className="link-style" to="">
            mot de passe oublié?
          </Link>
          <SubmitForm text="Se connecter" />
          <div style={{ marginTop: "10px" }}>
            <span
              style={{ color: "#545454", fontSize: "15px", fontWeight: "300" }}
            >
              Vous n’avez pas de compte médical? &nbsp;
              <Link className="link-style" to="/register">
                Inscrivez-vous maintenant{" "}
              </Link>{" "}
            </span>
          </div>
          <div>
            <span
              style={{
                color: "#545454",
                fontSize: "15px",
                fontWeight: "300",
              }}
            >
              Êtes-vous médecin?&nbsp;
              <Link className="link-style" to="/doctor-register">
                Inscrivez un nouveau médecin
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

export default Login;
