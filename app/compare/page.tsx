import React from "react";

function Compare() {
  return (
    <main className="m-9">
      <label>
        Select type of device :
        <select className=" bg-transparent mx-1 border-b [&>option]:font-bold" name="device-type" id="">
          <option value="Smartphone">Smartphone</option>
          <option value="Laptop">Laptop</option>
          <option value="Tablet">Tablet</option>
        </select>
      </label>
      <article className="flex justify-around my-32" >
        <section>
          <h3>Device - 1</h3>
          <ul>
            <li>

            </li>
            <li>
              <span>announced :</span>
            </li>
            <li>
              <span>display :</span>
            </li>
            <li>
              <span>camera :</span>
            </li>
            <li>
              <span>memory :</span>
            </li>
            <li>
              <span>OS :</span>
            </li>
            <li>
              <span>battery :</span>
            </li>
            <li>
              <span>price :</span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Device - 2</h3>
          <ul>
            <li>
              
            </li>
            <li>
              <span>announced :</span>
            </li>
            <li>
              <span>display :</span>
            </li>
            <li>
              <span>camera :</span>
            </li>
            <li>
              <span>memory :</span>
            </li>
            <li>
              <span>OS :</span>
            </li>
            <li>
              <span>battery :</span>
            </li>
            <li>
              <span>price :</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Compare;
