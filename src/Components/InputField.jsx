export default function InputField({ text, placeholder }) {
  return (
    <div className="flex fd-c ai-s w-100">
      <div className="mb-1">{text}</div>
      <div className="w-100">
        <input
          type="text"
          placeholder={placeholder}
          className="w-100"
          style={{ padding: "10px", borderRadius: "5px", outline: "none" }}
        />
      </div>
    </div>
  );
}
