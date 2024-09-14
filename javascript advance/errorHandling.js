//promise ().then.catch
//async await().try.catch
//fetch().then.


const searchbutton = document.querySelector('.search-button');
searchbutton.addEventListener('click', async function(){
    try{
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
    } catch(err) {
        alert(err)
    }
});

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=b8658a55&s=' + keyword)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(response => {
        if(response.Response === "False"){
            throw new Error(response.Error);
        }
        return response.Search;
    });
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const moviecontainer = document.querySelector('.movie-container');
    moviecontainer.innerHTML = cards;
}


document.addEventListener('click', async function(e){
 if(e.target.classList.contains('moda-detail-button')){
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMoviesDetail(imdbid);
    updateUIDetail(movieDetail)
 }
});

function getMoviesDetail(imdbid){
    return fetch( 'http://www.omdbapi.com/?apikey=b8658a55&i=' + imdbid)
    .then(response => response.json())
    .then(m => m);
}

function updateUIDetail(m){
    const movieDetail = showMovieDetail(m);
    const modalbody = document.querySelector('.modal-body');
    modalbody.innerHTML = movieDetail;
}


function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" height="300px" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">SHOW DETAIL</a>
                    </div>
                </div>
            </div>`;
};

function showMovieDetail(m){
    `<div class="modal-body">
        <div class="row">
            <div class="col-md-3">
                <img src=${m.Poster} height="300px" class="img-fluid" alt="">
            </div>
            <div class="col-md">
                <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
                <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                <li class="list-group-item"><strong>Writer :</strong>${m.Writer}</li>
                <li class="list-group-item"><strong>Plot :</strong> <br> ${m.Plot} </li>
                </ul>
            </div>
        </div>
    </div>`
}