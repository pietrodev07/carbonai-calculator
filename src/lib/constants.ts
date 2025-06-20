// Token energy consumption estimates (kWh per 1000 tokens)
export const TOKEN_ENERGY_CONSUMPTION = {
  small: 0.0001, // Small models (e.g., BERT-base)
  medium: 0.0006, // Medium models (e.g., GPT-3)
  large: 0.0015, // Large models (e.g., GPT-4)
  xlarge: 0.0035, // Very large models
};

// Carbon intensity in kg CO2e per kWh
export const CARBON_INTENSITY = 0.33;
