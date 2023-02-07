import "./App.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import MyFooter from "./components/MyFooter.jsx";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
