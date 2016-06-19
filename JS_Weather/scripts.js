
$(document).ready(function(){


   var getPoster = function(){

        var film = $('#term').val();

        console.log(film);

         if(film == ''){

            $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

         } else {

            $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");

            // get api key from account, no # after 'APPID' for security reason
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=95129&APPID=", function(json) {

              console.log(json);
              // getting city name
              console.log(json.name);
              // getting description
              console.log(json.weather[0].description);

              console.log(json.main.humidity);

              console.log(json.coord.lat);

              console.log(json.coord.lon);


             });

          }

        return false;
   }

   $('#search').click(getPoster);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});