$(document).ready(function() {
  //https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM/albums
  //Building out the link to get the JSON information

  // Json Object reference here:
  let spotifyEndPoint = 'https://api.spotify.com/v1/';
  let artists = 'artists';
  const frankOcean = "2h93pZq0e7k5yf4dywlkpM";
  let albums = 'albums';
  let spotifyAPIfrankOcean = spotifyEndPoint + artists + '/' + frankOcean + '/' + albums;

  function displayList(data) {
    let musicHTML = '<div class=".app-container">'
    $.each(data.items, function(i, items){
      console.log(i);
      musicHTML += '<div class="album">';
      // why does items.artist[i].name not work?
      musicHTML += '<h1>' + items.artists + '</h1>';
      musicHTML += '<p>' + items.name + ': ' + items.type + ': ' + items.external_urls.spotify +'</p>';
      musicHTML += '<p>' + items.available_markets + '</p>';
      musicHTML += '<img src="' + items.images + '">';
      musicHTML += '</div>'
    });
    musicHTML += '</div>';
    $('.api-container').html(musicHTML);
  }

  $.getJSON(spotifyAPIfrankOcean, displayList);

});
