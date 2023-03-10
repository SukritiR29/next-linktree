import Link from "../components/Link";
import React from "react";
import { linksdata } from "./linksData";

export default function Links() {
  return (
    <section className="w-11/12  md:w-8/12 lg:w-1/3 flex mx-auto items-center justify-between bg-gray-500/30 p-6 py-4 rounded-xl backdrop-blur-[2px]">
      <div className="text-left w-full">
        <p className="text-3xl font-bold underline underline-offset-8 mb-4">
          Links
        </p>
        <ul className="w-full flex flex-col gap-2">
          {linksdata.map((ele, index) => {
            return (
              <Link
                key={ele.name + index}
                name={ele.name}
                svg={ele.svg}
                tooltip={ele.tooltip}
                link={ele.link}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
