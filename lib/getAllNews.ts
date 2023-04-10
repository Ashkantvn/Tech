export default async function getAllNews(){
    const response= await fetch("http://localhost:3000/api/news");
    if(!response.ok) throw Error("failed to fetch data");
    return response.json();
}