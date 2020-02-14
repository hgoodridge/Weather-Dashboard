$("#searchBtn").on("click",function(){
    console.log($("#citySearch").val())
    
    var searchResult = $("#citySearch").val()
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchResult + "&appid=2b8f9155e88bbf2c5d51baf0c1a74a68"
    $.ajax({
        url:url,
        method:"GET"
    })
    .then(function(response){
        console.log(response)
        var icon = (response.weather[0].icon)
        var cityName = response.name //+
        var temperature ="Temperature: "  + Math.round((response.main.temp - 273.15) * 1.80 + 32) + "°F";
        var humid = "Humidity: " + response.main.humidity +"%"
        var windSpeed = "Wind Speed: " + response.wind.speed + " Mph"
        console.log(humid)
       var jake = $(".cityHolder").append($("<div>").attr("class", "cityHolder"))
       jake.text(cityName)
        
        
        
        
        
        
    })
})
    