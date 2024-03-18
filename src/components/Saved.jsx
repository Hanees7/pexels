import React from 'react'
import Loader from './Loader'


function Saved({loader, saved}) {
  return (
    <>
      <div id="top" className="container-fluid text-center">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="itemss">
              {saved.map((img) => (
                <div
                  key={img.id}
                  className="items"
              
                >
                  <img src={img.src.medium} alt="" />
                </div>
              ))}
            </div>
          </>
        )}
        {saved.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Go To Top
          </a>
        )}
      </div>
    </>
  )
}

export default Saved