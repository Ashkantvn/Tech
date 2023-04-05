import Link from "next/link";
import React from "react";

function Card(device: device) {
  return (
    <li className="flex flex-col items-center gap-3 shadow-sm p-3 shadow-slate-500">
      <h3 className="font-bold">{device.device_name}</h3>
      <h4 className="text-sm font-light">{device.type}</h4>
      <Link className="text-sm font-bold" href={`/devices/${device.type}/${device.id}`}>More</Link>
    </li>
  );
}

export default Card;
