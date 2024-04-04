import React from "react";
import Carousel from "./modules/carousel/carousel";
import JournalDescription from "./modules/description/description";
import { headers } from "next/headers";

export async function getIp() {
  let forwardedFor = headers().get("x-forwarded-for");
  let realIp = headers().get("x-real-ip");
  if (forwardedFor) {
    return forwardedFor.split(", ")[0].trim();
  }
  if (realIp) return realIp.trim();
  return null; // or '0.0.0.0', depends
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 md:px-32 gap-4">
      <h1 className="text-5xl font-galderglynn">TLP.</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Carousel />
        <JournalDescription />
      </div>
      {getIp()}
    </main>
  );
}
