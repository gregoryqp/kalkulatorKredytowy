fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=50.683333&lon=21.75&appid=273291ec3df3be4594b4b239e8a74e7c&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    document.querySelector(".stacja").innerText = data.name;

    const now = new Date();
    const days = [
      "NIEDZIELA",
      "PONIEDZIAŁEK",
      "WTOREK",
      "ŚRODA",
      "CZWARTEK",
      "PIĄTEK",
      "SOBOTA",
    ];

    const element = document.querySelector("#dzien");
    element.innerText = `${days[now.getDay()]}`;

    document.querySelector(".temperatura").innerText = Math.round(
      data.main.temp
    );
    /*document.querySelector('.data_pomiaru').innerText = data.data_pomiaru;*/
    document.querySelector(".cisnienie").innerText = data.main.pressure;
    /*document.querySelector('.godzina_pomiaru').innerText = data.godzina_pomiaru;*/
    document.querySelector(".humidity").innerText = data.main.humidity;
    document.querySelector(".wind").innerText = data.wind.speed;

    data.weather.forEach((weather) => {
      const ikonki = `${weather.id}`;

      if (weather.id == 200 && weather.id <= 232) {
        document.getElementById("stan").src = "images/pioruny.png";
      } else if (weather.id == 300 && weather.id <= 321) {
        document.getElementById("stan").src = "images/deszcz.png";
      } else if (weather.id >= 500 && weather.id <= 503) {
        document.getElementById("stan").src = "images/deszcz.png";
      } else if (weather.id == 600 && weather.id <= 622) {
        document.getElementById("stan").src = "images/snieg.png";
      } else if (weather.id == 701 && weather.id <= 781) {
        document.getElementById("stan").src = "images/fog.png";
      } else if (weather.id == 800) {
        document.getElementById("stan").src = "images/slonce.png";
      } else if (weather.id == 801 && weather.id <= 803) {
        document.getElementById("stan").src = "images/slonceiChmury.png";
      } else if (weather.id == 804) {
        document.getElementById("stan").src = "images/chmury.png";
      } else {
        document.getElementById("stan").src = "";
      }
    });
  });
