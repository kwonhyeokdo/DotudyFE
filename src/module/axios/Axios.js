import Axios from "axios";
import qs from "qs";

const axiosInstance = Axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type":"application/json"
    },
    paramsSerializer: params => {
        console.log(params);
        const a = qs.stringify(params, {arrayFormat: "repeat"});
        console.log(a);
        return a;
    }
});

export default axiosInstance;