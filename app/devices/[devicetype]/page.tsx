import Card from "@/components/card/card";
import getAllDevices from "@/lib/getAllDevices";
import Link from "next/link";
import React from "react";
import { BiLeftArrowCircle } from "react-icons/bi";

async function DeviceTypePage({ params }: { params: { devicetype: string } }) {

  const deviceType: string = params.devicetype;
  const devicesData: Promise<device[]> = getAllDevices();
  const devices: device[] = await devicesData;


  ///filter and map devices
  const filterDevices: device[] = devices.filter((item) =>
    item.type.toLowerCase().includes(deviceType)
  );
  const mapDevices: React.ReactNode = filterDevices?.map((item) => {
    return <Card key={item.id} {...item} />;
  });




  return (
    <div className="mb-12">
      <Link className="text-2xl" href="/devices"><BiLeftArrowCircle /></Link>
      <h1 className="border-b p-3 text-center my-12 font-bold text-lg">{deviceType}</h1>
      <ul className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:w-4/5 md:gap-x-3 mx-auto lg:grid-cols-3">{mapDevices}</ul>
    </div>
  );
}

export default DeviceTypePage;
