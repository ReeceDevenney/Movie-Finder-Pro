var fetchCall = function (movie) {
    var url = "https://imdb-api.com/en/API/SearchMovie/k_to4td1kd/" + movie

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            fetch(`https://api.watchmode.com/v1/title/${data.results[0].id}/details/?apiKey=OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function (resp) {
                resp.json().then(function (data) {
                    console.log(data)
                    fetch(`https://api.watchmode.com/v1/title/${data.similar_titles[0]}/details/?apiKey=OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function (resp) {
                        resp.json().then(function (data) {
                            console.log(data)
                        })
                    })
                })
            })
        })
    })
}

// fetchCall("inception")


var img = "https:via.placeholder.com/1500"
var title = "John Wick"
var desc = "action, thriller, animal lover"
var sites = ["netflix", "hulu", "crunchy roll"]
var largeContainerEl = document.querySelector("#content-container")

var createCards = function (event) {
    largeContainerEl.innerHTML = ""
    event.preventDefault()

    document.getElementById("header-serach").style.visibility = "visible"
    document.getElementById("main-search").style.display = "none"



    for (var i = 0; i < 5; i++) {
        var containerEl = document.createElement("div");
        containerEl.classList.add("column", "has-text-centered", "card", "has-background-danger", "m-5", "is-3")

        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", img);
        imgEl.classList.add("card-image", "mx-auto")
        containerEl.appendChild(imgEl);

        var nameEl = document.createElement("div");
        nameEl.innerHTML = title + i;
        nameEl.classList.add("card-content", "has-text-left", "has-text-weight-bold", "is-size-4")
        containerEl.appendChild(nameEl);

        var descEl = document.createElement("div");
        descEl.innerHTML = "Description: " + '"' + desc + '"';
        descEl.classList.add("card-content", "has-text-left", "py-0")
        containerEl.appendChild(descEl);

        var sitesEl = document.createElement("ul")
        for (var k = 0; k < sites.length; k++) {
            var site = document.createElement("li");
            site.innerHTML = sites[k];
            sitesEl.appendChild(site);
        }
        sitesEl.classList.add("card-content", "has-text-left")
        containerEl.appendChild(sitesEl);

        var favEl = document.createElement("button")
        favEl.innerHTML = "Favorite"
        favEl.classList.add("button", "is-warning")
        containerEl.appendChild(favEl)

        largeContainerEl.appendChild(containerEl);
    }

}
// testing to get favorites button to work
var testArray = []

var cardEl = document.querySelector(".card")
var test = function (event) {
    if (event.target.classList.contains("button")) {
        if (event.target.innerHTML === "Favorite") {
            event.target.innerHTML = "Unfavorite"
        } else if (event.target.innerHTML === "Unfavorite") {
            event.target.innerHTML = "Favorite"
        }
    }
    var image = (event.target.parentElement.children[0].src)
    var title = (event.target.parentElement.children[1].innerHTML)
    var description = (event.target.parentElement.children[2].innerHTML)
    var services = []
    var i = 0
    while (event.target.parentElement.children[3].children[i]) {
        service = (event.target.parentElement.children[3].children[i].innerHTML)
        services.push(service)
        i++
    }

    var testing = {
        image: image,
        title: title,
        description: description,
        services: services
    }
    testArray.push(testing)
    console.log(testArray)
    //finds the location in the array for the specified title, use to cut that out of the array when unfavoriting
    console.log(testArray.findIndex(object => {return object.title === "John Wick1"}))
    

}
var mainSubmitEl = document.querySelector("#main-button")
var headerSubmitEl = document.querySelector("#header-button")

headerSubmitEl.addEventListener("click", createCards)
mainSubmitEl.addEventListener("click", createCards)
largeContainerEl.addEventListener("click", test)



