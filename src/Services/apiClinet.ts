import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count:number,
    results:T[],
}

const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"81f20eef4a664e6b975765295dfdecd4",
    }
})

class APIclient<T>{
    endPoint:string;
    constructor(endPoint:string){
        this.endPoint=endPoint
    }

    get=(config:AxiosRequestConfig)=>
        axiosInstance
    .get<FetchResponse<T>>(this.endPoint,config)
    .then(res=>res.data.results)

    getGame = (gameId:number|string)=>
        axiosInstance
    .get<T>(this.endPoint + '/' + gameId)
    .then(res=>res.data)

    
}


export default APIclient;