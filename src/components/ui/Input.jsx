export default function Input({
  type,
  className,
  placeholder,
  value,
  onChange,
  defaultValue,
  id,
}) {
  return (
    <input
      type={type}
      className={` outline-none flex gap-2 border p-2 rounded-md ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={`${id ? id : ""}`}
      defaultValue={`${defaultValue ? defaultValue : ""}`}
    />
  );
}
