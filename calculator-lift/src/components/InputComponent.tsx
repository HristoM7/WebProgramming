type Props = {
  num1: string;
  num2: string;
  operation: string;
  onNum1Change: (value: string) => void;
  onNum2Change: (value: string) => void;
  onOperationChange: (value: string) => void;
};

export default function InputComponent({
  num1,
  num2,
  operation,
  onNum1Change,
  onNum2Change,
  onOperationChange,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 10,
      }}
    >
      <label>
        Първо число:
        <input
          type="number"
          value={num1}
          onChange={(e) => onNum1Change(e.target.value)}
          style={{ width: "100%", marginTop: 6, padding: 8 }}
          placeholder="напр. 5"
        />
      </label>

      <label>
        Второ число:
        <input
          type="number"
          value={num2}
          onChange={(e) => onNum2Change(e.target.value)}
          style={{ width: "100%", marginTop: 6, padding: 8 }}
          placeholder="напр. 5"
        />
      </label>

      <label>
        Операция:
        <select
          value={operation}
          onChange={(e) => onOperationChange(e.target.value)}
          style={{ width: "100%", marginTop: 6, padding: 8 }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
    </div>
  );
}
