"use client";
import Card from "@/components/card/card";
import getAllDevices from "@/lib/getAllDevices";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";

function DeviceTypePage() {
  const pathName: string = usePathname().slice(9);
  const [devices, setdevice] = useState<device[]>();
  const mapDevices: React.ReactNode = devices?.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  //fetch functions
  useEffect(() => {
    const fetchFilteredDevice = async () => {
      const devicesData: device[] = await getAllDevices();
      const filterDevices: device[] = devicesData.filter((item) =>
        item.type.toLowerCase().includes(pathName)
      );
      setdevice(filterDevices);
    };
    fetchFilteredDevice();
  }, []);

  return (
    <div className="mb-12">
      <Link className="text-2xl" href="/devices"><BiLeftArrowCircle/></Link>
      <h1 className="border-b p-3 text-center my-12 font-bold text-lg">{pathName}</h1>
      <ul className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:w-4/5 md:gap-x-3 mx-auto lg:grid-cols-3">{mapDevices}</ul>
    </div>
  );
}

export default DeviceTypePage;
