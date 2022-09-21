import React from "react";
import SearchById from "./SearchById.jsx";
import SearchByTitle from "./SearchByTitle.jsx";

export default function FormCard() {
  return (
    <section className="form-container">
      <SearchByTitle />
      <SearchById />
    </section>
  );
}
