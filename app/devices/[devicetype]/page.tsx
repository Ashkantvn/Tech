"use client"
import { usePathname } from "next/navigation";
import React from "react";

function DeviceTypePage() {
  const pathName :string =  usePathname().slice(9);
  return (<main>
      <h1>{pathName}</h1>
    
    </main>
  )
  ;
}

export default DeviceTypePage;
