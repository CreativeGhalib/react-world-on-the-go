function Xyz() {
  return <h2>Hello React</h2>;
}

export default Xyz;

function Xyz() {
  return (
    <div>
      <h2>Hello React</h2>
      <p>This is my first practice component.</p>
    </div>
  );
}

export default Xyz;
function Xyz() {
  const name = "Ami";

  return (
    <div>
      <h2>Hello React</h2>
      <p>My name is {name}</p>
    </div>
  );
}

export default Xyz;

function Xyz() {
  const fruits = ["Mango", "Banana", "Apple"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Xyz;

function Xyz() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h2>Click Practice</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Xyz;
import { useState } from "react";

function Xyz() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Xyz;

import { useState } from "react";

function Xyz() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Xyz;
