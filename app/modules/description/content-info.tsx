"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const JournalContentInfo = () => {
  return (
    <Accordion
      type="single"
      className="font-sans hover:no-underline hidden md:inline"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Journal Content</AccordionTrigger>
        <AccordionContent>
          {" "}
          <ul className="list-disc ml-8 font-sans">
            <li>Goal setting for success</li>
            <li>13 weeks of self improvement</li>
            <li>Well structured daily journalling pages</li>
            <li>Weekly reviews to keep you aligned with your goals</li>
            <li>
              Daily inspirartional quotes to keep you motivated on your journey
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default JournalContentInfo;
