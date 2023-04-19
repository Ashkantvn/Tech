import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { MdCompare, MdDevices } from "react-icons/md";

function Header() {
  const smallScreenHidden:string = "hidden lg:block";
  const largeScreenHidden:string = "lg:hidden";


  const headerClassNames:()=>string = ()=>{

    const headerMainClassNames:string = "bg-neutral-800 fixed bottom-0 w-full flex justify-center gap-6 h-9 p-3";
    const headerMdClassNames:string = "md:h-full md:flex-col md:w-10 md:justify-between md:py-6";
    const headerLgClassNames:string = "lg:top-0 lg:flex-row lg:w-full lg:h-12 lg:p-3";
    
    return `${headerMainClassNames} ${headerMdClassNames} ${headerLgClassNames}`;
  }

  return (
    <header className={headerClassNames()}>


      {/* home link */}
      <h1>
        <Link title="Home" href="/">
          <span className={smallScreenHidden}>TECH</span>
          <AiFillHome className={largeScreenHidden} />
        </Link>
      </h1>

      
      <nav>
        <ul className="flex gap-6 md:flex-col md:gap-16 lg:flex-row">
          {/* Devices links*/}
          <li>
            <Link title="Devices" href="/devices">
              <span className={smallScreenHidden}>devices</span>
              <MdDevices className={largeScreenHidden} />
            </Link>
          </li>

          {/* Compare link */}
          <li>
            <Link title="Compare" href="/compare">
              <span className={smallScreenHidden}>Compare</span>
              <MdCompare className={largeScreenHidden} />
            </Link>
          </li>

          {/* News link */}
          <li>
            <Link title="News" href="/news">
              <span className={smallScreenHidden}>News</span>
              <BiNews className={largeScreenHidden} />
            </Link>
          </li>

          {/* About Link */}
          <li>
            <Link title="AboutUs" href="/about">
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
