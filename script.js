function hyouji() {
    let city = document.getElementById('city').value;
    var strUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ja&appid=560787336c43b88dc66b63a55d625eda`;

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        // 非同期通信（Ajax）
        // readyState 4: リクエスト終了, status 200:通信成功
        if (this.readyState == 4 && this.status == 200) {
            var data = this.response;

            // 場所
            document.getElementById('place').innerHTML = data.name;

            // 天気（画像）
            var img = document.getElementById('icon');
            img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            img.alt = data.weather[0].main;

            // 天気
            document.getElementById('weather').innerHTML = data.weather[0].description;

            // 現在の気温
            document.getElementById('temp').innerHTML = data.main.temp;

            //湿度
            document.getElementById('humidity').innerHTML=data.main.humidity;

            //最高気温
            document.getElementById('maxTemp').innerHTML=data.main.temp_max;

            //最低気温
            document.getElementById('minTemp').innerHTML=data.main.temp_min;
        }
    }
    xmlhttp.open("GET", strUrl, true);  //非同期通信：true,同期通信：false
    xmlhttp.responseType = 'json';
    xmlhttp.send();
}

