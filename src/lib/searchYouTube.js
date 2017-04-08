var searchYouTube = (options, callback) => {
  var dataInput = {
    key: options.key,
    q: options.query,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
    safeSearch: 'strict',
    maxResults: options.max || 5
  };

  console.log(dataInput);

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: JSON.stringify(dataInput),
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      callback(data);
    },
    error: console.log('you dun goofed')
  });
};

window.searchYouTube = searchYouTube;


/*
-Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
-Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
-Accept an options object with the following properties:
    query - the string to search for
    max - the maximum number of videos to get, which should default to 5
    key - an authorized YouTube Browser API key
-Only GET embeddable videos
-Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
*/

  // $.get('https://www.googleapis.com/youtube/v3/search', 
  // {
  //   part: 'snippet',
  //   type: 'video',
  //   q: 'america',
  //   videoEmbeddable: true,
  //   safeSearch: 'strict'
  // }, callBack(data))
  // )