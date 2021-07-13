//api links
let apiKey = '07eda58ee7a53bce6d2c4f2bee8cde96'
let topRatedUrl = `https://api.themoviedb.org/3/discover/movie?api_key=07eda58ee7a53bce6d2c4f2bee8cde96&sort_by=popularity.desc`
let upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=07eda58ee7a53bce6d2c4f2bee8cde96&language=en-US&page=1`
let trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=07eda58ee7a53bce6d2c4f2bee8cde96`
let popularTvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=07eda58ee7a53bce6d2c4f2bee8cde96`
let topRatedTvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=07eda58ee7a53bce6d2c4f2bee8cde96`
let searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=`
let search = document.querySelector('.search')
let form = document.querySelector('.form')
let imgUrl = `https://image.tmdb.org/t/p/w500`

//hamburger menu
let ham_bar=document.querySelector('.ham_bar')
let main_menu=document.querySelector('.main_menu')
ham_bar.addEventListener('click',()=>{
    main_menu.classList.toggle('main_menu_toggle')
})




//getting element
let container = document.querySelector('.container')
let top_rated_movies = document.querySelector('.top_rated_movies')
let upcoming_movies = document.querySelector('.upcoming_movies')
let trending_movies = document.querySelector('.trending_movies')
let popular_tv = document.querySelector('.popular_tv')
let top_rated_tv = document.querySelector('.top_rated_tv')

//top rated movies
async function topRatedData() {
    let response = await fetch(topRatedUrl);
    let responseData = await response.json()
    topRatedMovies(responseData.results)
}
topRatedData()

