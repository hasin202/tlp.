import ConfigurableCTA from "../call-to-actions/configurable-cta";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataType } from "./data/types";

type PropsType = {
  data: DataType;
};

const SellingPoint: React.FC<PropsType> = ({ data }) => {
  return (
    <div
      className={`flex flex-col gap-8 ${
        data.imgPositionLeft ? "md:flex-row-reverse" : "md:flex-row"
      } md:justify-center md:gap-16 md:items-center`}
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="font-galderglynn text-3xl md:text-5xl">{data.title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {data.points.map((point, key) => {
            return (
              <AccordionItem value={`point-${key}`} key={key}>
                <AccordionTrigger>{point.title}</AccordionTrigger>
                <AccordionContent>{point.info}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <ConfigurableCTA ctaText={data.ctaText} />
      </div>
      <img src={data.img} className="md:w-[50%]" />
    </div>
  );
};

export default SellingPoint;
