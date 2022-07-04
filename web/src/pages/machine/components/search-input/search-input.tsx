import React from "react";
import "./search-input.scss";

interface PropsTextView {
  hint: string;
  onChange?: any;
}

function SearchInput(props: PropsTextView) {
  return (
    <>
      <div className="textview">
        <input
          type="text"
          placeholder={props.hint}
          onChange={(event) => {
            props.onChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default SearchInput;
