import ConfigurableCTA from "../../call-to-actions/configurable-cta";
import goals from "./points";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GoalSetting = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-16 md:items-center">
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="font-galderglynn text-3xl md:text-5xl">
          Goal Setting Guidance
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {goals.map((goal, key) => {
            return (
              <AccordionItem value={`goal-point-${key}`}>
                <AccordionTrigger>{goal.title}</AccordionTrigger>
                <AccordionContent>{goal.info}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <ConfigurableCTA ctaText="Achieve Your Goals!" />
      </div>
      <img src="/assets/goals.png" className="md:w-[50%]" />
    </div>
  );
};

export default GoalSetting;
