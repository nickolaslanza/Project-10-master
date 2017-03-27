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
      musicHTML += '<div class="album">';
      // why does items.artist[i].name not work?
      for (let j = 0; j < items.artists.length; j++) {
        musicHTML += '<h1>' + items.artists[0].name + '</h1>';
        break;
      }
      musicHTML += '<p>' + items.type.toUpperCase() + ': </p>';
      musicHTML += '<p><a href="' + items.external_urls.spotify + '" target="_blank">' + items.name + '</a></p>';
      for (let k = 0; k < items.images.length; k++) {
        musicHTML += '<a href="' + items.images[0].url + '" data-lightbox="images" data-title="' + items.name + ': ' +  items.type.toUpperCase() + '">';
        musicHTML += '<img src="' + items.images[0]['url'] + '">';
        musicHTML += '</a>';
        break;
      }
      musicHTML += '</div>'
    });
    musicHTML += '</div>';
    $('.api-container').html(musicHTML);
  }

  $.getJSON(spotifyAPIfrankOcean, displayList);

  lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'resizeDuration': 200,
        'fitImagesInViewport': true,
        'wrapAround': true,
        'disableScrolling': true
      });
});
