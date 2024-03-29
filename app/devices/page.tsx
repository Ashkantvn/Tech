import Card from "@/components/card/card";
import getAllDevices from "@/lib/getAllDevices";
import Link from "next/link";
import React from "react";
import { BsLaptop, BsPhone, BsTablet } from "react-icons/bs";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function Devicespage() {


  const devicesData: Promise<device[]> = getAllDevices();
  const devices: device[] = await devicesData;
  const mappedDevices: React.ReactNode = devices.map((item: device) => {
    return <Card key={item.id} {...item} />;
  });


  return (
    <main className="my-12 text-center">


      <h1 className="my-3 text-lg font-bold">Devices page</h1>



      <div className="my-16 border-b-2">


        <h3 className=" font-bold">Devices type</h3>



        <ul className="flex md:justify-center md:flex-row flex-col gap-9 my-9 [&>li>a>svg]:mx-auto [&>li>a>svg]:text-3xl">
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
            <Link href="/devices/laptop">
              <BsLaptop />
              <h2>Laptop</h2>
            </Link>
          </li>
        </ul>



      </div>

      <ul className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:w-4/5 md:gap-x-3 mx-auto lg:grid-cols-3">{mappedDevices}</ul>
    </main>
  );
}

export default Devicespage;
