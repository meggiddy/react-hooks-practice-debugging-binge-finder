import React, { useState } from "react";
import Episode from "./Episode";

function SelectedShowContainer({ selectedShow, allEpisodes }) {
  const [selectedSeason, setSelectedSeason] = useState(1);

  function mapSeasons() {
    if (!!allEpisodes) {
      const seasons = unique(allEpisodes.map((e) => e.season));

      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
  }

  function MapEpisodes() {
    return allEpisodes.map((e) => {
      if (e.season === selectedSeason) {
        return <Episode eachEpisode={e} key={e.id} />;
      }
      return null;
    });
  }
  function handleSelectionChange(e) {
    const value = parseInt(e.target.value, 10);
    setSelectedSeason(value);
  }

  return (
    <div style={{ position: "static" }}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select style={{ display: "block" }} onChange={handleSelectionChange}>
        {mapSeasons()}
      </select>
      {MapEpisodes()}
    </div>
  );
}

export default SelectedShowContainer;

const unique = function (seasons) {
  const arr = [];
  for (let i = 0; i < seasons.length; i++) {
    if (!arr.includes(seasons[i])) {
      arr.push(seasons[i]);
    }
  }
  return arr;
};
