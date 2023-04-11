import getAllNews from "@/lib/getAllNews";
import Link from "next/link";
import React from "react";

async function News() {
  const newsData: Promise<news[]> = getAllNews();
  const news: news[] = await newsData;
  const mappedNews: React.ReactNode = news.map((item: news) => {
    return (
      <li key={item.id}>
        <h3>{item.title}</h3>
        <p >{item.content}</p>
        <Link href={`news/${item.id}`}>More</Link>
      </li>
    );
  });

  return (
    <main className="my-12">
      <h1 className="mx-9 mb-9 font-bold text-lg">News page</h1>
      <ul className="mx-12 grid gap-12">{mappedNews}</ul>
    </main>
  );
}

export default News;
