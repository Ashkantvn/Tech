import getAllDevices from "@/lib/getAllDevices";
import Link from "next/link";
import React from "react";
import { BiLeftArrowCircle } from "react-icons/bi";

async function DevicePage({ params }: { params: { devicetype: string ,device:string } }) {  
  const deviceId: number = Number(params.device);
  const devicesData: device[] = await getAllDevices();


  ////filter devices
  const filterDevices: device = devicesData.filter(
    (item) => item.id === deviceId
  )[0];
  

  return (
    <div className="mt-16 w-4/5 mx-6 md:mx-auto">
      <Link
        className="text-xl"
        href="/devices"
      >
        <BiLeftArrowCircle />
      </Link>


      {/* device informations */}
      <h1 className="text-xl font-bold">{filterDevices?.device_name}</h1>
      <ul className="mx-12 flex flex-col gap-9 mt-9 mb-16 [&>li>span]:block">
        <li>
          <span>announced :</span> {filterDevices?.announced}
        </li>
        <li>
          <span>display :</span> {filterDevices?.display}
        </li>
        <li>
          <span>camera :</span> {filterDevices?.camera}
        </li>
        <li>
          <span>memory :</span> {filterDevices?.memory}
        </li>
        <li>
          <span>OS :</span> {filterDevices?.os}
        </li>
        <li>
          <span>battery :</span> {filterDevices?.battery}
        </li>
        <li>
          <span>price :</span> {filterDevices?.price}
        </li>
      </ul>
    </div>
  );
}

export default DevicePage;
