import React from "react";
import Carousel from "./modules/carousel";
import JournalDescription from "./modules/description";
import MailingList from "./modules/mailing-list";
import PageBreak from "./modules/page-break";
import Hero from "./modules/hero";
import GoalSetting from "./modules/extra-info/goal-setting";
import Journalling from "./modules/extra-info/journalling";
import WeeklyReviews from "./modules/extra-info/weeky-reviews";
import Matrix from "./modules/extra-info/matrix";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <Hero />
        <div className="flex flex-col gap-8 md:gap-12 px-10 md:px-16 lg:px-24 2xl:px-48 3xl:px-64 mb-20">
          <PageBreak />
          <GoalSetting />
          <Journalling />
          <WeeklyReviews />
          <Matrix />
          <PageBreak />
          <MailingList />
        </div>
      </div>
      {/* <PageBreak />
      <MailingList /> */}
    </main>
  );
}
