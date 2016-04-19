

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // saving lat + long positions in variables
    lat = position.coords.latitude;
    long = position.coords.longitude;
    //making sure it worked
    console.log(lat);
    console.log(long);

    // making life easier by shorting down the URL
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=";
    var unitsURL = "&units=metric&APPID=37648d2c2f5892b98cc2bfce27fabbfe";
    var urlCombined = url + lat + "&lon=" + long + unitsURL;

    $.getJSON(urlCombined, function(data) {
      // testing URL
      console.log(url + lat + "&lon=" + long + unitsURL)
        // Suburb + Country of visitor in a variable
      var area = data.name;
      var country = data.sys.country;
      // temeperature
      var tempature = data.main.temp;
      var weather = data.weather[0].main;
      var tempChange = Math.floor(data.main.temp + 1.8 + 32);


      // toggles between celcius and fahhrenhiet
      $("button").click(function() {
        $("h2").toggle().text;
        $(this).text(function(i, text) {
          return text === "Go to Fahrenheit" ? "Go to Celcius" : "Go to Fahrenheit";
        });
      });
      // those suburb/location variables i saved earlier putting into one ID
      $('#countryArea').html(area + "<br>" + country);
      // weather rain etc
      $('.weatherTemp #weather1').html(" " + weather + "<br><br>" + data.wind.speed  + "m/s wind speed"  );
      // temperate where i siwtch
      $('.weatherTemp #one').html(tempChange + " Fahrenheit");
      $('.weatherTemp #two').html(tempature + " Celcius");

      //icons
      var iconCode = data.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"; 
      $(".icon").html("<img class = 'sizeicon'  src=" + iconUrl + ">");




console.log(weather);

if  (weather === "Rain") {
        $('body').css("background", "url(http://drewpiper.com/weather/rain.jpg) no-repeat center center fixed");
        }
      else if (weather === "Clear") {
                 $('body').css("background", "url(http://drewpiper.com/weather/clear.jpg) no-repeat center center fixed");
      }
      else if ( weather === "Clouds") {
 $('body').css("background", "url(http://drewpiper.com/weather/clouds.jpg) no-repeat center center fixed");
      }

      else {
    $('body').css("background", "url(http://drewpiper.com/quote/geographic.jpg) no-repeat center center fixed");




      };

    });
  });
}
