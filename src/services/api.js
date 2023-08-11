import axios from 'axios'

//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=7584b297a707d572723b2d6d1b8ca2af

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;