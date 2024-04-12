import React, { useId } from "react";

function Input({ label = "", type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`${className}`}
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
}

export default React.forwardRef(Input);
