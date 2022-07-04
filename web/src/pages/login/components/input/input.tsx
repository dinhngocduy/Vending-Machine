import React from "react";
import { useRef, useState } from "react";
import { ReactComponent as VisibilityIcon } from "../../../../assets/svg/visibility_black_18dp.svg";
import { ReactComponent as InvisibilityIcon } from "../../../../assets/svg/visibility_off_black_18dp.svg";
import "../../../../libraries/styles/components/input.scss";

export const InputV2 = React.forwardRef((props: any, ref) => {
  const { placeholder, onChange, type } = props;

  const inputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        ref={inputRef}
        className="input"
        placeholder={placeholder}
        type={
          type !== undefined
            ? type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
            : "text"
        }
        onChange={(e) => {
          if (onChange !== undefined) {
            const currentText = e.target.value;
            // setValue(currentText)
            onChange(currentText);
          }
        }}
      ></input>

      {type === "password" ? (
        showPassword ? (
          <InvisibilityIcon
            id="toogle-icon"
            className="password"
            fill="#4D5971"
            onClick={() => {
              setShowPassword(false);
            }}
          />
        ) : (
          <VisibilityIcon
            id="toogle-icon"
            className="password"
            fill="#4D5971"
            onClick={() => {
              setShowPassword(true);
            }}
          />
        )
      ) : null}
    </div>
  );
});
