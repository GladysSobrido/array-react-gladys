import { useState } from "react";
import "./App.css";
import { users } from "./data/users";

// Good luck with the exercise 💪
function App() {
  let nameclass = "dynamic";

  let [activeButton, setActiveButton] = useState();
  const arrayWomen = users.filter((person) => person.gender === "female");
  const arrayMen = users.filter((person) => person.gender != "female");
  const orderedByName = [users.toSorted(name.last)];
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
      {/* Block001 */}
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} is {user.gender} .
          </li>
        ))}
      </ul>
      {/* END of Block001 */}
      {/* Block 2: filter only Women */}
      <ul>
        {arrayWomen.map((woman) => (
          <li key={woman.login.uuid}>{woman.name.first} is a woman.</li>
        ))}
      </ul>
      {/* END of Block002 */}
      {/* Block 3: filter only Men */}
      <ul>
        {arrayMen.map((man) => (
          <li key={man.login.uuid}>{man.name.first} is a man.</li>
        ))}
      </ul>
    </>
  );
}

export default App;
