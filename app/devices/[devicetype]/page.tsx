"use client";
import Card from "@/components/card/card";
import getAllDevices from "@/lib/getAllDevices";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function DeviceTypePage() {
  const pathName: string = usePathname().slice(9);
  const [devices, setdevice] = useState<device[]>();
  const mapDevices: React.ReactNode = devices?.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  //fetch functions
  const fetchSmartphone = async () => {
    const devicesData: device[] = await getAllDevices();
    const filterDevices: device[] = devicesData.filter((item) =>
      item.type.toLowerCase().includes(pathName)
    );
    setdevice(filterDevices);
  };
  useEffect(() => {
    fetchSmartphone();
  }, []);

  return (
    <div>
      <h1>{pathName}</h1>
      <ul>{mapDevices}</ul>
    </div>
  );
}

export default DeviceTypePage;
