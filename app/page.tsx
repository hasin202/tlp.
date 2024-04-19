import React from "react";
import MailingList from "./modules/mailing-list";
import PageBreak from "./modules/page-break";
import Hero from "./modules/hero";

import { Button } from "@/components/ui/button";
import SellingPointsContainer from "./modules/selling-points/selling-points-container";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-2">
        <Hero />
        <div className="flex flex-col gap-16 md:gap-24 px-10 md:px-36 2xl:px-48 3xl:px-96 mb-20">
          <PageBreak />
          <SellingPointsContainer />
          <PageBreak />
          <MailingList />
        </div>
      </div>
      <a href="#hero">
        <Button className="w-full text-xs rounded-none">Back To Top</Button>
      </a>
    </main>
  );
}
