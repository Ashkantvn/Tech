import Link from "next/link";
import React from "react";
import { BsLaptop, BsPhone, BsSearch, BsTablet } from "react-icons/bs";

function Devicespage() {
  return (
    <main>
      <h1>Devices page</h1>
      <label>
        <h4>Search your favourite device:</h4>
        <input type="search" />
        <button>
          <BsSearch />
        </button>
      </label>

      <div>
        <h3>Devices types:</h3>
        <ul>
          <li>
            <Link href="/devices/smartphone">
              <BsPhone />
              <h2>Smartphone</h2>
            </Link>
          </li>
          <li>
            <Link href="/devices/tablet">
              <BsTablet />
              <h2>Tablet</h2>
            </Link>
          </li>
          <li>
            <Link href="/devices/laptops">
              <BsLaptop />
              <h2>Laptop</h2>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Devicespage;