function topRatedMovies(data) {
    top_rated_movies.innerHTML = ``
    let htmlData = ""
    data.forEach((element,index) => {
        let html = `
           <div class="box" id="${index}box1" onclick="redirectPage(this.id)">
           <img src=${imgUrl + element.poster_path} class="movie_image" id="${index}box1img">
           <div class="movie_name_rating">
               <h3 class="movie_name" id="${index}box1name">${element.original_title}</h3>
               <h3 class="movie_rating ${rating(element.vote_average)}" id="${index}box1rating">${element.vote_average}</h3>
           </div>
           <div class="movies_info">
               <h3 class="overview">Overview</h3>
               <h3 class="release_date" id="${index}box1releaseDate">Release Date: ${(element.release_date) ? element.release_date : element.first_air_date}</h3>
               <h3 class="original_language" id="${index}box1language">Language: ${element.original_language}</h3>
               <p class="info" id="${index}box1overview">${element.overview}</p>
           </div>
       </div>  
           `
        htmlData += html
    });
    top_rated_movies.innerHTML = htmlData
}
//upcoming movies
async function upcomingData() {
    let response = await fetch(upcomingUrl);
    let responseData = await response.json()
    upcomingMovies(responseData.results)
}
upcomingData()
function upcomingMovies(data) {
    upcoming_movies.innerHTML = ``
    let htmlData = ""
    data.forEach((element,index) => {
        let html = `
           <div class="box" id="${index}box2" onclick="redirectPage2(this.id)">
           <img src=${imgUrl + element.poster_path} class="movie_image" id="${index}box2img">
           <div class="movie_name_rating">
               <h3 class="movie_name" id="${index}box2name">${element.original_title}</h3>
               <h3 class="movie_rating ${rating(element.vote_average)}" id="${index}box2rating">${element.vote_average}</h3>
           </div>
           <div class="movies_info">
               <h3 class="overview">Overview</h3>
               <h3 class="release_date" id="${index}box2releaseDate">Release Date: ${(element.release_date) ? element.release_date : element.first_air_date}</h3>
               <h3 class="original_language" id="${index}box2language">Language: ${element.original_language}</h3>
               <p class="info" id="${index}box2overview">${element.overview}</p>
           </div>
       </div>  
           `
        htmlData += html
    });
    upcoming_movies.innerHTML = htmlData
}
//trending movies
async function trendingData() {
    let response = await fetch(trendingUrl);
    let responseData = await response.json()
    trendingMovies(responseData.results)
}
trendingData()
function trendingMovies(data) {
    trending_movies.innerHTML = ``
    let htmlData = ""
    data.forEach((element,index) => {
        let html = `
           <div class="box" id="${index}box3" onclick="redirectPage3(this.id)">
           <img src=${imgUrl + element.poster_path} class="movie_image" id="${index}box3img">
           <div class="movie_name_rating">
               <h3 class="movie_name" id="${index}box3name">${(element.original_title) ? element.original_title : element.original_name}</h3>
               <h3 class="movie_rating" id="${index}box3rating">${element.media_type}</h3>
           </div>
           <div class="movies_info">
               <h3 class="overview">Overview</h3>
               <h3 class="release_date" id="${index}box3releaseDate">Release Date: ${(element.release_date) ? element.release_date : element.first_air_date}</h3>
               <h3 class="original_language" id="${index}box3language">Language: ${element.original_language}</h3>
               <p class="info" id="${index}box3overview">${element.overview}</p>
           </div>
       </div>  
           `
        htmlData += html
    });
    trending_movies.innerHTML = htmlData
}
//top tv shows
async function topTvData() {
    let response = await fetch(topRatedTvUrl);
    let responseData = await response.json()
    topRatedTv(responseData.results)
}
topTvData()
function topRatedTv(data) {
    top_rated_tv.innerHTML = ``
    let htmlData = ""
    data.forEach((element,index) => {
        let html = `
           <div class="box" id="${index}box4" onclick="redirectPage4(this.id)">
           <img src=${imgUrl + element.poster_path} class="movie_image" id="${index}box4img">
           <div class="movie_name_rating">
               <h3 class="movie_name" id="${index}box4name">${(element.original_title) ? element.original_title : element.original_name}</h3>
               <h3 class="movie_rating ${rating(element.vote_average)}" id="${index}box4rating">${element.vote_average}</h3>
           </div>
           <div class="movies_info">
               <h3 class="overview">Overview</h3>
               <h3 class="release_date" id="${index}box4releaseDate">Release Date: ${(element.release_date) ? element.release_date : element.first_air_date}</h3>
               <h3 class="original_language" id="${index}box4language">Language:${element.original_language}</h3>
               <p class="info" id="${index}box4overview">${element.overview}</p>
           </div>
       </div>  
           `
        htmlData += html
    });
    top_rated_tv.innerHTML = htmlData
}
//popular tv data
async function popularTvData() {
    let response = await fetch(popularTvUrl);
    let responseData = await response.json()
    popularTv(responseData.results)
}
popularTvData()
function popularTv(data) {
    popular_tv.innerHTML = ``
    let htmlData = ""
    data.forEach((element,index) => {
        let html = `
           <div class="box" id="${index}box5" onclick="redirectPage5(this.id)">
           <img src=${imgUrl + element.poster_path} class="movie_image" id="${index}box5img">
           <div class="movie_name_rating">
               <h3 class="movie_name" id="${index}box5name">${(element.original_title) ? element.original_title : element.original_name}</h3>
               <h3 class="movie_rating ${rating(element.vote_average)}" id="${index}box5rating">${element.vote_average}</h3>
           </div>
           <div class="movies_info">
               <h3 class="overview">Overview</h3>
               <h3 class="release_date" id="${index}box5releaseDate">Release Date: ${(element.release_date) ? element.release_date : element.first_air_date}</h3>
               <h3 class="original_language" id="${index}box5language">Language: ${element.original_language}</h3>
               <p class="info" id="${index}box5overview">${element.overview}</p>
           </div>
       </div>  
           `
        htmlData += html
    });
    popular_tv.innerHTML = htmlData
}
//rating function
function rating(rate) {
    if (rate >= 8) {
        return 'green'
    }
    else if (rate >= 6 && rate < 8) {
        return 'orange'
    }
    else {
        return 'red'
    }
}

