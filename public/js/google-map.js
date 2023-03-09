// function getCity(cityName, lat, lon){
//   const weatherApiLink = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +`&appid=${procces.env.WEATHER_KEY}`;
//   fetch(weatherApiLink).then(function(response){
//       if(response.ok){
//           response.json().then(function(cityData){
//               // Creates elements for weather data and appends them to the page.
//               displayWeather(cityName, cityData);
//               // Saves the city to local storage and appends it to the page search history. 
//               saveSearch(cityName);
//           })
//       }else{
//           alert("Error, no weather data for coordinates");
//       }
//   })
// }
async function addMaps() {
  try {
    fetch('/api/posts/')
      .then(response => {
        return response.json();
      })
      .then(posts => {
        console.log(posts);
        posts.forEach(post => {
          let cityCoord = {};
          //Gets city, caps 1st letter, and puts it in the url
          const cityCap = post.city.trim().toLowerCase();
          let city = cityCap.charAt(0).toUpperCase() + cityCap.slice(1);
          const cityCoordinatesApi = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + `&limit=1&appid=33e105b40a9be724f9c8bf226184c956`;
          fetch(cityCoordinatesApi)
            .then(function (response) {
              if (response.ok) {
                response.json()
                  .then(function (data) {
                    cityCoord = { lat: data[0].lat, lng: data[0].lon }
                    console.log(cityCoord);
                    const options = {
                      center: cityCoord,
                      zoom: 8
                    };
                    const map = new google.maps.Map(document.getElementById("map_" + post.id), options);
                    const marker = new google.maps.Marker({
                      position: cityCoord,
                      map: map,
                    });
                  });
              } else {
                console.log(response.ok);
              };
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