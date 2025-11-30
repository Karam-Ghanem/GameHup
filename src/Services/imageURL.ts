import placeHolder from '@/assets/placeHolder.png'

const cropURL=(url:string)=>{
    if(!url) return placeHolder;
    const target = '/media/'
    const targetLength = target.length
    const croingText = "crop/600/400/"
    const newURL = url.slice(0,url.indexOf(target)+targetLength)+croingText+url.slice(url.indexOf(target)+targetLength,url.length+1)
    
    return newURL;
}

export default cropURL;
