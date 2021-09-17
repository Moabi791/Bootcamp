import axios from 'axios';

const KEY = 'AIzaSyCAITp4mkBz1rgKyf-SeghRVw8o9eGAfB0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY,
        

    }

});