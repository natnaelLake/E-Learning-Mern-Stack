import "./App.css";
import Header from "./Pages/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Routers from "./Routers";
function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
    </div>
  );
}

export default App;
