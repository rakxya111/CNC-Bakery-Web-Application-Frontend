export interface CustomizationOptions {
  base: string;
  size: string;
  flavor: string;
  filling: string;
  decor: string;
  message: string;
}

export interface StepOption {
  icon: React.ElementType;
  label: string;
  key: keyof CustomizationOptions;
  options: string[];
}