import React from "react";
import { SearchFormContainer } from "../styles/styles.js";

export default function SearchForm({ handleInput, search }) {
  return (
    <SearchFormContainer className="d-flex justify-content-center h-100">
      <div className="dv">
        <div className="Sc">
          <input className="inpt" type="search" placeholder="Search..." />
          <span className="search_icon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </SearchFormContainer>
  );
}