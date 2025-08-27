import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let [citiesUS, setCitiesUS] = useState([
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Miami",
  ]);
  let [citiesPH, setCitiesPH] = useState([
    "Quezon City",
    "Davao City",
    "Caloocan",
    "Cebu City",
    "Zamboanga City",
    "Taguig",
    "Antipolo",
    "San Pedro",
  ]);
  let [citiesSkosia, setCitiesSkosia] = useState<string[]>([]);

  const handleSelectedCity = (city: string) => {
    console.log(city);
  };

  const [selectedCountry, setSelectedCountry] = useState("US");
  const [cityInput, setCityInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [showChangeWorld, setShowChangeWorld] = useState(false);

  const handleAddCity = () => {
    if (!cityInput.trim()) return;
    if (selectedCountry === "US") {
      setCitiesUS([...citiesUS, cityInput]);
    } else if (selectedCountry === "PH") {
      setCitiesPH([...citiesPH, cityInput]);
    } else if (selectedCountry === "Skosia") {
      setCitiesSkosia([...citiesSkosia, cityInput]);
    }
    setAlertMsg("New city generated!");
    setCityInput("");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleRemoveCity = (country: string, city: string) => {
    if (country === "US") {
      setCitiesUS(citiesUS.filter((c) => c !== city));
    } else if (country === "PH") {
      setCitiesPH(citiesPH.filter((c) => c !== city));
    } else if (country === "Skosia") {
      setCitiesSkosia(citiesSkosia.filter((c) => c !== city));
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        My World
        <button
          className="btn primary"
          onClick={() => setShowChangeWorld((prev) => !prev)}
        >
          Change World
        </button>
      </h1>

      {showAlert && <div className="alert">{alertMsg}</div>}

      {showChangeWorld && (
        <div className="card">
          <h2 className="subtitle">Change World</h2>

          <div className="form-row">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="US">US</option>
              <option value="PH">Philippines</option>
              <option value="Skosia">Skosia</option>
            </select>

            <input
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              placeholder="Name your new city"
            />

            <button onClick={handleAddCity} className="btn success">
              Add City
            </button>
          </div>

          <ul className="city-list">
            {(selectedCountry === "US"
              ? citiesUS
              : selectedCountry === "PH"
              ? citiesPH
              : citiesSkosia
            ).map((city) => (
              <li key={city} className="city-item">
                <span>{city}</span>
                <button
                  className="btn danger small"
                  onClick={() => {
                    handleRemoveCity(selectedCountry, city);
                    setAlertMsg("Something happened!");
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 2000);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ListGroup
        cities={citiesUS ?? []}
        heading="  Cities in the US"
        onSelectedCity={handleSelectedCity}
      ></ListGroup>
      <ListGroup
        cities={citiesPH ?? []}
        heading="  Cities in the Philippines"
        onSelectedCity={handleSelectedCity}
      ></ListGroup>
      <ListGroup
        cities={citiesSkosia ?? []}
        heading="  Cities in Skosia"
        onSelectedCity={handleSelectedCity}
      />
    </div>
  );
}

export default App;
