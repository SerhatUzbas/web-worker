"use client";
import React, { useEffect, useState } from "react";

const ClientRenderedComponent = () => {
  const [arr, setArr] = useState<any>();

  useEffect(() => {
    const worker = new Worker("/worker.js");
    worker.onmessage = (e) => {
      const data = e.data;
      setArr(data);
    };
    worker.postMessage([2, 3, 4]);
  }, []);

  // console.log(arr);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      My Client Rendered Component!
    </main>
  );
};

export default ClientRenderedComponent;
