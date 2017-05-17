/*
Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.
http://darkskyapp.github.io/skycons/
*/
var skycons = new Skycons();

  // you can add a icon to a html canvas. simply supply its element id and the weather you want to show.
    skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("day1", Skycons.CLEAR_DAY);
    skycons.add("day2", Skycons.CLOUDY);
    skycons.add("day3", Skycons.RAIN);

  // start all icons animation!
  skycons.play();

  // update a icon on  canvas by its id
  skycons.set("today", Skycons.RAIN);

/*
Get value from Bootstrap dropdown menu
*/

$( "#dropdown li a" ).each(function() {
  var S = $(this);
  var T = $(this).text();
  console.log(T);
  getJsonUntilSuccess(getAPI(T),function(data){
      var currentTemperature = data.query.results.channel.item.condition.temp  ;
      var currentTemperatureC=Math.round((currentTemperature - 32) / (9 / 5));
      console.log(currentTemperatureC );
      S.append("<span class=tem>"+currentTemperatureC+"℃ </span>");
      $(".tem").css({
        "float" : "right",
      })
         })
})


$('#dropdown li a ').on('click', function(){
    var city = $(this).find(".b").text();
    var show= $(this).text();
    console.log(city);
    $("#123").text(show);
    console.log(city);
    getWeather(city);
});

$(document).ready(function () {
  var city = $(this).text();
  getWeather(city);
})

function getAPI(c){
    var cityAPI;
    switch (c) {
      case "台北市":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taipei%20City%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "新北市":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20Taipei%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "台中市":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taichung%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "台南市":
          return cityAPI="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tainan%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "高雄市":
          return cityAPI="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kaohsiung%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "基隆市":
          return cityAPI="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Keelung%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "桃園市":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taoyuan%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "新竹市":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hsinchu%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "新竹縣":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hsinchu%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "苗栗縣":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Miaoli%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "彰化縣":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Changhua%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "南投縣":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Nantou%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "雲林縣":
          return cityAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Dounan%20Township%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "嘉義市":
          return cityAPI ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Chiayi%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "嘉義縣":
          return cityAPI ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Chiayi%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "屏東縣":
          return cityAPI ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Pingtung%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "宜蘭縣":
          return cityAPI ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Ilan%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "花蓮縣":
          return cityAPI ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Hualien%20City%20Taiwan%20%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "台東縣":
          return cityAPI ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Taitung%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "澎湖縣":
          return cityAPI ="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Makung%20City%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "金門縣":
          return cityAPI="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Lieyu%20Township%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      case "連江縣":
          return cityAPI="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Juguang%20Township%20Taiwan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        break;
      default: cityAPI="none";

    }
  }

  function getWeather(c){
    // var skycons = new Skycons();

    $.getJSON(getAPI(c),function(data){
    	// 可以比較方便找到你要的資料在這個物件的哪個位置
    	console.log (data) ;
    	// 例如如果要拿取該縣市的目前溫度。
      if (data.query.results){
    	var currentTemperature = data.query.results.channel.item.condition.temp  ;
      var currentTemperatureC=Math.round((currentTemperature - 32) / (9 / 5));
      $(".temperature").text(currentTemperatureC);
      var currentDate= data.query.results.channel.item;
      $(".date").text(currentDate.forecast[0].date);
      $("#text").text(": "+currentDate.condition.text);
      var conditionCode= currentDate.condition.code;
      console.log(getIcon(currentDate.condition.code));
      console.log(currentDate.condition.code);
      skycons.set("today", getIcon(currentDate.condition.code));
      skycons.set("day1", getIcon(currentDate.forecast[1].code));
      skycons.set("day2", getIcon(currentDate.forecast[2].code));
      skycons.set("day3", getIcon(currentDate.forecast[3].code));
      skycons.play();
      //forecast day
      var FDay=data.query.results.channel.item;
      $(".table tr th:eq(0)").text(FDay.forecast[1].date);
      $(".table tr th:eq(1)").text(FDay.forecast[2].date);
      $(".table tr th:eq(2)").text(FDay.forecast[3].date);
      //weather range
      $(".table tr td:eq(0)").text(Math.round((FDay.forecast[1].high - 32) / (9 / 5)) +"-"+ Math.round((FDay.forecast[1].low - 32) / (9 / 5)) + " ℃");
      $(".table tr td:eq(1)").text(Math.round((FDay.forecast[2].high - 32) / (9 / 5)) +"-"+ Math.round((FDay.forecast[2].low - 32) / (9 / 5)) + " ℃");
      $(".table tr td:eq(2)").text(Math.round((FDay.forecast[3].high - 32) / (9 / 5)) +"-"+ Math.round((FDay.forecast[3].low - 32) / (9 / 5)) + " ℃");

    }else{
      console.info("reloading : ",getAPI(c)) ;
      getWeather(c);
    }
    })
}

  function getIcon(icon){
    if(icon== "33"||icon=="34"||icon=="36"){
      return Skycons.CLEAR_DAY;
    }else if(icon === "31"||icon=="33"){
      return Skycons.CLEAR_NIGHT;
    }else if (icon==="25"||icon=="30"||icon=="44") {
      return Skycons.PARTLY_CLOUDY_DAY;
    }else if (icon==="27"||icon=="29") {
      return Skycons.PARTLY_CLOUDY_NIGHT;
    }else if (icon==="22"||icon=="26"||icon=="28") {
      return Skycons.CLOUDY;
    }else if (icon==="18") {
      return Skycons.SLEET;
    }else if (icon==="16"||icon=="41"||icon=="42"||icon=="43") {
      return Skycons.SNOW;
    }else if (icon===" 23"||icon=="24") {
      return Skycons.WIND;
    }else if (icon==="19"||icon=="20") {
      return Skycons.FOG;
    }else{
      return Skycons.RAIN;
    }
  }


  function getJsonUntilSuccess (url , callback ){

  $.getJSON (url , function (data){

    if (data.query.results){ // if data.query.results exist , do the following action.
      callback (data)
    }else {
      console.info("reloading : ",url)
      getJsonUntilSuccess(url,callback)
    }

  })

}
