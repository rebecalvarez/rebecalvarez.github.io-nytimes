

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "ac23ec76b9d54be19edcbf64d45a646f"
});
$.ajax({
  url: url,
  method: 'GET',
}).then(result => logResponse(result));

function logResponse(result) {
  console.log(result);
  console.log (result.response.docs[2].keywords[0].value);

}
// $("button").on("click", function() {
//   var person = $(this).attr("data-person");
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     person + "&api_key=dc6zaTOxFJmzC&limit=10";

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     .then(function(response) {
//       handleResponse(response.data)

      
//     });
// });


// function handleResponse(results){
//   for (var i = 0; i < results.length; i++) {
//         var gifDiv = $("<div>");

//         var rating = results[i].rating;

//         var p = $("<p>").text("Rating: " + rating);

//         var personImage = $("<img>");
//         personImage.attr("src", results[i].keywords.value);

//         gifDiv.prepend(p);
//         gifDiv.prepend(personImage);

//         $("#gifs-appear-here").prepend(gifDiv);
//       }

// }