function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const getMessage = () => {
    cities.length === 0 ? <p>No cities found</p> : null;
  };

  return (
    <>
      <h1>Cities</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
