export interface CalculatorState {
  currentValue: string;
  operator: string | null;
  previousValue: string | null;
}

export const initialState: CalculatorState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (
  value: number,
  state: CalculatorState
): CalculatorState => {
  if (state.currentValue === "0") {
    return { ...state, currentValue: `${value}` };
  }

  return { ...state, currentValue: `${state.currentValue}${value}` };
};

export const handleEqual = (state: CalculatorState): CalculatorState => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue || "0");
  const resetState: CalculatorState = {
    operator: null,
    previousValue: null,
    currentValue: `${previous + current}`,
  };

  if (operator === "/") {
    return {
      ...resetState,
      currentValue: `${previous / current}`,
    };
  }

  if (operator === "*") {
    return {
      ...resetState,
      currentValue: `${previous * current}`,
    };
  }

  if (operator === "+") {
    return {
      ...resetState,
      currentValue: `${previous + current}`,
    };
  }

  if (operator === "-") {
    return {
      ...resetState,
      currentValue: `${previous - current}`,
    };
  }

  return state;
};

const calculator = (
  type: string,
  value: number | string,
  state: CalculatorState
): CalculatorState => {
  switch (type) {
    case "number":
      return handleNumber(value as number, state);
    case "operator":
      return {
        ...state,
        operator: value as string,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
};

export default calculator;
