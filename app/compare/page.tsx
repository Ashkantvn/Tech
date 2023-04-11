"use client";
import getAllDevices from "@/lib/getAllDevices";
import React, { useEffect, useState } from "react";

function Compare() {
  const [devices, setDevices] = useState<device[]>();
  const [firstDevice, setFirstDevice] = useState<device>();
  const [secondDevice, setSecondDevice] = useState<device>();
  const [typeofDevice, setTypeOfDevice] = useState<string>("");


  //mapping devices function
  const mappedDevices: React.ReactNode = devices?.map((item: device) => (
    <button key={item.id}>{item.device_name}</button>
  ));

  //fetch functions
  const fetchCompareDevices: () => void = async () => {
    const devicesData: device[] = await getAllDevices();
    const filterDevices: device[] = devicesData.filter(
      (item: device) => item.type === typeofDevice
    );
    setDevices(filterDevices);
  };
  useEffect(() => {
    fetchCompareDevices();
  }, [typeofDevice]);

  return (
    <main className="m-9">
      <div>
        <h1>Compare Page</h1>
        <label>
          Select type of device :
          <select
            onChange={(e) => {
              setTypeOfDevice(e.target.value);
            }}
            className=" bg-transparent mx-1 border-b [&>option]:font-bold"
            name="device-type"
            id=""
          >
            <option value="Smartphone">Smartphone</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
          </select>
        </label>
      </div>

      <div className="h-32 overflow-scroll flex flex-col gap-9 mt-16 border-y">
        {mappedDevices}
      </div>

      <article className="flex justify-around my-16">
        <section>
          <h3>Device - 1</h3>
          <ul>
            <li></li>
            <li>
              <span>announced :</span> <br /> {firstDevice?.announced}
            </li>
            <li>
              <span>display :</span> <br /> {firstDevice?.display}
            </li>
            <li>
              <span>camera :</span> <br /> {firstDevice?.camera}
            </li>
            <li>
              <span>memory :</span> <br /> {firstDevice?.memory}
            </li>
            <li>
              <span>OS :</span> <br /> {firstDevice?.os}
            </li>
            <li>
              <span>battery :</span> <br /> {firstDevice?.battery}
            </li>
            <li>
              <span>price :</span> <br /> {firstDevice?.price}
            </li>
          </ul>
        </section>

        <section>
          <h3>Device - 2</h3>
          <ul>
            <li></li>
            <li>
              <span>announced :</span> <br /> {secondDevice?.announced}
            </li>
            <li>
              <span>display :</span> <br /> {secondDevice?.display}
            </li>
            <li>
              <span>camera :</span> <br /> {secondDevice?.camera}
            </li>
            <li>
              <span>memory :</span> <br /> {secondDevice?.memory}
            </li>
            <li>
              <span>OS :</span> <br /> {secondDevice?.os}
            </li>
            <li>
              <span>battery :</span> <br /> {secondDevice?.battery}
            </li>
            <li>
              <span>price :</span> <br /> {secondDevice?.price}
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Compare;
