import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = [
    {
      name: "USA",
      cities: ["New York", "Los Angeles", "Chicago", "San Francisco"],
    },
    {
      name: "India",
      cities: ["Delhi", "Banglore", "Kolkata", "Kerala"],
    },
    {
      name: "Nepal",
      cities: ["Pokhara", "Kathmandu", "Dhangadhi", "Nepalgunj"],
    },
  ];

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;

    setSelectedCountry(selectedCountry);

    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;

    setSelectedCity(selectedCity);
  };

  return (
    <div className="container">
      <h1>Country and City Dropdowns</h1>

      <div className="select-container">
        <label>Select a Country:</label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div className="select-container">
          <label>Select a City:</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {countries
              .find((country) => country.name === selectedCountry)
              .cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedCity && (
        <div>
          <p>
            You selected: {selectedCountry}, {selectedCity}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
