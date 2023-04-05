import Link from "next/link";
import React from "react";

function Card(device: device) {
  return (
    <li>
      <h3>{device.device_name}</h3>
      <h5>OS : {device.os}</h5>
      <h5>Memory : {device.memory}</h5>
      <h4>type : {device.type}</h4>
      <Link href={`/devices/${device.type}/${device.id}`}>More</Link>
    </li>
  );
}

export default Card;
