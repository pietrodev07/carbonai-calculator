import { Info } from "lucide-react";
import * as C from "#/components/atoms/card";
import { Button } from "#/components/atoms/button";
import { useCalculator } from "../_hooks/emissions.hook";

type CalculatorResultsTabProps = {
  results: NonNullable<ReturnType<typeof useCalculator>["states"]["results"]>;
  handleChangeTab: ReturnType<typeof useCalculator>["actions"]["handleChangeTab"];
};

export const CalculatorResultsTab = (props: CalculatorResultsTabProps) => {
  const { results, handleChangeTab } = props;

  return (
    <section className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <C.Card className="bg-muted/40 gap-5">
          <C.CardHeader>
            <C.CardTitle>Monthly Energy Consumption</C.CardTitle>
          </C.CardHeader>
          <C.CardContent>
            <div className="text-2xl font-bold text-amber-600">
              {results.energyConsumption.toFixed(4)} kWh
            </div>
          </C.CardContent>
        </C.Card>

        <C.Card className="bg-muted/40 gap-5">
          <C.CardHeader>
            <C.CardTitle>Monthly Carbon Emissions</C.CardTitle>
          </C.CardHeader>
          <C.CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              {results.carbonEmissions.toFixed(4)} kg CO₂e
            </div>
          </C.CardContent>
        </C.Card>
      </div>

      <div className="bg-muted p-4 rounded-xl border border-border">
        <h3 className="font-medium flex items-center gap-2 mb-3">
          <Info className="h-4 w-4" />
          Monthly estimated equivalents:
        </h3>
        <ul className="space-y-3  ">
          <li className="flex justify-between">
            <span>Trees needed to offset</span>
            <span className="font-medium">
              {results.equivalents.treesNeeded.toFixed(4)} trees
            </span>
          </li>

          <li className="flex justify-between">
            <span>Driving a car</span>
            <span className="font-medium">
              {results.equivalents.drivingKm.toFixed(4)} km
            </span>
          </li>

          <li className="flex justify-between">
            <span>LED bulbs active</span>
            <span className="font-medium">
              {results.equivalents.ledBulbHours.toFixed(4)} hours
            </span>
          </li>

          <li className="flex justify-between">
            <span>TV watched active</span>
            <span className="font-medium">
              {results.equivalents.tvHours.toFixed(4)} hours
            </span>
          </li>

          <li className="flex justify-between">
            <span>Smartphone usage</span>
            <span className="font-medium">
              {results.equivalents.smartphoneUsageHours.toFixed(4)} hours
            </span>
          </li>
        </ul>
      </div>

      <Button
        type="button"
        className="w-full"
        onClick={() => handleChangeTab("form")}
      >
        Back to the calculator form
      </Button>
    </section>
  );
};
