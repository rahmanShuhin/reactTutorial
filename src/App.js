import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const name = { name: "shuhin", job: "Student" };
  const info = [
    { name: "PhotoShop", price: "120.23" },
    { name: "adobe", price: "23.10" },
    { name: "Illustrator", price: "130.34" },
    { name: "Pdf Reader", price: "10" },
    { name: "Iphone", price: "500" }
  ];
  var style = {
    color: "red",
    backgroundColor: "yellow"
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2 style={style}>Start editing to see some magic happen!</h2>
      <Counter />
      <User />
      <h1>{name.name + " job:" + name.job}</h1>
      <Person name="shakib" />
      <Person name="shuhin" />
      <Mn />
      <div>
        {info.map(arr => (
          <Product arr={arr} />
        ))}
      </div>
    </div>
  );
}
function Product(props) {
  const style_price = {
    border: "1px solid gold",
    backgroundColor: "skyblue",
    padding: "10px",
    float: "left",
    margin: "10px"
  };
  return (
    <div style={style_price}>
      <h5>{props.arr.name}</h5>
      <h2>US${props.arr.price}/mo</h2>
      <button>Buy now</button>
    </div>
  );
}
function Counter() {
  const handlerCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handlerCount}>Increse</button>
    </div>
  );
}
function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h1>Dynamic Users:{users.length}</h1>
      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Person(props) {
  return <h1 style={{ border: "5px solid red" }}>{props.name}</h1>;
}
function Mn() {
  const styleMn = {
    border: "5px solid blue"
  };
  return <h2 style={styleMn}>I'm a strong man</h2>;
}
