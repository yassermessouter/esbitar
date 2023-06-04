import React from "react";
import labary from "../assets/imgs/building-library.svg";
import arrow from "../assets/imgs/arrow_icon.svg";

function SelectInput({ disable, ...rest }) {
  return (
    <div {...rest} className="col form-group">
      <label
        className="form-label"
        style={{ color: "#07004D", fontSize: "16px" }}
      >
        Spécialité
      </label>
      <div className="input-group">
        <img src={labary} className="icon" />
        <select
          className=" form-control"
          aria-label="Default select example"
          defaultValue="0"
          disabled={disable ? true : false}
        >
          <option value="0" disabled>
            choisir votre spécialité
          </option>
          <option value="Cardiologie">Cardiologie</option>
          <option value="Dermatologie">Dermatologie</option>
          <option value="Pédiatrie">Pédiatrie </option>
          <option value="Gastro-entérologie">Gastro-entérologie</option>
          <option value="Neurologie">Neurologie</option>
          <option value="Radiologie">Radiologie</option>
          <option value="Ophtalmologie">Ophtalmologie </option>
        </select>
        <img src={arrow} className="icon-right" />
      </div>
    </div>
  );
}

export default SelectInput;
