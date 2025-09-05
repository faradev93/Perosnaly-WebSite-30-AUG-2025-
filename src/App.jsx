import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header/Header";
import Mainy from "./component/Mainy";
import Main from "./component/Main/Main";
import About from "./component/About/About";
import Contact from "./component/Conatct/Contact";
import { useEffect } from "react";
import Form from "./component/Form/Form";

export default function App() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     window.location.reload();
  //   }, 8000);
  //   const timerScroolDown = setTimeout(() => {
  //     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  //   }, 4000);
  //     const timerScroolTop = setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, 7500);
  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timerScroolDown);
  //     clearTimeout(timerScroolTop);
  //   };
  // }, []);

  return (
    <Mainy>
      <BrowserRouter>
        <Header />
        <Main color={"bg-netural"}/>
        <About color={"bg-white"} />
        <Contact color={"bg-netural h-100"} />
      </BrowserRouter>
    </Mainy>
  );
}
