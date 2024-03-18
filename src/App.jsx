import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";

function App() {
  const API = "ef1rFMtJWZ4m5wSShzVLordu8tauws8ATQcQGd3Fw1P6Tc6CJxD1npcs";
  // const URL = `https://api.pexels.com/v1/search?query=nature&per_page=11`;

  const [img, setImg] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);
  useEffect(() => {
    const fetchApiImage = async () => {
      try {
        const res = await axios.get(
          `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
          {
            headers: {
              Authorization: API,
            },
          }
        );
        // console.log(res.data.photos);
        console.log(res);
        setImg(res.data.photos);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };

    // Take data from local storage
    const data = JSON.parse(localStorage.getItem("Images"))
if(data){
  setSaved(data)
}

    fetchApiImage();
  }, [search]);


  // Send or save the data at the local storage
useEffect(()=>{
  if(saved.length !==0){

    const json = JSON.stringify(saved) 
    localStorage.setItem("Images", json)
  }
}, [saved])
  return (
    <>
      <Navbar searchBar={setSearch} />
      <Routes>
      <Route path="/saved" element={<Saved saved={saved}  loader={loader}/>}/>
        <Route path="/" element={<Home img={img} loaderrr={loader} setSaved={setSaved} saved={saved}/>} />
      </Routes>
    </>
  );
}
export default App;
