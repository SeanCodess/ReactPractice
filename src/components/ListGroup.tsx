import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
}

function ListGroup({ cities, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    cities.length === 0 ? <p>No cities found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
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
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