//add event listener on form
form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchMovies()
})
//search movies and tv shows function
async function searchMovies() {
    if (search.value) {
        let response = await fetch(searchUrl + search.value)
        let responseData = await response.json()
        console.log(responseData.results)
        let responseResults = responseData.results
        container.innerHTML = ``
        container.classList.add('container_extend')
        let htmlData = ""
        if (responseResults.length >= 1) {
            responseResults.forEach((element,index) => {
                let html = `
           <div class="box" id="${index}box6" onclick="redirectPage6(this.id)">
           <img src=${imgUrl + element.poster_path} class="movie_image" id="${index}box6img">
           <div class="movie_name_rating">
               <h3 class="movie_name" id="${index}box6name">${(element.original_title) ? element.original_title : element.original_name}</h3>
               <h3 class="movie_rating ${rating(element.vote_average)}" id="${index}box6rating">${element.vote_average}</h3>
           </div>
           <div class="movies_info">
               <h3 class="overview">Overview</h3>
               <h3 class="release_date" id="${index}box6releaseDate">Release Date: ${(element.release_date) ? element.release_date : element.first_air_date}</h3>
               <h3 class="original_language" id="${index}box6language">Language:${element.original_language}</h3>
               <p class="info" id="${index}box6overview">${element.overview}</p>
           </div>
       </div>  
           `
                if (element.poster_path) {
                    htmlData += html
                }
            });
            container.innerHTML = htmlData
        }
        else {
            container.innerHTML = `<h1 style="text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4,
        0 0 80px #03bcf4,
        0 0 160px #03bcf4;">No Match Found! Kindly Search Other Movies And Tv Shows <img src="./dog.gif" alt="" width="230px"></h1>`
        }
        search.value = ""
    }
}

//suggestion functionality
let suggestionData = ['Monster Hunter', 'Red Dot', 'Wonder Woman 1984', 'Fear of Rain', 'The Little Things', 'Bajocero', 'Outside the Wire', 'Black Water: Abyss', 'Mirzapur', 'Mortal Kombat Legends: Scorpion"s Revenge', 'Red Dot', 'The Little Things', 'Drishyam', 'Raid', 'Resident Evil', 'Hereditary', 'pink', 'Inception', 'Interstellar', 'Star Wars', 'Avengers: Endgame', 'Avengers: Infinity War', 'Avengers: Age of Ultron', 'Captain America: Civil War', 'Captain America: The First Avenger', 'Captain America', 'Captain America: The Winter Soldier', 'Iron man', 'thor']
let suggestionBox = document.querySelector('.suggestionBox')
search.addEventListener('input', searchFilter)

function searchFilter() {
    suggestionBox.innerHTML = ``
    if (search.value) {
        let html = ""
        suggestionData.forEach(element => {
            if (element.toLowerCase().includes(search.value.toLowerCase())) {
                html += `<li>${element}</li>`
            }
        })
        suggestionBox.innerHTML = html
        console.log(suggestionBox.children)
        let suggestionList = Array.from(suggestionBox.children)
        if (suggestionList.length >= 1) {
            suggestionList.forEach(element => {
                element.addEventListener('click', () => {
                    search.value = element.innerText
                    suggestionBox.innerHTML = ``
                })
            })
        }
    }
}
//updated-->back to top button
let back_to_top=document.querySelector('.back_to_top')
window.addEventListener('scroll',()=>{
    if(window.scrollY>178){
        back_to_top.style.visibility="visible"
        back_to_top.style.opacity="1"
    }
    else{
        back_to_top.style.visibility="hidden"
        back_to_top.style.opacity="0"
    }
})

