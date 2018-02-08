var appID = "&appid=cd2537336bd5be95e114a46e97d3ceef";
var cityName = "Chicago";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + appID;
var windSpeed;

function getWindSpeed() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        windSpeed = response.wind.speed;
        newGravity = windSpeed/5;
        setGravityAndBg();
        updateWindInfo(window.gameInfo);
        console.log("the wind direction is: " + direction);
        console.log(newGravity);
    });
}

function setGravityAndBg() {
  newGravity = windSpeed/5;
  if (direction === "west") {
      if (newGravity !== 0) {
          newGravity = -Math.abs(newGravity);
      }
      canvasbg = "./assets/images/canvasbgwestwind.jpg";
      render.options.background = canvasbg;
  } else {
      canvasbg = "./assets/images/canvasbgeastwind.jpg";
      render.options.background = canvasbg;
  }
}

