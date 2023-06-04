import React from "react";
import Sidebar from "../components/Sidebar";
import ListMaladies from "../components/ListMaladies";
import MaladieDescription from "../components/MaladieDescription";
import AjouterMaladies from "../components/AjouterMaladies";
import ModifierMaladie from "../components/ModifierMaladie";

function Maladies({ page }) {
  function componentToRender() {
    switch (page) {
      case "list":
        return <ListMaladies />;
        break;
      case "description":
        return <MaladieDescription role="doctor" />;
        break;
      case "add":
        return <AjouterMaladies />;
        break;
      case "modify":
        return <ModifierMaladie />;
        break;
    }
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content  auto",
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <Sidebar index={0} fullName="messouter yasser" role="patient" />
      <div style={{ padding: "40px 200px 40px 0", overflowY: "scroll" }}>
        {componentToRender()}
      </div>
    </div>
  );
}

export default Maladies;
