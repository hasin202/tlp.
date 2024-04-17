import { Button } from "@/components/ui/button";
import BuyWithAmazonBtn from "../call-to-actions";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[80vh] md:min-h-[90vh] gap-8 md:pt-6">
      <img
        className=" md:max-w-[35rem] xl:max-w-[40rem] 2xl:max-w-[55rem]"
        src="/assets/hero.webp"
      />
      <div className="flex gap-2 md:gap-4">
        <a href="#mailing_list">
          <Button className="w-40 md:w-44 2xl:w-64">Get A Free Gift!</Button>
        </a>
        <BuyWithAmazonBtn />
      </div>
    </div>
  );
};

export default Hero;
