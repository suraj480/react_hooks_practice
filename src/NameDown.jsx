import React, { useEffect, useState } from "react";

export const NameDown = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDropdown, setSelectedDropDown] = useState([]);

  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setNames(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {console.log("name", names.results)}
      <select>
        {names?.results?.map((name, index) => (
          <option key={index} value={name}>
            {name.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NameDown;
