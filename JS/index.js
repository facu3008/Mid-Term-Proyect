// crear una funcion fetch
// traer el objeto desde api

// Llamar a una API externa!
const getExternalAPiInfo = () => {
  // Part 1 - Llamamos al recurso
  fetch("https://jsonplaceholder.typicode.com/posts")
    // Part 2 - pasamos una promesa y recibimos la info del recurso y manipluamos/limpiams segun el tipo de recurso.
    .then((response) => response.json())
    .then((response) => {
      let cards = "";
      let arrayCards = response.slice(0, 3);
      arrayCards.forEach((element) => {
        cards += ` <div class="item-">
            <div class="item-img">
              <img
                src="../IMG/project-assets/projects-section/${element.id}.jpg"
                alt="simplify"
                class="imgP"
              />
            </div>
            <div class="item-text">
              <h1>${element.title.slice(0, 10)}</h1>
              <p>${element.body.slice(0, 40)}...</p>
              <a href="../HTML/proyects.html" class="text-link">Learn More</a>
            </div>
          </div> `;
      });
      document.querySelector(".cards").innerHTML += cards;
    });
};
getExternalAPiInfo();

// document
//   .querySelector("#getExternalAPiInfo")
//   .addEventListener("click", getExternalAPiInfo);

// -------
