import Menu from "./Menu";
import "./App.css";
import MyMap from "./MyMap";

function App() {
  return (
    <div className="App">
      <div className="AppHeader p-5">
        <Menu />
      </div>
      <div className="AppMain shadow rounded-3 mt-5 p-3">
        <MyMap />
      </div>
    </div>
  );
}

export default App;
