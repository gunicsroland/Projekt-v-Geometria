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
    columns?: Column[];
  }

  interface CalculatorOptions {
    keypad?: boolean;
    showGrid?: boolean;
    xAxisNumbers?: boolean;
    yAxisNumbers?: boolean;
  }

  interface Column {
    latex: string;
    values?: string[];
    color?: string;
    hidden?: boolean;
    points?: boolean;
    lines?: boolean;
    dragMode?: DragModes;
  }

  enum DragModes{
    X,
    Y,
    XY,
    NONE
  }

  function GraphingCalculator(
    element: HTMLElement,
    options?: CalculatorOptions
  ): Calculator;
}
