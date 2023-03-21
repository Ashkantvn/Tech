import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <h1>
        <Link href="/">TECH</Link>
      </h1>
      <nav aria-label="main-navigation">
        <ul>
            <li><Link href="/devices">Devices</Link></li>
            <li><Link href="/compare">Compare</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
