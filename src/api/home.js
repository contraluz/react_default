import axios from 'axios'

export default {
    getMovieList() {
        return axios.get('https://movie.douban.com/j/tv/recommend_groups?tag=%E7%83%AD%E9%97%A8').then((res) => {
            return Promise.resolve(res)
          })
    }
}