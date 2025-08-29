import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header/Header";
import Mainy from "./component/Mainy";
import Main from "./component/Main/Main";
import About from "./component/About/About";

export default function App() {
  return (
    <Mainy>
      <BrowserRouter>
        <Header />
        <Main />
        <About color={"bg-white"} />
      </BrowserRouter>
    </Mainy>
  );
}
