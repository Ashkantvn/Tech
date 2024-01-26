export default async function getAllDevices() {
  try {
    const response = await fetch(
      "https://radiant-froyo-fde92e.netlify.app/api/devices"
    );
    return response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
