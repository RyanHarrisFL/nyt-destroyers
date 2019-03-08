var searchTerm = "SpaceX";
var numResults = "10";
var startYear = "20150101";
var endYear = "20190101";
//get values from form input and store them in the variables defined above

$("#submitButton").click(function(){
    searchTerm = $("#searchterm").value;
    console.log(searchTerm);
})



//ajax request
$.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=ti2JNgTJhezLW03BHf2I3VpgXYtQFhAZ",
    method: "GET"
}).then(function(response){
    console.log(response);
})

function submit(){
    console.log("form submitted!");
}