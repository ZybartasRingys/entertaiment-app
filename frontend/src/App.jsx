import "./App.css";
import Recomended from "./components/Recomended/Recomended";
import Search from "./components/Search";
import Trending from "./components/Trending/Trending";

function App() {
  return (
    <section className="App">
      <Search />
      <Trending />
      <Recomended />
    </section>
  );
}

export default App;
