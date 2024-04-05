import React from "react";
import Carousel from "./modules/carousel/carousel";
import JournalDescription from "./modules/description/description";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 md:px-32 2xl:px-48 3xl:px-64 gap-4">
      <h1 className="text-5xl font-galderglynn">TLP.</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Carousel />
        <JournalDescription />
      </div>
    </main>
  );
}
