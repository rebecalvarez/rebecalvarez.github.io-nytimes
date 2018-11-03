
$(document).ready(function(){
  
  var searchBtn = $('#search-button');

  searchBtn.click(function(){
    event.preventDefault();
    var userQuery = $('#user-query').val();
    var beginDate = $('#begin-date').val();
    var endDate = $('#end-date').val();
    
    search(userQuery, beginDate, endDate);

  }); 

  function search(userQuery, beginDate, endDate){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "ac23ec76b9d54be19edcbf64d45a646f",
      'q': userQuery
    });
    
    $.ajax({
      url: url,
      method: 'GET',
  }).then(function(result) {
    handleResult(result);

  });

  function handleResult(result){
    $("#display").text(result.response.docs[2].keywords[0].value);
  };

  }
  
  

});
