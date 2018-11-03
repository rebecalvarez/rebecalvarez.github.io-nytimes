
$(document).ready(function(){
  
  var searchBtn = $('#search-button');

  searchBtn.click(function(){
    var userQuery = $('#user-query').val();
    var beginDate = $('#begin-date').val();
    var endDate = $('#end-date').val();
    
    search(userQuery, beginDate, endDate);

  }); 

  function search(userQuery, beginDate, endDate){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "ac23ec76b9d54be19edcbf64d45a646f",
      'q': userQuery,
      'begin_date': beginDate,
      'end_date': endDate
    });
    
    $.ajax({
      url: url,
      method: 'GET',
  }).then(function(result) {
    handleResult(result);
    //console.log(result);
   // console.log(result.response,docs[2].keywords[0].value);  

  });

  function handleResult(result){
    $("#display").text(result);
  };

  }//end of search function
  
  

});
