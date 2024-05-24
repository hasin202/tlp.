import { Button } from "@/components/ui/button";
import React from "react";

type TProps = {
  link: string | null;
};

const BuyWithAmazonBtn: React.FC<TProps> = async ({ link }) => {
  if (!link) return;
  return (
    <Button className="w-40 md:w-44 2xl:w-64">
      <a
        className="text-sm flex items-center justify-center gap-2 md:gap-4 w-full py-4"
        target="_blank"
        href={link}
      >
        <img src="/assets/amazon.svg" className="w-4 md:w-6" />
        <p>Buy Now</p>
      </a>
    </Button>
  );
};

export default BuyWithAmazonBtn;
