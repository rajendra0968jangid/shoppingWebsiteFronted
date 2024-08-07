import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Carsouel from "./Components/Carsouel";
import Card from "./Components/Card";
import Fotter from "./Components/Fotter";
function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const response = await fetch("http://11circle.live/");
      const jsonResponse = await response.json();
      setData(jsonResponse["data"]["catalogs"]);
    };
    fun();
  }, []);
  // console.log(data);
  return (
    <>
      <Navbar />
      <Carsouel />
      {data.map((item,index) => (
        <Card one={item}/>
      ))}
      <Fotter />
    </>
  );
}

export default App;
