"use client";
import ClientRenderedComponent from "@/components/ClientRenderedComponent";
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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientRendered />
      <ClientImported />
    </main>
  );
}
