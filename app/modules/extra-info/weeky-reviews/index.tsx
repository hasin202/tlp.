import ConfigurableCTA from "../../call-to-actions/configurable-cta";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import points from "./points";

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
