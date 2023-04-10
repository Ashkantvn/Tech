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
        <p>{item.content}</p>
        <Link href={`news/${item.id}`}>More</Link>
      </li>
    );
  });

  return (
    <main>
      <h1>News page</h1>
      <ul>{mappedNews}</ul>
    </main>
  );
}

export default News;
