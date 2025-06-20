import { toast } from "sonner";
import { useState } from "react";
import { FormData, Result, SubmitFormEvent } from "#/lib/types";
import { CARBON_INTENSITY, TOKEN_ENERGY_CONSUMPTION } from "#/lib/constants";

const initialState: FormData = {
  daysPerMonth: 25,
  promptsPerDay: 3,
  modelSize: "small",
  tokensPerPrompt: 1000,
};

export const useCalculator = () => {
  const [tab, setTab] = useState<string>("form");
  const [results, setResults] = useState<Result | null>(null);
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChangeTab = (tab: string) => setTab(tab);

  const handleChange = (value: string, name: string) => {
    const valueModified = !isNaN(+value) ? +value : value;
    setFormData((prev) => ({ ...prev, [name]: valueModified }));
  };

  const handleSubmit = (e: SubmitFormEvent) => {
    e.preventDefault();

    // Calculate total tokens per month
    const totalTokensPerDay = formData.promptsPerDay * formData.tokensPerPrompt;
    const totalTokensPerMonth = totalTokensPerDay * formData.daysPerMonth;

    // Energy consumption in kWh (energy per 1000 tokens * total tokens / 1000)
    const tokenEnergy = TOKEN_ENERGY_CONSUMPTION[formData.modelSize];
    const energyConsumption = (tokenEnergy * totalTokensPerMonth) / 1000;

    // Carbon emissions in kg CO2e
    const carbonEmissions = energyConsumption * CARBON_INTENSITY;

    // Equivalents for context
    const drivingKm = carbonEmissions * 4; // ~250g CO2 per km
    const treesNeeded = carbonEmissions / 21; // ~21kg CO2 absorbed by a tree per year
    const ledBulbHours = energyConsumption / 0.01; // 0.01 kWh per hour per LED bulb
    const tvHours = energyConsumption / 0.1; // 0.1 kWh per hour TV watched
    const smartphoneUsageHours = carbonEmissions / 0.05; // ~0.05 kg CO2e per hour smartphone use

    setResults({
      carbonEmissions,
      energyConsumption,
      equivalents: {
        tvHours,
        drivingKm,
        treesNeeded,
        ledBulbHours,
        smartphoneUsageHours,
      },
    });

    setTab("results");
    toast.success("Calculation completed successfully!");
  };

  return {
    states: { tab, results, formData },
    actions: { handleChange, handleChangeTab, handleSubmit },
  };
};
