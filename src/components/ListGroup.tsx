import { useState } from "react";
import "./ListGroup.css";

interface Props {
  cities: string[];
  heading: string;
  onSelectedCity?: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectedCity }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return cities.length === 0 ? (
      <ul className="list-group">
        <li className="list-group-item">No cities yet</li>
      </ul>
    ) : null;
  };

  return (
    <>
      <h1 className="listgroup-heading">{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              if (onSelectedCity) onSelectedCity(city);
            }}
            style={{ cursor: "pointer" }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
