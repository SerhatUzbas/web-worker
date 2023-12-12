"use client";
import React, { ComponentType, useEffect, useState } from "react";

const ClientImport = () => {
  const [Component, setComponent] = useState<ComponentType<any>>();

  useEffect(() => {
    const worker = new Worker("/importerWorker.js");

    worker.onmessage = (e) => {
      const comp = e.data;
      setComponent(comp?.module);
    };

    worker.postMessage({ modulePath: "@/src/components/ImportFromWorker.tsx" });
  }, []);
  console.log(Component);
  return !!Component && <Component />;
};

export default ClientImport;
