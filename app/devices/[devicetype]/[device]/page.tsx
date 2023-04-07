"use client";
import getAllDevices from "@/lib/getAllDevices";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";

function DevicePage() {
  const deviceId: number = Number(usePathname().replace(/[^0-9]/g,""));
  const [device, setDevice] = useState<device>();

  //fetch data
  const fetchDevice = async () => {
    const devicesData: device[] = await getAllDevices();
    const filterDevices: device = devicesData.filter(
      (item) => item.id === deviceId
    )[0];
    setDevice(filterDevices);
  };
  useEffect(() => {
    fetchDevice();
  }, []);

  return (
    <div className="mt-16 w-4/5 mx-6 md:mx-auto">
      <button
        className="text-xl"
        onClick={() => {
          history.back();
        }}
      >
        <BiLeftArrowCircle />
      </button>
      <h1 className="text-xl font-bold">{device?.device_name}</h1>
      <ul className="mx-12 flex flex-col gap-9 mt-9 mb-16 [&>li>span]:block">
        <li>
          <span>announced :</span> {device?.announced}
        </li>
        <li>
          <span>display :</span> {device?.display}
        </li>
        <li>
          <span>camera :</span> {device?.camera}
        </li>
        <li>
          <span>memory :</span> {device?.memory}
        </li>
        <li>
          <span>OS :</span> {device?.os}
        </li>
        <li>
          <span>battery :</span> {device?.battery}
        </li>
        <li>
          <span>price :</span> {device?.price}
        </li>
      </ul>
    </div>
  );
}

export default DevicePage;
