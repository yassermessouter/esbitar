import { useEffect, useState } from "react";

export const Logout = () => {
  useEffect(() => {
    localStorage.clear();
    window.location.href = "/login";
  }, []);
  return <div></div>;
};
