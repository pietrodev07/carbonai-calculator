"use client";

import * as C from "#/components/atoms/card";
import * as T from "#/components/atoms/tabs";
import { CalculatorFormTab } from "./calculator-form";
import { useCalculator } from "../_hooks/emissions.hook";
import { CalculatorResultsTab } from "./calculator-results";

export const EmissionsCalculator = () => {
  const { actions, states } = useCalculator();

  return (
    <T.Tabs value={states.tab} onValueChange={actions.handleChangeTab}>
      <C.Card className="shadow-lg dark:bg-muted/30">
        <C.CardContent>
          <T.TabsContent value="form">
            <CalculatorFormTab formData={states.formData} actions={actions} />
          </T.TabsContent>
          <T.TabsContent value="results">
            {states.results && (
              <CalculatorResultsTab
                results={states.results}
                handleChangeTab={actions.handleChangeTab}
              />
            )}
          </T.TabsContent>
        </C.CardContent>
      </C.Card>
    </T.Tabs>
  );
};
