"use client";
import getAllDevices from "@/lib/getAllDevices";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function DevicePage() {
  const deviceId: number = Number(usePathname().slice(20));
  const [device, setDevice] = useState<device>();

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
    <div>
      <h1>{device?.device_name}</h1>
      <ul>
        <li>announced :  {device?.announced}</li>
        <li>display :  {device?.display}</li>
        <li>camera :  {device?.camera}</li>
        <li>memory :  {device?.memory}</li>
        <li>OS :  {device?.os}</li>
        <li>battery :  {device?.battery}</li>
        <li>price :  {device?.price}</li>
      </ul>
    </div>
  );
}

export default DevicePage;
