import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link href="/">Home</Link>
    </main>
  );
}

export default NotFound;
