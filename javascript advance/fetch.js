// $('.search-button').on('click', function(){
    
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=b8658a55&s=' + $('.input-keyword').val(),
//         success: result =>{
//             const movies = result.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
    
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url : 'http://www.omdbapi.com/?apikey=b8658a55&i=' + $(this).data('imdbid'),
//                     success : m => { 
//                         const movieDetail = showMovieDetail(m) ;
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.reponseText)
//                     }
//                 });
//             });
    
    
//         },
//         error: (e) => {
//             console.log(e.reponseText);
//         }
//     });

// });

// fetch
// merupakan sebuah method pada API js untuk mengambil resource dari jaringan, dan mengembalikan dalam bentuk promise yang selesai(fullfilledd) ketika ada response yg tersedia
// fetch(resourc[bisa url, dan bisa req object], init)
const searchbutton = document.querySelector('.search-button');
searchbutton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=b8658a55&s=' + inputKeyword.value)
     .then(response => response.json())
     .then(response => {
        const movies = response.Search;
        let cards = '';
        movies.forEach (m => cards += showCards(m));
        const moviecontainer = document.querySelector('.movie-container');
        moviecontainer.innerHTML = cards;

        const modaldetailbutton = document.querySelectorAll('.modal-detail-button');
        modaldetailbutton.forEach(btn => {
            btn.addEventListener('click', function(){
                const imdbid = this.dataset.imdbid;
                fetch( 'http://www.omdbapi.com/?apikey=b8658a55&i=' + imdbid)
                .then(response => response.json())
                .then(m => {
                    const movieDetail = showMovieDetail(m);
                    const modalbody = document.querySelector('.modal-body');
                    modalbody.innerHTML = movieDetail
                });
            });
        });
     }); 
});





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