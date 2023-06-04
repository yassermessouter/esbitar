import React from "react";

function SubmitForm({ text }) {
  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", marginTop: "25px" }}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitForm;
