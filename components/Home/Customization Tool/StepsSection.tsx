"use client";

import { CustomizationOptions, StepOption } from "@/types/ProductCustomization";
import React, { useState } from "react";


interface StepsComponentProps {
  options: CustomizationOptions;
  onUpdate: (key: keyof CustomizationOptions, value: string) => void;
  steps: StepOption[];
}

const StepsSection: React.FC<StepsComponentProps> = ({ options, onUpdate, steps }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Steps</h2>
      <div className="space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.key} className="bg-orange-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-orange-700" />
                  <span className="font-semibold text-gray-800">{step.label}</span>
                </div>
              </div>
              {step.key === 'message' ? (
                <input
                  type="text"
                  value={options[step.key]}
                  onChange={(e) => onUpdate(step.key, e.target.value)}
                  placeholder="Enter your message"
                  className="w-full bg-white border-2 border-orange-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-400 transition-colors"
                />
              ) : (
                <select
                  value={options[step.key]}
                  onChange={(e) => onUpdate(step.key, e.target.value)}
                  className="w-full bg-white border-2 border-orange-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-400 transition-colors"
                >
                  {step.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
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
