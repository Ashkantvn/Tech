export default async function getAllNews(){
    const response= await fetch("https://radiant-froyo-fde92e.netlify.app/api/news");
    if(!response.ok) throw Error("failed to fetch data");
    return response.json();
}