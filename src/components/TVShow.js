import React from "react";

function TVShow({ show, selectShow }) {
  return (
    <div>
      <br />
      <img src={show.image.medium} onClick={() => selectShow(show)} alt="" />
    </div>
  );
}

export default TVShow;
