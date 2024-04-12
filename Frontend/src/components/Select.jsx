import React, { useId } from "react";

function Select(
  { label, defaultValue, content, options, className, ...props },
  ref
) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        defaultValue={defaultValue}
        id={id}
        ref={ref}
        {...props}
        className={`${className}`}
      >
        {content && (
          <option value="" disabled hidden>
            {content}
          </option>
        )}
        {options?.map((option) => (
          <option key={option._id} value={option._id}>
            {option.username}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
