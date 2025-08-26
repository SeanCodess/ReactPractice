import ListGroup from "./components/ListGroup";

function App() {
  let citiesUS = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Miami",
  ];
  let citiesPH = [
    "Quezon City",
    "Manila",
    "Davao City",
    "Caloocan",
    "Cebu City",
    "Zamboanga City",
    "Taguig",
    "Antipolo",
    "Pasig",
    "San Pedro",
  ];
  return (
    <div>
      <ListGroup cities={citiesUS} heading="Cities in the US"></ListGroup>
      <ListGroup
        cities={citiesPH}
        heading="Cities in the Philippines"
      ></ListGroup>
    </div>
  );
}

export default App;
