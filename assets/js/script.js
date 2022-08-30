var fetchCall = function (movie) {
    var url = "https://imdb-api.com/en/API/SearchMovie/k_to4td1kd/" + movie

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            fetch(`https://api.watchmode.com/v1/title/${data.results[0].id}/details/?apiKey=OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function(resp) {
                resp.json().then(function (data) {
                    console.log(data)
                    fetch(`https://api.watchmode.com/v1/title/${data.similar_titles[0]}/details/?apiKey=OnX6Kqfuj26gStUuLHip5UgQYIBVuO7zFbxPETZB&append_to_response=sources`).then(function(resp) {
                        resp.json().then(function(data) {
                            console.log(data)
                        })
                    })
                        })
                    })
                })
            })
        }

// fetchCall("inception")

// variables
var img = "https://via.placeholder.com/150"
var name = "Blood Diamond"
var desc = "loremipsumkuydktud"
var sites = ["Netflix", "Hulu", "HBO"]
// to be edited
var createCards = function() {

}