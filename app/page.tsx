import React from "react";
import Carousel from "./modules/carousel";
import JournalDescription from "./modules/description";
import MailingList from "./modules/mailing-list";
import PageBreak from "./modules/page-break";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col md:flex-row gap-8">
        <Carousel />
        <JournalDescription />
      </div>
      <PageBreak />
      <MailingList />
    </main>
  );
}
