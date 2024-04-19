"use client";

import { Button } from "@/components/ui/button";
import useCountryBasedUrl from "./use-country-based-url";

const BuyWithAmazonBtn = () => {
  const url = useCountryBasedUrl();

  return (
    <Button className="w-40 md:w-44 2xl:w-64">
      <a
        className="text-sm flex items-center justify-center gap-2 md:gap-4 w-full py-4"
        target="_blank"
        href={url}
      >
        <img src="/imgs/amazon.svg" className="w-4 md:w-6" />
        <p>Buy Now</p>
      </a>
    </Button>
  );
};

export default BuyWithAmazonBtn;
