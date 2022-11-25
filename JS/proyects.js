// crear una funcion fetch
// traer el objeto desde api

// Llamar a una API externa!
const getExternalInfo = () => {
  // Part 1 - Llamamos al recurso
  fetch("https://jsonplaceholder.typicode.com/posts")
    // Part 2 - pasamos una promesa y recibimos la info del recurso y manipluamos/limpiams segun el tipo de recurso.
    .then((response) => response.json())
    .then((response) => {
      let data = "";
      let arrayData = response.slice(5, 6);
      arrayData.forEach((element) => {
        data += `<div class="title"><h1>${element.title.slice(
          0,
          10
        )}...</h1></div>
        <div class="paragraph">
          <p class="p1">UI Design & App Development</p>
          <p class="p2">Completed on 2/2/22</p>
        </div>
  
        <div class="">
          <img
            src="../IMG/project-assets/projects-section/1.jpg"
            alt="simplify"
            class="proyect-img"
          />
        </div>
        <div class="proyect-descrip">
          <p>
            ${element.body}</p>
            <br />
            <p>${element.body}
          </p>
        </div>`;
      });
      document.querySelector(".proyect").innerHTML += data;
    });
};
getExternalInfo();
// part 6 - Apuntamos mediante un dom querySelector y le asignamos un event listener addEventListener() para pasarle la funcion que nos creamos arriba.
// document
//   .querySelector("#getExternalAPiInfo")
//   .addEventListener("click", getExternalAPiInfo);

// -------
