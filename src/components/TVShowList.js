import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

function TVShowList({ shows, selectShow, searchTerm }) {
  function mapAllShows() {
    if (!!searchTerm) {
      shows.map((s) => {
        if (s.name.toLowerCase().includes(searchTerm)) {
          return <TVShow show={s} key={s.id} selectShow={selectShow} />;
        } else {
          return "";
        }
      });
    }
    return shows.map((show) => (
      <TVShow show={show} key={show.id} selectShow={selectShow} />
    ));
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
