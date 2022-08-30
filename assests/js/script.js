
var mainSubmitEl = document.querySelector("#main-button")
var headerSubmitEl = document.querySelector("#header-button")
var mainInputEl = document.querySelector("#main-input")
var headerInputEl = document.querySelector("#header-input")
var largeContainerEl = document.querySelector("#content-container")

var img = "https:via.placeholder.com/1500"
var title = "John Wick"
var desc = "action, thriller, animal lover"
var sites = ["netflix", "hulu", "crunchy roll"]


var createCards = function (data) {

    document.getElementById("header-serach").style.visibility = "visible"
    document.getElementById("main-search").style.display = "none"

        var containerEl = document.createElement("div");
        containerEl.classList.add("column", "card", "has-background-danger", "m-5")

        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", data.poster);
        imgEl.classList.add("card-image", "mx-auto")
        containerEl.appendChild(imgEl);

        var nameEl = document.createElement("div");
        nameEl.innerHTML = data.original_title;
        nameEl.classList.add("card-content", "has-text-weight-bold", "is-size-4")
        containerEl.appendChild(nameEl);

        var descEl = document.createElement("div");
        descEl.innerHTML = "Description: " + '"' + data.plot_overview + '"';
        descEl.classList.add("card-content")
        containerEl.appendChild(descEl);

        var sitesEl = document.createElement("ul")
        for (var k = 0; k < data.sources.length; k++) {
            var site = document.createElement("li");
            site.innerHTML = data.sources[k].name;
            sitesEl.appendChild(site);
        }
        sitesEl.classList.add("card-content")
        containerEl.appendChild(sitesEl);

        var favoriteEl = document.createElement("button")
        favoriteEl.innerHTML = "Favorite"
        favoriteEl.classList.add("button", "is-warning")
        containerEl.appendChild(favoriteEl)

        largeContainerEl.appendChild(containerEl);

}
// favoriteMovies to get favorites button to work
var favoriteMovies = []

var cardEl = document.querySelector(".card")
var test = function (event) {
    // switches text of the button PUT EVERYTHING UNDER THE IF STATMENT, MAKE SURE EVENT ONLY HAPPENS ON BUTTON PRESS
    if (event.target.classList.contains("button")) {
        if (event.target.innerHTML === "Favorite") {
            event.target.innerHTML = "Unfavorite"
        } else if (event.target.innerHTML === "Unfavorite") {
            event.target.innerHTML = "Favorite"
        }
    }
    // variables for the content of the selectetd box
    var image = (event.target.parentElement.children[0].src)
    var title = (event.target.parentElement.children[1].innerHTML)
    var description = (event.target.parentElement.children[2].innerHTML)
    //loops to grab all of the listed service options
    var services = []
    var i = 0
    while (event.target.parentElement.children[3].children[i]) {
        service = (event.target.parentElement.children[3].children[i].innerHTML)
        services.push(service)
        i++
    }
    // temp object to fill and push to the array
    var favoriteMovie = {
        image: image,
        title: title,
        description: description,
        services: services
    }
    favoriteMovies.push(favoriteMovie)
    console.log(favoriteMovies)
    //finds the location in the array for the specified title, use to cut that out of the array when unfavoriting
    var chosenFavorite = favoriteMovies.findIndex(favoriteMovies => {return favoriteMovies.title === title})
    console.log(chosenFavorite)
    

}

var readMainTitle = function(event) {
    event.preventDefault()
    var movie = mainInputEl.value.trim()

    fetchCall(movie)
}

var readHeaderTitle = function(event) {
    event.preventDefault()
    var movie = headerInputEl.value.trim()

    fetchCall(movie)
}



var fetchCall = function (movie) {
    var url = "https://imdb-api.com/en/API/SearchMovie/k_to4td1kd/" + movie
    largeContainerEl.innerHTML = ""
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)

            fetch(`https://api.watchmode.com/v1/title/${data.results[0].id}/details/?apiKey=OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function (resp) {
                resp.json().then(function (data) {
                    console.log(data)
                    for (var z = 0; z < 5; z++) {
                        fetch(`https://api.watchmode.com/v1/title/${data.similar_titles[z]}/details/?apiKey=OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function (resp) {
                            resp.json().then(function (data) {
                                console.log(data)
                                createCards(data)
                            })
                        })
                    }
                })
            })
        })
    })
}

//fetchCall("inception")
headerSubmitEl.addEventListener("click", readHeaderTitle)
mainSubmitEl.addEventListener("click", readMainTitle)
largeContainerEl.addEventListener("click", test)