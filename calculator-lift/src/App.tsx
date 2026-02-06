import { useMemo, useState } from "react";
import InputComponent from "./components/InputComponent.tsx";
import ResultComponent from "./components/ResultComponent.tsx";


export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");

  const { result, error } = useMemo(() => {
    if (num1 === "" || num2 === "") return { result: null, error: "" };

    const a = Number(num1);
    const b = Number(num2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      return { result: null, error: "Грешка: въведете валидни числа!" };
    }

    if (operation === "/" && b === 0) {
      return { result: null, error: "Грешка: деление на 0 е невъзможно!" };
    }

    switch (operation) {
      case "+":
        return { result: a + b, error: "" };
      case "-":
        return { result: a - b, error: "" };
      case "*":
        return { result: a * b, error: "" };
      case "/":
        return { result: a / b, error: "" };
      default:
        return { result: null, error: "Грешка: непозната операция!" };
    }
  }, [num1, num2, operation]);

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "system-ui" }}>
      <h2>Калкулатор (Lifting State Up)</h2>

      <InputComponent
        num1={num1}
        num2={num2}
        operation={operation}
        onNum1Change={setNum1}
        onNum2Change={setNum2}
        onOperationChange={setOperation}
      />

      <ResultComponent result={result} error={error} />
    </div>
  );
}
