var fetchCall = function (movie) {
    var url = "https://imdb-api.com/en/API/SearchMovie/k_to4td1kd/" + movie

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            // fetch(`https://api.watchmode.com/v1/title/${data.results[0].id}/details/?apiKey= OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function(resp) {
                resp.json().then(function (data) {
                    console.log(data)
                    // fetch(`https://api.watchmode.com/v1/title/${data.similar_titles[0]}/details/?apiKey= OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function(resp) {
                        resp.json().then(function(data) {
                            console.log(data)
                        })
                    })
                        })
                    })
                }
            
        

// fetchCall("inception")
var mainSubmitEl = document.querySelector("#main-button")
var headerSubmitEl = document.querySelector("#header-button")

var img = "https:via.placeholder.com/150"
var title = "john Wick"
var desc = "action, thriller, animal lover"
var sites = ["netflix", "hulu", "crunchy roll"]
var largeContainerEl = document.querySelector("#content-container")


    var createCards = function(event) {
        event.preventDefault()
        largeContainerEl.innerHTML = ""
        document.getElementById("header-search").style.visibility = "visible"
        document.getElementById("main-search").style.display = "none"
        for (var i = 0; i < 5; i++) {
        var containerEl = document.createElement("div");
            containerEl.classList.add("column", "card", "m-5", "has-background-danger")

        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", img);
        imgEl.classList.add("card-image", "mx-auto")
        containerEl.appendChild(imgEl);
        
        var nameEl = document.createElement("div");
        nameEl.innerHTML = title;
        nameEl.classList.add("card-content", "is-size-4")
        containerEl.appendChild(nameEl);
        
        var descEl = document.createElement("div");
        descEl.innerHTML = "description: " + '"'+ desc +'"';
        descEl.classList.add("card-content")
        containerEl.appendChild(descEl);

        var sitesEl = document.createElement("ul") 
            for (var k = 0; k < sites.length; k++){
                var site = document.createElement("li");
                site.innerHTML = sites[k];
                sitesEl.appendChild(site);
            }
            sitesEl.classList.add("card-content")
            containerEl.appendChild(sitesEl);
            var favoriteEl = document.createElement("button")
            favoriteEl.innerHTML = "favorite"
            favoriteEl.classList.add("button", "is-warning")
            containerEl.appendChild(favoriteEl)
        
            largeContainerEl.appendChild(containerEl);  }

        }
        


mainSubmitEl.addEventListener("click", createCards)
headerSubmitEl.addEventListener("click", createCards)
