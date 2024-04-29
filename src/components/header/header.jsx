import React from "react";
import "./header.css";

export function Header() {
  return (
    <header>
      <div className="title">
        <p className="title-text">Кино справочник</p>
      </div>
      <div className="container-author">
        <p className="author">prod by @slavmirol</p>
      </div>
    </header>
  );
}
