"use client";
import getAllNews from "@/lib/getAllNews";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function SpecificNews() {
  const newsId: number = Number(usePathname().replace(/[^0-9]/g, ""));
  const [news, setNews] = useState<news>();

  useEffect(() => {
    const fetchSpecificNews: () => void = async () => {
      const newsData: news[] = await getAllNews();
      const specificNews: news = newsData.filter(
        (item: news) => item.id === newsId
      )[0];

      setNews(specificNews);
    };
    fetchSpecificNews();
  }, [newsId]);
  return (
    <div className="m-9 md:w-3/4 md:mx-auto lg:mt-16">
      <h1 className="font-bold text-sm">{news?.title}</h1>
      <p className="my-9">{news?.content}</p>
      <h6 className="my-9 opacity-90"><span className="font-bold text-sm">important words:</span> <br /> {news?.keywords}</h6>
      <address className="opacity-30">
        <span>Written by : {news?.author}</span><br />
        <time dateTime={news?.date}>{news?.date}</time>
      </address>
    </div>
  );
}

export default SpecificNews;
