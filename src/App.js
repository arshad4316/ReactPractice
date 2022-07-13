import "./styles.css";
import User from "./User";

export default function App() {
  function getName() {
    alert("name");
  }
  return (
    <div className="App">
      <User data={getName} />
    </div>
  );
}
