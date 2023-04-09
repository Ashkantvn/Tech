import data from "@/data/news_data.json";

export async function GET(){
    return new Response(JSON.stringify(data));
}