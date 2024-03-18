import React from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";

function Home({ img, loaderrr, setSaved, saved }) {
  const saveImg = (e) => {
    let flag = true;
    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === e.id) {
          flag = false;
          // console.log("Image is already exists");
          toast.success("Already Added");
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, e]);
      console.log("Image is added");
      toast.success("Image Saved Successfully  ")
    }
  };
  return (
    <>
      <div id="top" className="container-fluid text-center">
        {loaderrr ? (
          <Loader />
        ) : (
          <>
            <div className="itemss">
              {img.map((img) => (
                <div
                  key={img.id}
                  className="items"
                  onClick={() => saveImg(img)}
                >
                  <img src={img.src.medium} alt="" />
                </div>
              ))}
            </div>
          </>
        )}
        {img.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Go To Top
          </a>
        )}
      </div>
    </>
  );
}

export default Home;
