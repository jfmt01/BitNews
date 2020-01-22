function newCard(imagen, titulo, fuente, hora) {
  document.querySelector(`#news`).innerHTML += `
  
  <div class="contNews">
  <a  data-toggle="modal" data-target="#exampleModalLong">
    <div class = "imgNew">
    <img src=${imagen} class="">
    </div>
    <div class="textNew">
      <h5 class= "tituloNew">${titulo}</h5>
      <div class="flexRow  jCBetween" style="align-self:stretch;">
        <span class = "fuenteNew">${fuente}</span>
        <span class = "horaNew">${hora.substring(0, 10) +" " +hora.substring(12, 16)}</span>
      </div>
    </div>
    <a>  
    <div class = "elimEditar">
      <a id="editar" class="btn btn-primary" href="#" role="button"><i class="far fa-edit"></i></a>
      <a id="eliminar" class="btn btn-primary" href="#" role="button"><i class="far fa-trash-alt"></i></a>
    </div>
  </div>
  `;
}

/* function carousel(imagen, titulo, contenido, fuente, hora) {

  document.querySelector(`#show`).innerHTML += `
    <div>
      <h2>${titulo}</h2>
      <div>
        <div style="overflow:hidden;">
          <img src=${imagen} class="imgShow">
        </div>
        <p>${contenido}</p>
      </div>
      <div class="flexRow  jCBetween" style="align-self:stretch;">
        <span  class = "fuenteNew">${fuente}</span>
        <span class = "horaNew">${hora.substring(0, 10) + " " + hora.substring(12, 16)}</span>
      </div>
    </div>`
}
 */
var techNews = "hola";
var url =
  "https://newsapi.org/v2/top-headlines?country=co&category=technology&apiKey=1f06cf5bcd1643f9a433854dc526dce1";
var request = new XMLHttpRequest();
request.open("GET", url);
request.responseType = "json";
request.send();
request.onload = function() {
  techNews = request.response.articles;
  for (let i = 1; i < 20; i++) {
    newCard(
      techNews[i].urlToImage,
      techNews[i].title,
      techNews[i].source.name,
      techNews[i].publishedAt
    );
  }
  carousel(
    techNews[0].urlToImage,
    techNews[0].title,
    techNews[0].content,
    techNews[0].source.name,
    techNews[0].publishedAt
  );
  // document.querySelector(`body`).style.backgroundImage = 'linear-gradient(to left top, #02193B, #002B4C, #003C5A, #004F66, #03616F);';
  return techNews;
};
techNews = JSON.parse(request);
console.log(techNews);

// document.querySelector(`#new`).addEventListener(function(){

// });
