const rp = require("request-promise-native");

let fetchMovie = async (item) => {
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`;

  const res = await rp(url);

  return res;
}

(async () => {
  let movies = [
    {
      doubanId: 30219655,
      title: '后半生',
      rate: 8.2,
      poster: 'https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2549127933.jpg'
    },
    {
      doubanId: 26213252,
      title: '惊奇队长',
      rate: 7,
      poster: 'https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2548870813.jpg'
    },
  ];

  movies.map(async movie => {
    let movieData = await fetchMovie(movie);

    try {
      movieData = JSON.parse(movieData);
      console.log(movieData.summary);
    } catch (err) {
      console.log(err);
    }

    
  })
})();