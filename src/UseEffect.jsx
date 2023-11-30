import "./App.css";
import React, { useEffect, useState } from "react";
function UseEffect() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log("UseEffect called");
    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      console.log("json", json);
    };
    fetchData();
    console.log("data", data);
  }, [data2]);
  const counterOne = () => {
    console.log("you clicked counter one");
    setCounter1(counter1 + 1);
  };
  const counterTwo = () => {
    console.log("you clicked counter two");
    setCounter2(counter2 + 1);
  };
  const addUser = () => {
    console.log("add user called");
    //this method helps to store previous values + newly added value
    setData((previousValue) => [
      ...previousValue,
      {
        id: 11,
        name: "Suraj",
        username: "suraj480",
        email: "surajmaurya991@gmail.com",
        address: {
          street: "gopal colony",
          suite: "123",
          city: "Patiala",
          zipcode: "147001",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "8725836915",
        website: "https://github.com/suraj480",
        company: {
          name: "ABC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target to explore more",
        },
      },
    ]);
  };
  return (
    <div className="App">
      {console.log(data)}
      <button onClick={() => addUser()}>Add user</button>
      <div style={{ padding: "10px" }}>
        <button style={{ marginTop: "50px" }} onClick={() => counterOne()}>
          Counter one
        </button>
      </div>
      <div style={{ alignItems: "center" }}>
        <button style={{ marginTop: "50px" }} onClick={() => counterTwo()}>
          Counter two
        </button>
        <p>{counter1}</p>
        <p>{counter2}</p>
      </div>
    </div>
  );
}

export default UseEffect;