//top rated movie redirect page data
function redirectPage(id){
    //readFile()
    let myHTML=`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>More Info</title>
            <link rel="stylesheet" href="main.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
            <link rel="icon" href="./favicon.svg" type="image/x-icon">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css">
        </head>
    <body>
        <div class="form">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51l16tA5DEL.png" alt="" class="logo">
        <a href="index.html" class="nav">Home</a>
        </div>
        <div class="container">
            <div class="hero_left">
                <div class="box">
                    <img src="${document.getElementById(id+"img").src}" class="movie_image">
                </div>
            </div>
            <div class="hero_right">
                <h3 class="movie_name">Name : ${document.getElementById(id+"name").innerHTML}</h3>
                <h3 class="movie_rating">Rating : ${document.getElementById(id+"rating").innerHTML}</h3>
                <h3 class="release_date">${document.getElementById(id+"releaseDate").innerHTML}</h3>
                <h3 class="original_language">${document.getElementById(id+"language").innerHTML}</h3>
                <p class="info">Story :${document.getElementById(id+"overview").innerHTML}</p>
            </div>
        </div>
        <script src="main.js"></script>
    </body>
    </html>`
    //window.open().document.write(myHTML,"_self")
    //window.open().document.close()
   document.write(myHTML)
}

//upcoming movie redirect page data
function redirectPage2(id){
    console.log(id)
    //readFile()
    let myHTML=`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>More Info</title>
            <link rel="stylesheet" href="main.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
            <link rel="icon" href="./favicon.svg" type="image/x-icon">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css">
        </head>
    <body>
        <div class="form">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51l16tA5DEL.png" alt="" class="logo">
        <a href="index.html" class="nav">Home</a>
        </div>
        <div class="container">
            <div class="hero_left">
                <div class="box">
                    <img src="${document.getElementById(id+"img").src}" class="movie_image">
                </div>
            </div>
            <div class="hero_right">
                <h3 class="movie_name">Name : ${document.getElementById(id+"name").innerHTML}</h3>
                <h3 class="movie_rating">Rating : ${document.getElementById(id+"rating").innerHTML}</h3>
                <h3 class="release_date">${document.getElementById(id+"releaseDate").innerHTML}</h3>
                <h3 class="original_language">${document.getElementById(id+"language").innerHTML}</h3>
                <p class="info">Story :${document.getElementById(id+"overview").innerHTML}</p>
            </div>
        </div>
        <script src="main.js"></script>
    </body>
    </html>`
    //window.open().document.write(myHTML,"_self")
    //window.open().document.close()
   document.write(myHTML)
}

//trending movie redirect page data
function redirectPage3(id){
    console.log(id)
    //readFile()
    let myHTML=`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>More Info</title>
            <link rel="stylesheet" href="main.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
            <link rel="icon" href="./favicon.svg" type="image/x-icon">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css">
        </head>
    <body>
        <div class="form">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51l16tA5DEL.png" alt="" class="logo">
        <a href="index.html" class="nav">Home</a>
        </div>
        <div class="container">
            <div class="hero_left">
                <div class="box">
                    <img src="${document.getElementById(id+"img").src}" class="movie_image">
                </div>
            </div>
            <div class="hero_right">
                <h3 class="movie_name">Name : ${document.getElementById(id+"name").innerHTML}</h3>
                <h3 class="movie_rating">Rating : ${document.getElementById(id+"rating").innerHTML}</h3>
                <h3 class="release_date">${document.getElementById(id+"releaseDate").innerHTML}</h3>
                <h3 class="original_language">${document.getElementById(id+"language").innerHTML}</h3>
                <p class="info">Story :${document.getElementById(id+"overview").innerHTML}</p>
            </div>
        </div>
        <script src="main.js"></script>
    </body>
    </html>`
    //window.open().document.write(myHTML,"_self")
    //window.open().document.close()
   document.write(myHTML)
}

