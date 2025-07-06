const movies = ["Inception", "Interstellar", "The Dark Knight", "Pulp Fiction"];

const ul = document.getElementById("movie-list");
movies.forEach(movie => {
  const li = document.createElement("li");
  li.textContent = movie;
  ul.appendChild(li);
});
