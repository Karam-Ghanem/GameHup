
import { useEffect, useState } from "react";
import apiClinet from "@/Services/apiClinet";
import { CanceledError, type AxiosRequestConfig } from "axios";




interface FetchResponse<T>{
    count:number,
    results:T[],
}
const useData =<T>(endPoint:string,configRequests?:AxiosRequestConfig,deps?:any[])=>{
    const [data, setData] = useState<T[] | null>(null);
    const [error, setError] = useState("");
    const [isLoading,setLoader] = useState(true)
    

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoader(true)
        const controller = new AbortController();
        apiClinet
        .get<FetchResponse<T>>(endPoint,{signal:controller.signal,...configRequests})
        .then((res) => {
            setLoader(false)
            setData(res.data.results)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoader(false)
        });

        return ()=>controller.abort()
        
    },deps? [...deps]:[]);

    return {data,error,isLoading}
}


export default useData;