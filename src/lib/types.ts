import { ChangeEvent, FormEvent } from "react";

export type SubmitFormEvent = FormEvent<HTMLFormElement>;
export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
export type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;
export type TextareaChangeEvent = ChangeEvent<HTMLTextAreaElement>;

export type ElementChangeEvent =
  | InputChangeEvent
  | SelectChangeEvent
  | TextareaChangeEvent;

export type Validators = Record<string, boolean>;

export type DaysPerMonthOption = 25 | 16 | 8 | 3;
export type PromptsPerDayOption = 3 | 8 | 15 | 30;
export type MessageLength = 100 | 300 | 600 | 1000;
export type EnergySource = "renewable" | "mixed" | "fossil";
export type ModelSize = "small" | "medium" | "large" | "xlarge";

export type FormData = {
  modelSize: ModelSize;
  tokensPerPrompt: MessageLength;
  promptsPerDay: PromptsPerDayOption;
  daysPerMonth: DaysPerMonthOption;
};

export type Result = {
  energyConsumption: number;
  carbonEmissions: number;
  equivalents: {
    tvHours: number;
    drivingKm: number;
    treesNeeded: number;
    ledBulbHours: number;
    smartphoneUsageHours: number;
  };
};

export type Option<T> = { label: string; value: T }[];
