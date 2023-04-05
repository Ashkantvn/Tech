export default async function getAllDevices(){
    const response = await fetch("http://localhost:3000/api/devices");
    if(!response.ok) throw new Error("failed to fetch data");
    return response.json();
}