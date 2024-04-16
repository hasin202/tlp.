"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import useCountryBasedUrl from "./use-country-based-url";

type PropsType = {
  ctaText: string;
};

const ConfigurableCTA: React.FC<PropsType> = ({ ctaText }) => {
  const url = useCountryBasedUrl();

  return (
    <Button className="w-full md:max-w-44 xl:max-w-64">
      <a
        className="text-sm flex items-center justify-center gap-2 md:gap-4 w-full py-4"
        target="_blank"
        href={url}
      >
        <p>{ctaText}</p>
      </a>
    </Button>
  );
};

export default ConfigurableCTA;
