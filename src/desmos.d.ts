// desmos.d.ts
//A desmos calculator típus függvényei
declare namespace Desmos {
  interface Calculator {
    setExpression(expression_state: expression_state): void;

    setBlank(options?: CalculatorOptions): void;
    destroy(): void;
  }

  interface expression_state{
    id?: string;
    type?: string;
    latex?: string;
    color?: string;
    sliderBounds?: {min: string, max: string};
    text?: string;
    lineWidth?: string;
    hidden?: boolean;
  }

  interface CalculatorOptions {
    keypad?: boolean;
    showGrid?: boolean;
    xAxisNumbers?: boolean;
    yAxisNumbers?: boolean;
  }



  function GraphingCalculator(
    element: HTMLElement,
    options?: CalculatorOptions
  ): Calculator;
}
