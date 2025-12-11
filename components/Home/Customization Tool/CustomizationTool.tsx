"use client";

import { CustomizationOptions, StepOption } from "@/types/ProductCustomization";
import {
  Cake,
  Gift,
  MessageSquare,
  PenTool,
  Ruler,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import StepsSection from "./StepsSection";
import SummarySection from "./SummarySection";
import PreviewSection from "./PreviewSection";

const CustomizationTool: React.FC = () => {
  const [options, setOptions] = useState<CustomizationOptions>({
    base: "Cake/Chocolate",
    size: '6"/8"/10"',
    flavor: "Vanilla/Red velvet",
    filling: "Cream/Fruit",
    decor: "Sprinkles/Berries",
    message: '"Happy Birthday"',
  });

  const updateOption = (key: keyof CustomizationOptions, value: string) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const steps: StepOption[] = [
    {
      icon: Cake,
      label: "Base",
      key: "base",
      options: [
        "Cake/Chocolate",
        "Vanilla Sponge",
        "Chocolate Fudge",
        "Red Velvet",
      ],
    },
    {
      icon: Ruler,
      label: "Size",
      key: "size",
      options: ['6"', '8"', '10"', '6"/8"/10"'],
    },
    {
      icon: Sparkles,
      label: "Flavor",
      key: "flavor",
      options: ["Vanilla", "Red velvet", "Vanilla/Red velvet", "Chocolate"],
    },
    {
      icon: PenTool,
      label: "Filling",
      key: "filling",
      options: ["Cream", "Fruit", "Cream/Fruit", "Chocolate Ganache"],
    },
    {
      icon: Gift,
      label: "Decor",
      key: "decor",
      options: ["Sprinkles", "Berries", "Sprinkles/Berries", "Flowers"],
    },
    {
      icon: MessageSquare,
      label: "Message",
      key: "message",
      options: ['"Happy Birthday"', '"Congratulations"', '"Best Wishes"'],
    },
  ];

  return (
    <section className=" flex flex-col rounded-4xl bg-pinkSoft py-12 px-20 mx-9 my-1">
      <div className="text-left ml-10 my-10 ">
        <h2 className="text-3xl font-bold">Customization Tool</h2>
        <p className="text-pinkDark text-xl font-semibold">
          Step-by-step builder for your custom creation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StepsSection options={options} onUpdate={updateOption} steps={steps} />
        <PreviewSection />
        <SummarySection options={options} />
      </div>
    </section>
  );
};

export default CustomizationTool;
