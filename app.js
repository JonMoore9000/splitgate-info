
$(document).ready(function() {
  const base ='https://public-api.tracker.gg/v2/splitgate/standard/profile/psn/B7REC';
  $('.search').click(function() {
    $.ajax({
      url: base,
      //dataType: 'jsonp',
      headers: {
        'TRN-Api-Key': '7eb1cf3e-241f-4f6f-87a4-00e704d455e3',
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "https://jonmoore9000.github.io/splitgate-info/",
        'Access-Control-Allow-Origin': 'https://tracker.gg'
      },
      type: "GET",
      success: function(result){
        console.log(result)
      },
      error: function(error) {
        console.log('Error ${error}')
      }
    })
  })
  })
