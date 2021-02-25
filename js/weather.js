// 'use strict';
// class Weather {
//   constructor() {
//     this.token = 'd8678ba3deee99a2bb7db9670c8c9713';
//     this.url = 'api.openweathermap.org/data/2.5/weather';
//   }

//   // crée une method qui retourne toutes les donées d'une ville
//   get_data_by_city(city) {
//       /*
//             URL : api.openweathermap.org/data/2.5/weather?q=paris&appid=b6d02d1eb8eeb0eecdb765455078822e
//       */
//     const config = {
//         method: "GET"
//     }
//     const response = await fetch(`${this.url}/?q=${city}&appid=${this.token}`, config)

//     return await response.json();
//   }
// }
