import Menu from "./Menu";
import "./App.css";
import MyMap from "./MyMap";
import Comments from "./Comments";

function App() {
  return (
    <div className="App">
      <div className="AppHeader p-5">
        <Menu />
      </div>
      <div className="AppMain shadow rounded-3 mt-5 p-3">
        <MyMap />
      </div>
      <aside className="App-Comments shadow rounded-3 m-5 p-3">
        <Comments />
      </aside>
    </div>
  );
}

export default App;
