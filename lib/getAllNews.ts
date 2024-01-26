export default async function getAllNews(){
    try {
        const response= await fetch("https://radiant-froyo-fde92e.netlify.app/api/news");
        return response.json();
    } catch (error) {
       console.log(error);
       return null;
       
    }
}