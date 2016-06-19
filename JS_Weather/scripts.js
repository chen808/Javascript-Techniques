$(document).ready(function(){


   var getPoster = function(){

        // getting the zipcode from html
        var zip = $('#zipcode').val();

        // test print
        console.log(zip);

        // get api key from account, no # after 'APPID' for security reason
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=", function(json) {

          console.log(json);
          // getting city name
          console.log(json.name);
          // getting description
          console.log(json.weather[0].description);
          // getting humidity
          console.log(json.main.humidity);
          // getting latitude
          console.log(json.coord.lat);
          // getting longitude
          console.log(json.coord.lon);

          $('#showWeather').html("<h2>The current weather in " + json.name + " is: " + json.weather[0].description + "</h2>");


        });
      };


   // when search button is clicked, invoke 'getPoster' function
   $('#search').click(getPoster);


});