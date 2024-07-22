import { DiDebian } from "react-icons/di";
import { HoverEffect } from "./ui/CardHoverEffect";
import { skills } from "@/data";

export function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8" id="skills">
      <h1 className="heading">
        My <span className="text-purple">Skills</span> &amp; <span className="text-purple">Ablities</span>
      </h1>
      <div className="flex items-center justify-center mt-10">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
