"use client";

import * as S from "#/components/atoms/select";
import { FormData, Option } from "#/lib/types";
import { Label } from "#/components/atoms/label";
import { Button } from "#/components/atoms/button";
import { useCalculator } from "../_hooks/emissions.hook";

const modelSizeOptions: Option<FormData["modelSize"]> = [
  { label: "Small (e.g., autocomplete, email assistants)", value: "small" },
  { label: "Medium (e.g., free ChatGPT, Bing Chat)", value: "medium" },
  { label: "Large (e.g., paid ChatGPT-4, Copilot Pro)", value: "large" },
  { label: "Very Large (e.g., advanced image models)", value: "xlarge" },
];

const promptsPerDayOptions: Option<FormData["promptsPerDay"]> = [
  { label: "Few (1-5 prompts)", value: 3 },
  { label: "Some (6-10 prompts)", value: 8 },
  { label: "Many (11-20 prompts)", value: 15 },
  { label: "Lots (21+ prompts)", value: 30 },
];

const messageLengthOptions: Option<FormData["tokensPerPrompt"]> = [
  { label: "Short (1-2 lines)", value: 100 },
  { label: "Medium (2-5 lines)", value: 300 },
  { label: "Long (a few paragraphs)", value: 600 },
  { label: "Very long (many paragraphs)", value: 1000 },
];

const daysPerMonthOptions: Option<FormData["daysPerMonth"]> = [
  { label: "Daily (25-30 days)", value: 25 },
  { label: "A few times a week (12-20 days)", value: 16 },
  { label: "A few times a month (5-10 days)", value: 8 },
  { label: "Rarely (1-4 days)", value: 3 },
];

type CalculatorFormTabProps = {
  formData: ReturnType<typeof useCalculator>["states"]["formData"];
  actions: ReturnType<typeof useCalculator>["actions"];
};

export const CalculatorFormTab = (props: CalculatorFormTabProps) => {
  const { formData, actions } = props;

  return (
    <form onSubmit={actions.handleSubmit} className="space-y-8">
      <div className="space-y-1">
        <Label className="text-base gap-1 w-full flex-col items-start">
          Which AI model do you mostly use?
          <S.Select
            value={formData.modelSize}
            onValueChange={(value) => actions.handleChange(value, "modelSize")}
          >
            <S.SelectTrigger>
              <S.SelectValue placeholder="Select AI tool" />
            </S.SelectTrigger>
            <S.SelectContent>
              {modelSizeOptions.map(({ label, value }) => (
                <S.SelectItem key={value} value={value}>
                  {label}
                </S.SelectItem>
              ))}
            </S.SelectContent>
          </S.Select>
        </Label>
      </div>

      <div className="space-y-1">
        <Label className="text-base gap-1 w-full flex-col items-start">
          How many prompts do you send per day?
          <S.Select
            value={formData.promptsPerDay.toString()}
            onValueChange={(value) => actions.handleChange(value, "promptsPerDay")}
          >
            <S.SelectTrigger>
              <S.SelectValue placeholder="Select prompts per day" />
            </S.SelectTrigger>
            <S.SelectContent>
              {promptsPerDayOptions.map(({ label, value }) => (
                <S.SelectItem key={value} value={value.toString()}>
                  {label}
                </S.SelectItem>
              ))}
            </S.SelectContent>
          </S.Select>
        </Label>
      </div>

      <div className="space-y-1">
        <Label className="text-base gap-1 w-full flex-col items-start">
          How long are your messages and responses?
          <S.Select
            value={formData.tokensPerPrompt.toString()}
            onValueChange={(value) => actions.handleChange(value, "tokensPerPrompt")}
          >
            <S.SelectTrigger>
              <S.SelectValue placeholder="Select message length" />
            </S.SelectTrigger>
            <S.SelectContent>
              {messageLengthOptions.map(({ label, value }) => (
                <S.SelectItem key={value} value={value.toString()}>
                  {label}
                </S.SelectItem>
              ))}
            </S.SelectContent>
          </S.Select>
        </Label>
      </div>

      <div className="space-y-1">
        <Label className="text-base gap-1 w-full flex-col items-start">
          How often do you use AI in a month?
          <S.Select
            value={formData.daysPerMonth.toString()}
            onValueChange={(value) => actions.handleChange(value, "daysPerMonth")}
          >
            <S.SelectTrigger>
              <S.SelectValue placeholder="Select usage frequency" />
            </S.SelectTrigger>
            <S.SelectContent>
              {daysPerMonthOptions.map(({ label, value }) => (
                <S.SelectItem key={value} value={value.toString()}>
                  {label}
                </S.SelectItem>
              ))}
            </S.SelectContent>
          </S.Select>
        </Label>
      </div>

      <Button type="submit" className="w-full">
        Calculate Emissions
      </Button>
    </form>
  );
};
