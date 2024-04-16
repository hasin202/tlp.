import { Button } from "@/components/ui/button";
import BuyWithAmazonBtn from "../call-to-actions";

const Hero = () => {
  return (
    <div className="relative w-full flex flex-col items-center md:justify-center md:min-h-screen gap-4 md:gap-8">
      <img
        className=" md:max-w-[35rem] xl:max-w-[40rem] 2xl:max-w-[55rem]"
        src="/assets/hero.webp"
      />
      <div className="flex gap-2 md:gap-4">
        <Button className="w-32 md:w-44 2xl:w-64">More Info</Button>
        <BuyWithAmazonBtn />
      </div>
    </div>
  );
};

export default Hero;
