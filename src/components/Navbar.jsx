import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar({searchBar}) {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <>
      <div
        className="nav d-flex align-items-center
      justify-content-center
      mt-3"
      >
        <div 
         onClick={()=>{searchBar("nature")
         navigate("/")
         }}
        className="button btn btn-outline-info mx-3 ">Nature</div>

        <div onClick={()=>{searchBar("travel")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">Travel</div>

        <div onClick={()=>{searchBar("city")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">City</div>

        <div onClick={()=>{searchBar("Car")
        navigate('/')
        }} className="button btn btn-outline-info mx-3">Car</div>

        <div onClick={()=>{searchBar("fashion")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">Fashion</div>

        <div onClick={()=>{searchBar("animal")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">Animal</div>

        <div onClick={()=>{searchBar("technology")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">Technology</div>

        <div onClick={()=>{searchBar("business")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">Business</div>
        <div onClick={()=>{searchBar("tokyo")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">Tokyo</div>
        <div onClick={()=>{searchBar("dubai")
        navigate("/")
        }} className="button btn btn-outline-info mx-3">Come to Dubai Habibi</div>
{
  location.pathname == '/saved'? (
    <div onClick={()=>navigate("/")} className="button btn btn-outline-info mx-3">Home</div>
  ) : (
    <div onClick={()=>navigate("/saved")} className="button btn btn-outline-info mx-3">Saved</div>
  )
}

      
      
      </div>
      {
        location.pathname === '/' && (
          <div className="container my-5">
        <div className="mb-3 d-flex">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search Here !!!"
            onChange={(e)=>searchBar(e.target.value)}
          />
          {/* <div onClick={(e)=>searchBar(e.target.value)} role="button" className=" btn-primary border border-white border-3 pointer ">Search</div> */}
        </div>
      </div>
        )
      }
   
    </>
  );
}
export default Navbar;
