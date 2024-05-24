import { Button } from "@/components/ui/button";
import React from "react";
import getCountryBasedUrl from "./use-country-based-url";

type TProps = {
  ctaText: string;
};

const ConfigurableCTA: React.FC<TProps> = async ({ ctaText }) => {
  const url = await getCountryBasedUrl();

  if (!url) return;
  return (
    <Button className="w-full md:max-w-44 xl:max-w-64 mt-4">
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
