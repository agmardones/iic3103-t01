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
