import "./App.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import MenuScreen from "./views/MenuScreen";
import Provider from "./context/Provider";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import FormScreen from "./views/FormScreen";
import FinalizarScreen from "./views/FinalizarScreen";
import MeusPedidosScreen from "./views/MeusPedidosScreen";
import MenuAdmin from "./views/MenuAdmin";
import MeusPedidosAdmin from "./views/PedidosAdminScreen";
import LoginAdmin from "./views/LoginAdmin";
import CatalogoAdmin from "./views/CatalogoAdmin";
import CadastroSalgadoScreen from "./views/CadastroSalgadoScreen";
import RelatorioScreen from "./views/RelatorioScreen";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <div className="App">
          <Routes>
            <Route path="/" Component={MenuScreen} exact />
            <Route path="/Carrinho" Component={Cart} />
            <Route path="/Form" Component={FormScreen} />
            <Route path="/Finalizar" Component={FinalizarScreen} />
            <Route path="/Meus-pedidos" Component={MeusPedidosScreen} />
            <Route path="/Admin/Home" Component={MenuAdmin} />
            <Route path="/Admin/Pedidos" Component={MeusPedidosAdmin} />
            <Route path="/Admin/Login" Component={LoginAdmin} />
            <Route path="/Admin/Catalogo" Component={CatalogoAdmin} />
            <Route path="/Admin/Cadastro" Component={CadastroSalgadoScreen} />
            <Route path="/Admin/Relatorio" Component={RelatorioScreen} />
          </Routes>
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
