import React, { useId } from "react";

function Select({ label, options, className, ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        defaultValue=""
        id={id}
        ref={ref}
        {...props}
        className={`${className}`}
      >
        <option value="" disabled hidden>
          Please select a user
        </option>
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
