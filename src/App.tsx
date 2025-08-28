import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import "./App.css";
import Button from "./components/Button";
import ChangeWorld from "./components/ChangeWorld";

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

  const [selectedCountry, setSelectedCountry] = useState<
    "US" | "PH" | "Skosia"
  >("US");
  const [showChangeWorld, setShowChangeWorld] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  //handle add city
  const handleAddCity = (country: "US" | "PH" | "Skosia", city: string) => {
    if (country === "US") {
      setCitiesUS([...citiesUS, city]);
    } else if (country === "PH") {
      setCitiesPH([...citiesPH, city]);
    } else if (country === "Skosia") {
      setCitiesSkosia([...citiesSkosia, city]);
    }
    setAlertMsg("New city generated!");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  //handle remove city
  const handleRemoveCity = (country: string, city: string) => {
    if (country === "US") {
      setCitiesUS(citiesUS.filter((c) => c !== city));
    } else if (country === "PH") {
      setCitiesPH(citiesPH.filter((c) => c !== city));
    } else if (country === "Skosia") {
      setCitiesSkosia(citiesSkosia.filter((c) => c !== city));
    }

    setAlertMsg("Something happened!");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
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

      {showChangeWorld && (
        <ChangeWorld
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          onAddCity={handleAddCity}
          onRemoveCity={handleRemoveCity}
          citiesUS={citiesUS}
          citiesPH={citiesPH}
          citiesSkosia={citiesSkosia}
          onClose={() => setShowChangeWorld(false)}
        />
      )}

      {showAlert && <Alert>{alertMsg}</Alert>}

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
