
import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-demo-87760-default-rtdb.firebaseio.com',
})

export default journalApi;