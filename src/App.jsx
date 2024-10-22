import GlobalStyles from "../src/styles/GlobalStyles";

import { RouterProvider } from "react-router-dom";

import { paginas } from "./routes/index.routes";
import Button from "./components/Button";

import { Play } from "@phosphor-icons/react";

export default function App() {
  return (
    <>
      <GlobalStyles /> {/* Styles Globais usando styled-components */}
      <RouterProvider router={paginas} />{" "}
      {/* Renderizar a lista de Paginas = SPA */}
      <Button title="Entrar" backGround="secondary" icon={Play} iconSize={20} />
    </>
  );
}
