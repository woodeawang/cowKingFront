import React, { ReactNode } from "react";
import Header from "./Header";

const LayOut = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative mx-auto ">
        <Header />
      </div>
    </>
  );
};

export default LayOut;
