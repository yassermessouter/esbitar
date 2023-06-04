import React from "react";
import "../App.css";
import Accordion from "react-bootstrap/Accordion";
import SubmitForm from "./SubmitForm";

function MaladieDescription({ role }) {
  return (
    <div>
      <h3>kach mard</h3>
      <p style={{ fontSize: "18px" }}>
        Diabetes is a chronic metabolic disorder characterized by high blood
        sugar levels. It occurs when the body either doesn't produce enough
        insulin or cannot effectively use the insulin it produces. Insulin is a
        hormone that regulates the metabolism of carbohydrates and helps
        transport glucose from the bloodstream into cells for energy. There are
        two main types of diabetes: type 1 and type 2. Type 1 diabetes is an
        autoimmune disease in which the immune system attacks and destroys the
        insulin-producing cells in the pancreas. As a result, individuals with
        type 1 diabetes require lifelong insulin injections or the use of an
        insulin pump to manage their blood sugar levels.
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Causes</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Symptômes</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Traitement</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Ressources</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {role === "doctor" ? (
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ width: "50%" }}>
            <SubmitForm text="Modifier" style={{ width: "50%" }} />
          </div>
          <div style={{ width: "50%" }}>
            <SubmitForm text="Supprimer" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MaladieDescription;
