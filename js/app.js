const form = document.getElementById('form-all');
const inputCity = document.getElementById('input');

class Weather {
  constructor() {
    this.token = 'd8678ba3deee99a2bb7db9670c8c9713';
    this.url = 'http://api.openweathermap.org/data/2.5/weather';
  }

  // crée une method qui retourne toutes les donées d'une ville
  async get_data_by_city(city) {
    /*
              URL : api.openweathermap.org/data/2.5/weather?q=paris&appid=b6d02d1eb8eeb0eecdb765455078822e
              http://127.0.0.1:5500/api.openweathermap.org/data/2.5/weather/?q=casablanca&appid=d8678ba3deee99a2bb7db9670c8c9713
    */
    const config = {
      method: 'GET',
    };

    /*
        api.openweathermap.org/data/2.5/weather/?q=casablanca&appid=d8678ba3deee99a2bb7db9670c8c9713
    */

    const url = `${this.url}/?q=${city}&appid=${this.token}`;
    const response = await fetch(url, config);
    return await response.json();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputVlaue = inputCity.value;
  if (inputVlaue === '') {
    alert('faur remplit le formulaire');
  } else {
    // send to the API
    const instance = new Weather();
    const data = instance.get_data_by_city(inputVlaue);
    data.then((d) => {
      const c = d.main.temp - 273.15;
      document.getElementById('displayed-temp').textContent = Math.floor(c);
    });
  }
});
