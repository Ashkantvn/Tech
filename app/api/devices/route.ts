import data from "@/data/devices_data.json";

export async function GET(){
    return new Response(JSON.stringify(data));
}