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

var img = "https://via.placeholder.com/150"
var title = "title"
var desc = "asdfkal;sdjkf;lasjkdf;"
var sites = ["ane", "asdf", "asdfasd"]

var largeContainerEl = document.querySelector("#content-container")

var createCards = function () {
    for (var i = 0; i < 5; i++) {
        var containerEl = document.createElement("div");
        containerEl.classList.add("column")

        var titleEl = document.createElement("div")
        titleEl.innerHTML = title
        containerEl.appendChild(titleEl)

        console.log(sites.length)
        var sitesEl = document.createElement("ul")
        for (var k = 0; k < sites.length; k++) {
            var siteEl = document.createElement("li")
            siteEl.innerHTML = sites[i]
            sitesEl.appendChild(siteEl)
        }
        containerEl.appendChild(sitesEl)

        largeContainerEl.appendChild(containerEl)
    }
    
}
    



createCards()
