import getAllNews from "@/lib/getAllNews";
import Link from "next/link";
import React from "react";
import style from "@/style/news.module.css";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function News() {
  const newsData: Promise<news[]> = getAllNews();
  const news: news[] = await newsData;
  const mappedNews: React.ReactNode = news.map((item: news) => {
    return (
      <li key={item.id}>
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p className={style.ellipsis+" opacity-50"}>{item.content}</p>
        <Link className="font-bold text-sm" href={`news/${item.id}`}>More</Link>
      </li>
    );
  });

  return (
    <main className="my-12 md:w-5/6 md:mx-auto">
      <h1 className="mx-9 mb-9 font-bold text-lg">News page</h1>
      <ul className="mx-12 grid gap-12 md:grid-cols-2">{mappedNews}</ul>
    </main>
  );
}

export default News;
