import React from "react";
import Card from "./Card";

const Forground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex gap-5 p-3 overflow-auto">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Forground;
