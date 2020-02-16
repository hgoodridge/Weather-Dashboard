$("#searchBtn").on("click",function(){
    console.log($("#citySearch").val())
    
    var searchResult = $("#citySearch").val()
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchResult + "&units=imperial&appid=2b8f9155e88bbf2c5d51baf0c1a74a68"
    $.ajax({
        url:url,
        method:"GET"
    })
    .then(function(response){
        console.log(response)
        // "http://openweathermap.org/img/wn/"+ icon+"@2x.png"
        var icon = (response.weather[0].icon)
        var cityName = response.name + " (" + moment().format('l') + ")";
        var temperature = $("<div>").text("Temperature: "  + Math.round(response.main.temp) + "°F");
        var humid = $("<div>").text("Humidity: " + response.main.humidity +"%")
        var windSpeed = $("<div>").text("Wind Speed: " + response.wind.speed + " Mph")
        var image = $("<img>").attr('src',"http://openweathermap.org/img/wn/" + icon + "@2x.png")
        var main = $("<div>")
        var space = $("<br>")
        main.text(cityName)
        main.append(image, temperature, humid, windSpeed)
        var jake = $(".cityHolder").append(main)

       
    
        
        
        
        
        
        
    })
})
    