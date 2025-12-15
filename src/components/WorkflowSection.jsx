import React from "react";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

import codeImg from "../assets/code.jpg";

const WorkflowSection = () => {
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>

        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item) => (
            <div key={item.title} className="flex mb-5">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-1 text-xl">{item.title}</h5>
                <p className="text-md p-2 text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
