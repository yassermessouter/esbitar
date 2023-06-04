import React from "react";
import { Form } from "react-bootstrap";
import SubmitForm from "./SubmitForm";

function ModifierMaladie() {
  return (
    <div>
      <h3>Profile de maladie</h3>
      <form style={{ marginLeft: "2px", marginTop: "20px" }}>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          style={{ width: "50%" }}
        >
          <Form.Label>nom</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Causes</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Symptômes</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Traitement</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ressources</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div style={{ width: "50%" }}>
          <SubmitForm text="Modifier" />
        </div>
      </form>
    </div>
  );
}

export default ModifierMaladie;
