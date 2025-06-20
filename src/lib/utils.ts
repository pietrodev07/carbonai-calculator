import { Validators } from "./types";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const createValidators = <T extends Validators>(validators: T) => {
  const allValid = Object.values(validators).every((value) => value);
  return { ...validators, isFormValid: allValid };
};
