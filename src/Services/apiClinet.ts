import axios from "axios";


const apiClinet = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"81f20eef4a664e6b975765295dfdecd4",
    }
    
})

export default apiClinet;