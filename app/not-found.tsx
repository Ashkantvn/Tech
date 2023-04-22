import Link from "next/link";
import React from "react";
import "../style/notFound.css";

function NotFound() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="shadow-stroke-text text-9xl">404</h1>
      <h2 className="text-6xl text-center">Page not found</h2>
      <Link className="not-found-button font-bold my-9" href="/">Home</Link>
    </main>
  );
}

export default NotFound;
