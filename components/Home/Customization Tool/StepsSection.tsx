"use client";

import { CustomizationOptions, StepOption } from "@/types/ProductCustomization";
import React from "react";

interface StepsComponentProps {
  options: CustomizationOptions;
  onUpdate: (key: keyof CustomizationOptions, value: string) => void;
  steps: StepOption[];
}

const StepsSection: React.FC<StepsComponentProps> = ({
  options,
  onUpdate,
  steps,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-h-fit border-2 border-pinkMedium">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Steps</h2>

      <div className="space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div key={step.key} className="relative">
              {/* Icon + Label INSIDE input */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-black pointer-events-none">
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{step.label}</span>
              </div>

              {step.key === "message" ? (
                <input
                  type="text"
                  value={options[step.key]}
                  onChange={(e) => onUpdate(step.key, e.target.value)}
                  placeholder={`Enter ${step.label}`}
                  className="w-full bg-pinkSoft  rounded-lg
                             pl-28 pr-3 py-4 text-black
                             focus:outline-none focus:border-pinkDark transition-colors placeholder-black"
                />
              ) : (
                <select
                  value={options[step.key]}
                  onChange={(e) => onUpdate(step.key, e.target.value)}
                  className="w-full bg-pinkSoft rounded-lg
                             pl-28 pr-3 py-5 text-black
                             focus:outline-none focus:border-pinkDark transition-colors"
                >
                  {step.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepsSection;
