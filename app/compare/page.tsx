"use client";
import getAllDevices from "@/lib/getAllDevices";
import React, { useEffect, useState } from "react";

function Compare() {
  const [devices, setDevices] = useState<device[]>();
  const [firstDevice, setFirstDevice] = useState<device>();
  const [secondDevice, setSecondDevice] = useState<device | null>();
  const [typeofDevice, setTypeOfDevice] = useState<string>("");

  //map all devices and set first and second devices function
  const deviceClickHandler: (item: device) => void = (item) => {
    if (firstDevice) {
      if (secondDevice) {

        setFirstDevice(item);
        setSecondDevice(null);

      } else {
        setSecondDevice(item);
      }

    } else {
      setFirstDevice(item);
    }
  };
  const mappedDevices: React.ReactNode = devices?.map((item: device) => (
    <button
      onClick={() => {
        deviceClickHandler(item);
      }}
      key={item.id}
    >
      {item.device_name}
    </button>
  ));

  //fetch and filter devices functions
  useEffect(() => {
    const fetchDevicesForCompare: () => void = async () => {
      const devicesData: device[] = await getAllDevices();
      const filterDevices: device[] = devicesData.filter(
        (item: device) => item.type === typeofDevice
      );
      setDevices(filterDevices);
    };
    fetchDevicesForCompare();
  }, [typeofDevice]);

  return (
    <main className="m-9 md:w-5/6 md:mx-auto">
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
          >
            <option value="">Select type</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
          </select>
        </label>
      </div>

      <div className="h-32 md:h-64 lg:flex-row lg:flex-wrap lg:h-32 overflow-scroll flex flex-col gap-9 mt-16 border-y">
        {mappedDevices}
      </div>

      <article className="flex justify-around my-16 gap-3 [&>section>ul]:flex [&>section>ul]:flex-col [&>section>ul]:gap-3 [&>section>ul>li>span]:opacity-50 [&>section]:border [&>section]:p-3">
        <section>
          <h3>Device - 1</h3>
          <ul>
            <li>{firstDevice?.device_name}</li>
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
            <li>{secondDevice?.device_name}</li>
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
