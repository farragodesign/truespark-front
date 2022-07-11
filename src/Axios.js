import axios from "axios";

const Axios = axios.create({
    baseURL: "https:truespark.herokuapp.com/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});

export default Axios;