import ConfigurableCTA from "../../call-to-actions/configurable-cta";

const points = [
  "A unique visual tool that allows you to see your progress at a glance.",
  `With each day shade in the completed non-negotiable's.`,
  "Feel a sense of achievement with each shaded box",
];

const Matrix = () => {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row-reverse md:justify-end md:gap-16 md:items-center">
      <img src="/assets/matrix.png" className="md:w-[50%]" />
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="font-galderglynn text-3xl md:text-5xl">
          13 weeks of journalling
        </h2>
        <ul className="flex flex-col gap-2 w-[95%]">
          {points.map((point, key) => {
            return (
              <li
                className="relative before:content-['+'] before:absolute before:left-0 before:top-0"
                key={key}
              >
                <p className="ml-6">{point}</p>
              </li>
            );
          })}
        </ul>
        <ConfigurableCTA ctaText="Start Shading in Now!" />
      </div>
    </div>
  );
};

export default Matrix;
