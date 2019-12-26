import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://react-burger-builder-8ba1e.firebaseio.com/'
});

export default instance