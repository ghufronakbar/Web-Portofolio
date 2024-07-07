import ProgrammingLanguage from "@/data/ProgrammingLanguage";
import { HoverEffect } from "../ui/card-hover-effect";

const ProgrammingLanguageSection = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Programming Language & Framework
        </h2>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="w-full">
          <HoverEffect items={ProgrammingLanguage} className="mt-6" />
        </div>
      </div>
    </div>
  );
};
export default ProgrammingLanguageSection;
