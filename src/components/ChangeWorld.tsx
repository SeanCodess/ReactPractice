import { useState } from "react";

interface Props {
  selectedCountry: "US" | "PH" | "Skosia";
  setSelectedCountry: (country: "US" | "PH" | "Skosia") => void;
  onAddCity: (country: "US" | "PH" | "Skosia", city: string) => void;
  onRemoveCity: (country: "US" | "PH" | "Skosia", city: string) => void;
  citiesUS: string[];
  citiesPH: string[];
  citiesSkosia: string[];
  onClose: () => void;
}

function ChangeWorld({
  selectedCountry,
  setSelectedCountry,
  onAddCity,
  onRemoveCity,
  citiesUS,
  citiesPH,
  citiesSkosia,
  onClose,
}: Props) {
  const [changeWorldAction, setChangeWorldAction] = useState<
    "add" | "remove" | null
  >(null);
  const [cityInput, setCityInput] = useState("");
  const [selectedCityToRemove, setSelectedCityToRemove] = useState("");

  return (
    <div className="card">
      <h2 className="subtitle">Change World</h2>

      {!changeWorldAction && (
        <div className="form-row">
          <button
            className="btn success"
            onClick={() => setChangeWorldAction("add")}
          >
            Generate New City
          </button>
          <button
            className="btn danger"
            onClick={() => setChangeWorldAction("remove")}
          >
            Remove City
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setChangeWorldAction(null);
              setCityInput("");
              setSelectedCityToRemove("");
              onClose(); // parent actually hides the whole card
            }}
          >
            Close
          </button>
        </div>
      )}

      {changeWorldAction === "add" && (
        <div className="form-row">
          {/* Country Dropdown */}
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="US">US</option>
            <option value="PH">Philippines</option>
            <option value="Skosia">Skosia</option>
          </select>

          {/* City Name Input */}
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter new city"
          />

          {/* Add City Button */}
          <button
            className="btn success"
            disabled={!cityInput}
            onClick={() => {
              onAddCity(selectedCountry, cityInput);
              setCityInput("");
            }}
          >
            Add City
          </button>

          {/* Back Button */}
          <button
            className="btn btn-secondary"
            onClick={() => setChangeWorldAction(null)}
          >
            Back
          </button>
        </div>
      )}

      {changeWorldAction === "remove" && (
        <div>
          <div className="form-row">
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value as "US" | "PH" | "Skosia");
                setSelectedCityToRemove("");
              }}
            >
              <option value="US">US</option>
              <option value="PH">Philippines</option>
              <option value="Skosia">Skosia</option>
            </select>
            <select
              value={selectedCityToRemove}
              onChange={(e) => setSelectedCityToRemove(e.target.value)}
            >
              <option value="">Select a city</option>
              {(selectedCountry === "US"
                ? citiesUS
                : selectedCountry === "PH"
                ? citiesPH
                : selectedCountry === "Skosia"
                ? citiesSkosia
                : []
              ).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <button
              className="btn danger"
              disabled={!selectedCityToRemove}
              onClick={() => {
                onRemoveCity(selectedCountry, selectedCityToRemove);
                setSelectedCityToRemove("");
              }}
            >
              Remove City
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setChangeWorldAction(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChangeWorld;
