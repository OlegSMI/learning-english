import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
