$(document).ready(function() {
  const URI =
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-23657188-F80E-42A7-A592-8F0EB8D62E33";

  $(".select").change(function(e) {
    // console.log(e);
    let select = e.target.value;
    // console.log(select);

    $.ajax({
      url: URI,
      success: function(infos) {
        // console.log(infos);
        let location = infos.records.location;
        let str = "";
        // console.log(location);
        $.each(location, function(index, value) {
          let weaStatus =
            value.weatherElement[0].time[1].parameter.parameterName;
          let weaDate = value.weatherElement[0].time[1].startTime;
          weaDate = weaDate.substring(0, 11);
        //   console.log(weaDate);
          let weaRainPercent =
            value.weatherElement[1].time[1].parameter.parameterName + "%";
          let weaMinT =
            value.weatherElement[2].time[1].parameter.parameterName;
          let weaMaxT =
            value.weatherElement[4].time[1].parameter.parameterName;
          let cityWeather =
            '<div class="weather-item"><div class="wea-title"><h3 class="city-name">' +
            value.locationName +
            '</h3><span class="time">今日18:00 - 明日06:00</span></div><div class="wea-content"><p class="date">日期：'+weaDate+'</p><p class="wea-info">天氣現象：' +
            weaStatus +
            '</p><p class="temperature">氣溫：' +
            weaMinT +
            " - " +
            weaMaxT + "&deg" +"C"+
            '</p><p class="rainPercent">降雨機率：' +
            weaRainPercent +
            "</p></div></div>";

          if (select == value.locationName) {
            str += cityWeather;
          } else if (select == "all") {
            str += cityWeather;
            // location[index].locationName
          } else if (select == "sixCity") {
            if (value.locationName == "臺北市") {
              str += cityWeather;
            }
            if (value.locationName == "新北市") {
              str += cityWeather;
            }
            if (value.locationName == "桃園市") {
              str += cityWeather;
            }
            if (value.locationName == "臺中市") {
              str += cityWeather;
            }
            if (value.locationName == "臺南市") {
              str += cityWeather;
            }
            if (value.locationName == "高雄市") {
              str += cityWeather;
            }
            // str += cityWeather;
          }
          $(".weather-items")
            .hide()
            .html(str)
            .fadeIn(400);
        });
      }
    });
  });
});
