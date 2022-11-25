const getExternalInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
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

function respuesta() {
  alert("This botton doesnt WorK!!");
}
