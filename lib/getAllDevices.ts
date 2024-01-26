export default async function getAllDevices(){
    const response = await fetch("https://radiant-froyo-fde92e.netlify.app/api/devices");
    if(!response.ok) throw new Error("failed to fetch data");
    return response.json();
}