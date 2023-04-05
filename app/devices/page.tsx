import Card from "@/components/card/card";
import getAllDevices from "@/lib/getAllDevices";
import Link from "next/link";
import React from "react";
import { BsLaptop, BsPhone, BsSearch, BsTablet } from "react-icons/bs";

async function Devicespage() {
  const devicesData: Promise<device[]> = getAllDevices();
  const devices: device[] = await devicesData;
  const mappedDevices: React.ReactNode = devices.map((item: device) => {
    return <Card {...item}/>;
  });
  return (
    <main className="my-9 text-center">
      <h1 className="my-3 text-lg font-bold">Devices page</h1>
      <label className="mx-auto flex flex-col items-center gap-3">
        <h4 className="text-sm">Search your favourite device:</h4>
        <input className="bg-transparent border-b focus:outline-none focus:border-b-4 p-2 rounded-md"  type="search" />
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

      <ul>{mappedDevices}</ul>
    </main>
  );
}

export default Devicespage;
