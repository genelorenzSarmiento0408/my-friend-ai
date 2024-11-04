function Label({ label }) {
  return (
    <label className="font-medium">
      {label} <span className="text-red-600">*</span>
    </label>
  );
}

export default Label;
