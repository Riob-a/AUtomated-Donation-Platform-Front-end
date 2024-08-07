import React, { useEffect, useState } from "react";
import "./Charities.css";

const Charities = () => {
  const [charities, setCharities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/charities")
      .then((response) => response.json())
      .then((data) => setCharities(data));
  }, []);

  const filteredCharities = charities.filter((charity) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      charity.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      charity.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div>
      <div className="header-container">
        <h1 className="header">Charities</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Charity"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search"
        />
      </div>
      <div className="charities-container">
        {filteredCharities.map((charity, index) => (
          <div key={index} className="charity-card">
            <h3>{charity.name}</h3>
            <p>{charity.description}</p>
            <button className="button">Donate</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charities;
