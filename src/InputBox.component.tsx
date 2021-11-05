import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputBox: React.FC<Props> = ({ className, ...rest }) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    const input: any = inputRef.current!;
    input.style.width = "5px";
    input.style.width = `${input.scrollWidth}px`;
  });
  return (
    <input
      className={`outline-none ${className}`}
      ref={inputRef}
      autoComplete="off"
      type="text"
      {...rest}
    />
  );
};

InputBox.defaultProps = {
  className: "capitalize",
};

export default React.memo(InputBox);
