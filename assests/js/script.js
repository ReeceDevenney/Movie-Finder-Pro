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

var img = "https:via.placeholder.com/150"
var title = "john Wick"
var desc = "action, thriller, animal lover"
var sites = ["netflix", "hulu", "crunchy roll"]
var largeContainer = document.querySelector("#content-container")


    var createCards = function() {
        for (var i = 0; i < 5; i++) {
            var containerEl = document.createElement("div");
            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", img);
            containerEl.appendChild(imgEl);
            
            var nameEl = document.createElement("div");
            nameEl.innerHTML = title;
            containerEl.appendChild(nameEl);
            
            var descEl = document.createElement("div");
            descEl.innerHTML = desc;
            containerEl.appendChild(descEl);
            console.log("i")
            var sitesEl = document.createElement("ul") 
                for (var k = 0; k < sites.length; k++){
                    var site = document.createElement("li");
                    site.innerHTML = sites[k];
                    sitesEl.appendChild(site);
                }
                containerEl.appendChild(sitesEl);
            
                largeContainer.appendChild(containerEl); 
        }
       
        }
        



createCards()

