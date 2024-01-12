import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Twitter from "./components/Twitter";

export default function App() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {/* Grid items */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <Twitter />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <Twitter />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <Twitter />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <Twitter />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <Twitter />
      </div>
    </div>
  );
}

