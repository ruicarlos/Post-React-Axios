import axios from "axios";

const blogFetch = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        "token":"dadasadsasd"
    }
});

export default blogFetch;