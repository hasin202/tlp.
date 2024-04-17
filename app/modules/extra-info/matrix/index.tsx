import ConfigurableCTA from "../../call-to-actions/configurable-cta";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import points from "./points";

const Matrix = () => {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row-reverse md:justify-end md:gap-16 md:items-center">
      <img src="/assets/matrix.png" className="md:w-[50%]" />
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="font-galderglynn text-3xl md:text-5xl">
          The Limitless Matrix
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {points.map((point, key) => {
            return (
              <AccordionItem value={`goal-point-${key}`}>
                <AccordionTrigger>{point.title}</AccordionTrigger>
                <AccordionContent>{point.info}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <ConfigurableCTA ctaText="Launch Your Limitless Journey!" />
      </div>
    </div>
  );
};

export default Matrix;
