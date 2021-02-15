import axios from 'axios'
export default () => {
    axios.defaults.headers.common['Authorization'] = `token ${process.env.PERSONAL_ACCESS_TOKEN}`;
}