import "./App.css";
import MenuScreen from "./views/MenuScreen";
import Provider from './context/Provider';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider>
    <div className="App">
      <Header />
      <MenuScreen />
      <Cart />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