//top tv shows redirect page data
function redirectPage4(id){
    console.log(id)
    //readFile()
    let myHTML=`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>More Info</title>
            <link rel="stylesheet" href="main.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
            <link rel="icon" href="./favicon.svg" type="image/x-icon">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css">
        </head>
    <body>
        <div class="form">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51l16tA5DEL.png" alt="" class="logo">
        <a href="index.html" class="nav">Home</a>
        </div>
        <div class="container">
            <div class="hero_left">
                <div class="box">
                    <img src="${document.getElementById(id+"img").src}" class="movie_image">
                </div>
            </div>
            <div class="hero_right">
                <h3 class="movie_name">Name : ${document.getElementById(id+"name").innerHTML}</h3>
                <h3 class="movie_rating">Rating : ${document.getElementById(id+"rating").innerHTML}</h3>
                <h3 class="release_date">${document.getElementById(id+"releaseDate").innerHTML}</h3>
                <h3 class="original_language">${document.getElementById(id+"language").innerHTML}</h3>
                <p class="info">Story :${document.getElementById(id+"overview").innerHTML}</p>
            </div>
        </div>
        <script src="main.js"></script>
    </body>
    </html>`
    //window.open().document.write(myHTML,"_self")
    //window.open().document.close()
   document.write(myHTML)
}

//popular tv shows redirect page data
function redirectPage5(id){
    console.log(id)
    //readFile()
    let myHTML=`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>More Info</title>
            <link rel="stylesheet" href="main.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
            <link rel="icon" href="./favicon.svg" type="image/x-icon">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css">
        </head>
    <body>
        <div class="form">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51l16tA5DEL.png" alt="" class="logo">
            <a href="index.html" class="nav">Home</a>
        </div>
        <div class="container">
            <div class="hero_left">
                <div class="box">
                    <img src="${document.getElementById(id+"img").src}" class="movie_image">
                </div>
            </div>
            <div class="hero_right">
                <h3 class="movie_name">Name : ${document.getElementById(id+"name").innerHTML}</h3>
                <h3 class="movie_rating">Rating : ${document.getElementById(id+"rating").innerHTML}</h3>
                <h3 class="release_date">${document.getElementById(id+"releaseDate").innerHTML}</h3>
                <h3 class="original_language">${document.getElementById(id+"language").innerHTML}</h3>
                <p class="info">Story :${document.getElementById(id+"overview").innerHTML}</p>
            </div>
        </div>
        <script src="main.js"></script>
    </body>
    </html>`
    //window.open().document.write(myHTML,"_self")
    //window.open().document.close()
   document.write(myHTML)
}
//search movies and tv shows redirect page data
function redirectPage6(id){
    console.log(id)
    let myHTML=`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>More Info</title>
            <link rel="stylesheet" href="main.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
            <link rel="icon" href="./favicon.svg" type="image/x-icon">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css">
        </head>
    <body>
        <div class="form">
            <img src="https://images-na.ssl-images-amazon.com/images/I/51l16tA5DEL.png" alt="" class="logo">
            <a href="index.html" class="nav">Home</a>
        </div>
        <div class="container">
            <div class="hero_left">
                <div class="box">
                    <img src="${document.getElementById(id+"img").src}" class="movie_image">
                </div>
            </div>
            <div class="hero_right">
                <h3 class="movie_name">Name : ${document.getElementById(id+"name").innerHTML}</h3>
                <h3 class="movie_rating">Rating : ${document.getElementById(id+"rating").innerHTML}</h3>
                <h3 class="release_date">${document.getElementById(id+"releaseDate").innerHTML}</h3>
                <h3 class="original_language">${document.getElementById(id+"language").innerHTML}</h3>
                <p class="info">Story :${document.getElementById(id+"overview").innerHTML}</p>
            </div>
        </div>
        <script src="main.js"></script>
    </body>
    </html>`
    //window.open().document.write(myHTML,"_self")
    //window.open().document.close()
   document.write(myHTML)
}