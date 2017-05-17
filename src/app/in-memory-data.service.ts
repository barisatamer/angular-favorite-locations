/**
 * Created by barisatamer on 5/16/17.
 */

import {InMemoryDbService} from 'angular-in-memory-web-api/in-memory-backend.service';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let locations = [
        {
          id: 11,
          name: 'Bellagio',
          latitude: 45.973239,
          longitude: 9.243369,
          imgUrl: 'https://lh3.googleusercontent.com/proxy/K3Ge-BOzY6GApJtivCiBu1CUP-I2Vz6b_Rs0eFqfd16TYIJAc9J18LRt50kObJpWAlREbaEGJQ0Vq-tq15obQ36y_Y6XhIs=w408-h246-k-no'
        },

        {
          id: 12,
          name: 'Menaggio',
          latitude: 46.020970,
          longitude: 9.238996,
          imgUrl: 'https://lh5.googleusercontent.com/proxy/MiGcrwnCou8X8ZE_XB2-nIsXfAqqapLnVW5KMjjSUb_iCixqe_eVa0qnlPeHGYmQeOOWz9iyUHWYwX-hGdAwGkr9Olkm9tg=w408-h236-k-no'
        }
        ,
        {
          id: 13,
          name: 'Lecco',
          latitude: 45.850466,
          longitude: 9.390768,
          imgUrl: 'https://lh5.googleusercontent.com/proxy/lyntou6ObEO3QQuRwuX3kVK9GEYOWhvwcSSKUYgN0J9iqw-fXQ5BTmDORS3juoB0L1sOxxDQXlXfEFnsUtmDxAz5NN_Am_s=w408-h306-k-no'
        }
        ,
        {
          id: 14,
          name: 'Lago di Garda',
          latitude: 45.586232,
          longitude: 10.690098,
          imgUrl: 'https://lh6.googleusercontent.com/proxy/w5Fc6QUON07kukMP2NUmy3VajPcjxWdyRsTAhAag3Olv-FpZKrGH46CVDpOMEYzKkTZTKktNfk-ecC6AKfSWu8bvYicBYoQ=w408-h272-k-no'
        }
        ,
        {
          id: 15,
          name: 'Lago dlseo',
          latitude: 45.691523,
          longitude: 10.101220,
          imgUrl: 'https://lh6.googleusercontent.com/proxy/7LhbVrS24q1LmCP8J75yEronJA4wz_VwRAFm-Diw0ncCGb--vF0I2Kk8AHfZKi0HXJks43NFdotD-hxsau7wcanpMcQpLyTNQbxcNjXSagMkBInRGJw2D9JglSgE5giqHlqXoT3QpYdn0zSzYWvdcZ5IZt0WJw=w408-h297-k-no'
        }
        ,
        {
          id: 16,
          name: 'Mandello del Lario',
          latitude: 45.915982,
          longitude: 9.315338,
          imgUrl: 'https://lh5.googleusercontent.com/proxy/sm4yxqiJY81XQtBl6bBwNDyD0vuvz_FVsNHLP6kX1rEEU7sNZ-s6eWjvqFMIRBBL6EFlS-cdzYNFbZeRsaecf1J8xKorYac=w408-h271-k-no'
        }
        ,
        {
          id: 17,
          name: 'Argegno',
          latitude: 45.943321,
          longitude: 9.127961,
          imgUrl: 'https://lh6.googleusercontent.com/-f1ydHoc9ddk/V9tmQ2TEq_I/AAAAAAAAaGM/XgONxyJAqyMlXaLKTlrYq0ub3kH6_37yQCJkC/w408-h277-k-no/'
        }
        ,
        {
          id: 18,
          name: 'Dongo',
          latitude: 46.123318,
          longitude: 9.281532,
          imgUrl: 'https://lh3.googleusercontent.com/proxy/3hc2TgZmD1FVqHnNFoJgvTB4QgABEcqN6JxwDhtaP6PKpb_ZmuOA9ZmrddQXK9xso3zryK6CmR02KRtW4_emNOSOA9F0ww=w408-h283-k-no'
        }
        ,

      ]
    ;
    return {locations};
  }
}

