import useData from "./useData"


interface Platform{
    id:number,
    name:string
    slug:string,
    image_background:string,
}
interface PlatformParent{
    id:number,
    name:string,
    platforms:Platform[]
}

const usePlatforms = ()=>useData<PlatformParent>('/platforms/lists/parents')


export default usePlatforms;