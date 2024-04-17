import ConfigurableCTA from "../../call-to-actions/configurable-cta";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const points = [
  {
    title: "Reflect on the last 7 days",
    info: "Engage in deep reflection with a review that helps align your actions with your goals. What did you spend the most time on in the last week? Was this really what should have had your attention? How can next week be better?",
  },
  {
    title: "Plan for the next 7 days",
    info: "Set intentions and plan actionable steps for the week ahead.",
  },
  {
    title: "Track habits for Success",
    info: "Track and build up to three key habits, reinforcing the discipline essential for success.",
  },
  {
    title: "Do some General Journalling",
    info: "Now, this is a space where you can dump all of your feelings and thoughts for the previous week. Maybe you just had a bad day and want to vent. Write it here. Maybe you achieved something you're proud of. Write it here. Maybe you saw something amazing. Write it here. You get the point. Just write anything and everything about the last week here. ",
  },
];

const WeeklyReviews = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-16 md:items-center">
      <div className="flex flex-col gap-4 md:gap-8">
        <div>
          <h2 className="font-galderglynn text-3xl md:text-5xl">
            Weekly Reviews
          </h2>
          <h4 className="font-light text-2xl text-gray-500 uppercase">
            To keep you focused
          </h4>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {points.map((point, key) => {
            return (
              <AccordionItem value={`point-${key}`}>
                <AccordionTrigger>{point.title}</AccordionTrigger>
                <AccordionContent>{point.info}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <ConfigurableCTA ctaText="Set yourself up for Success" />
      </div>
      <img src="/assets/review.png" className="md:w-[50%]" />
    </div>
  );
};

export default WeeklyReviews;
