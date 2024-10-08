$('.search-button').on('click', function(){
    
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=b8658a55&s=' + $('.input-keyword').val(),
        success: result =>{
            const movies = result.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movie-container').html(cards);
    
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url : 'http://www.omdbapi.com/?apikey=b8658a55&i=' + $(this).data('imdbid'),
                    success : m => { 
                        const movieDetail = showMovieDetail(m) ;
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.reponseText)
                    }
                });
            });
    
    
        },
        error: (e) => {
            console.log(e.reponseText);
        }
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