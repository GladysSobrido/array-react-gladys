import { useState } from "react";
import "./App.css";
import { users } from "./data/users";
// Good luck with the exercise 💪
function App() {
  let nameclass = "dynamic";

  let [activeButton, setActiveButton] = useState();
  return (
    <>
      <button
        className={nameclass}
        onClick={() => {
          setActiveButton(1), (nameclass = nameclass + "clicked");
        }}
      >
        All 1
      </button>

      <button onClick={() => setActiveButton(2)}>Women 2</button>
      <button onClick={() => setActiveButton(3)}>Men 3</button>
      <button onClick={() => setActiveButton(4)}>by name 4</button>
      <button onClick={() => setActiveButton(5)}>by age 5</button>
      <p>The active button is number {activeButton}</p>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} is {user.gender} years old
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default App;
