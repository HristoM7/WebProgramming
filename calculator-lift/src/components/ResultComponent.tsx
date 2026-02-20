type Props = {
  result: number | null;
  error: string;
};

export default function ResultComponent({ result, error }: Props) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 10,
      }}
    >
      <h3 style={{ marginTop: 0 }}>Резултат</h3>

      {error ? (
        <p style={{ margin: 0 }}>{error}</p>
      ) : result === null ? (
        <p style={{ margin: 0 }}>Въведете две числа, за да видите резултат.</p>
      ) : (
        <p style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{result}</p>
      )}
    </div>
  );
}
