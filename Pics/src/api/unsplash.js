import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID h_n02u4Sgn4TXZHzS1ujpYd5yotZXojmXZNVet40GRI',
          
    },
});