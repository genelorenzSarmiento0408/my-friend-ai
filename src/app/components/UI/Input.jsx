import Label from "./Label";

function Input({ label, value, className, type, id, name, onChange }) {
  return (
    <>
      <Label label={label} />
      <input
        value={value}
        type={type}
        id={id}
        name={name}
        placeholder={`Enter your ${label}`}
        onChange={(e) => onChange(e.target.value)}
        className={`p-2 border-2 border-main-4 focus:border-accent-blue rounded-md ${className}`}
        required
      />
    </>
  );
}

export default Input;
