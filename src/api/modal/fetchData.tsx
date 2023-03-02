const GET_MOVIE_URL = 'http://localhost:8080/movies'
export default async function getMovies () {
  fetch(GET_MOVIE_URL)
  .then(
    response => response.json()
  )
  .then(
    data => console.log(data)
  )
  .catch((err)=>{
    console.log(err)
  })
};