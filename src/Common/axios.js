import _axios from "axios"

const axios = (baseURL) => {
    const instance = _axios.create({
            baseURL: baseURL, 
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
            }
        });

     return instance;
}

export {axios};
export default axios();