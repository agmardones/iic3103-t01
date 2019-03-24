const fetchEntities = async entitiesArray => {
  const entitiesInfo = await Promise.all(
    entitiesArray.map(entity => fetch(entity))
  );
  const parsedEntity = await Promise.all(
    entitiesInfo.map(entity => entity.json())
  );
  return parsedEntity;
};

export const getAllFilms = async () => {
  const rawFilms = await fetch("https://swapi.co/api/films");
  const films = await rawFilms.json();
  return films.results.map(film => {
    const {
      title,
      episode_id,
      director,
      producer,
      release_date,
      opening_crawl,
      url
    } = film;
    return {
      title,
      episodeId: episode_id,
      director,
      producer,
      releaseDate: release_date,
      openingCrawl: opening_crawl,
      url
    };
  });
};

export const getFilmInfo = async filmId => {
  const rawFilm = await fetch(`https://swapi.co/api/films/${filmId}`);
  const film = await rawFilm.json();
  const charactersInfo = await fetchEntities(film.characters);
  const planetsInfo = await fetchEntities(film.planets);
  const starshipsInfo = await fetchEntities(film.starships);
  const characters = charactersInfo.map(char => char.name);
  const planets = planetsInfo.map(planet => planet.name);
  const starships = starshipsInfo.map(starship => starship.name);
  return { film, characters, planets, starships };
};
