import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { MdCompare, MdDevices } from "react-icons/md";

function Header() {
  const smallScreenHidden = "hidden sm:block";
  const largeScreenHidden = "sm:hidden";

  return (
    <header>


      {/* home link */}
      <h1>
        <Link href="/">
          <span className={smallScreenHidden}>TECH</span>
          <AiFillHome className={largeScreenHidden} />
        </Link>
      </h1>

      
      <nav>
        <ul>
          {/* Devices links*/}
          <li>
            <Link href="/devices">
              <span className={smallScreenHidden}>devices</span>
              <MdDevices className={largeScreenHidden} />
            </Link>

            <ul className="hidden">
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
            <Link href="/compare">
              <span className={smallScreenHidden}>Compare</span>
              <MdCompare className={largeScreenHidden} />
            </Link>
          </li>

          {/* News link */}
          <li>
            <Link href="/news">
              <span className={smallScreenHidden}>News</span>
              <BiNews className={largeScreenHidden} />
            </Link>
          </li>

          {/* About Link */}
          <li>
            <Link href="/about">
              <span className={smallScreenHidden}>About</span>
              <IoMdPeople className={largeScreenHidden} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
