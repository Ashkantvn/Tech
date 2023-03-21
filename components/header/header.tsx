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
          {/* Devices links*/}
          <li>
            <Link href="/devices">Devices</Link>
            <ul>
              <li>
                <Link href="/devices/smartphone">Smartphone</Link>
              </li>
              <li>
                <Link href="/devices/laptop">Laptop</Link>
              </li>
              <li>
                <Link href="/devices/tablet">Tablet</Link>
              </li>
            </ul>
          </li>
          {/* Compare link */}
          <li>
            <Link href="/compare">Compare</Link>
          </li>
          {/* News link */}
          <li>
            <Link href="/news">News</Link>
          </li>
          {/* About Link */}
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
