// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

const APIKEY= '6482d85893c20aae394a7151f183b509';
let category = 'general';
 const URL =
		'https://gnews.io/api/v4/top-headlines?category=' +
		category +
		'&lang=en&country=en&max=20&apikey=' +
		APIKEY;


    //realiza la consulta a la url

async function getNews() {
	const response = await fetch(URL);
	const data = await response.json();
  // console.log(data);
	return data.articles;
}

//mostramos los resultados
async function displayNews() {
	const newsContainer = document.getElementById('news-container');
	const news = await getNews();

	news.forEach(article => {
		const newsCard = `

      <div class="col">
        <div class="card">
          <img src="${article.image}" class="card-img-top" alt="${article.title}">
          <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description}</p>
            <a href="${article.url}" class="btn btn-primary">Leer más</a>
            
          </div>
        </div>
      </div>

      
    `;
		newsContainer.innerHTML += newsCard;
	});
}

displayNews();
console.log('prueba');


