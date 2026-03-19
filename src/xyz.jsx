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
