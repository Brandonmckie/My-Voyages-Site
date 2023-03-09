async function addMaps() {
  try {
    fetch('/api/posts/')
      .then(response => {
        return response.json();
      })
      .then(posts => {
        console.log(posts);
        posts.forEach(post => {
          const uluru = { lat: -25.344, lng: 131.031 };
          const options = {
            center: uluru,
            zoom: 8
          };
          const map = new google.maps.Map(document.getElementById("map_" + post.id), options);
          const marker = new google.maps.Marker({
            position: uluru,
            map: map,
          });
        });
      })
      .catch(error => {
        // handle the error
        console.log(error);
        return false;
      });
  }
  catch (err) {
    console.log(err)
    return false;
  }
};