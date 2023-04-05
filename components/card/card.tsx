import Link from "next/link";
import React from "react";

function Card(device: device) {
  return (
    <li>
      <h3>{device.device_name}</h3>
      <h4>{device.type}</h4>
      <h5>{device.os}</h5>
      <h5>{device.memory}</h5>
      <Link href={`/devices/${device.type}/${device.id}`}>More</Link>
    </li>
  );
}

export default Card;
