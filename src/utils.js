export const getImageUrl = (path)=>{
return new URL(`/assest/${path}`, import.meta.url).href;
}