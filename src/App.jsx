import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header/Header";
import Mainy from "./component/Mainy";
import Main from "./component/Main/Main";
import About from "./component/About/About";
import Contact from "./component/Conatct/Contact";
import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     window.location.reload();
  //   }, 8000);
  //   const timer = setTimeout(() => {
  //     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  //   }, 4000);
  //   return () => {
  //     clearInterval(interval);
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <Mainy>
      <BrowserRouter>
        <Header />
        <Main color={"bg-netural"}/>
        <About color={"bg-white"} />
        <Contact color={"bg-rose-400 h-100"} />
      </BrowserRouter>
    </Mainy>
  );
}
