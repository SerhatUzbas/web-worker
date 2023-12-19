"use client";
import Basic from "@/components/Basic";
import ClientRenderedComponent from "@/components/ClientRenderedComponent";
import ImportFromWorkerJs from "@/components/ImportFromWorkerJs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
// import asd from "@/workers/worker";

const ClientRendered = dynamic(
  () =>
    import("@/components/ClientRenderedComponent").then((mod) => mod.default),
  {
    ssr: false,
  }
);
const ClientImported = dynamic(
  () => import("@/components/ClientImport").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function Home() {
  console.log(<ClientImported />);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Basic />
      <ClientRendered />
      <ClientImported />
      {/* <ImportFromWorkerJs /> */}
    </main>
  );
}
