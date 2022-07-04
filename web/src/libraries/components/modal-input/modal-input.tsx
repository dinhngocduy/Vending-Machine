import React, { useEffect, useState } from "react";
import { ModalInputProps } from "./modal-input-props";
import "./modal-input.scss";
import makeAnimated from "react-select/animated";
import Select from "react-select";

export const ModalInput = (props: ModalInputProps) => {
  const {
    isRequired,
    label,
    placeholder,
    isOption,
    listoption,
    isTextArea,
    isMutilOption,
    onChangeValue,
    disableTextInput,
    disableValue,
    defaultValue,
    value,
  } = props;
  const list = listoption || [];
  const animatedComponents = makeAnimated();

  // const [value, setValue] = useState<any>(defaultValue);

  return (
    <div className="modal-input-ctn">
      <p className="modal-input-label">
        {label} {isRequired ? <p>*</p> : null}
      </p>
      {isOption ? (
        <>
          {isMutilOption ? (
            <Select
              classNamePrefix="option-ctn"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={list}
              placeholder={placeholder}
              theme={(theme) => ({
                ...theme,
                borderRadius: 8,
                controlHeight: 20,
                colors: {
                  ...theme.colors,
                },
              })}
            />
          ) : (
            <Select
              classNamePrefix="option-ctn"
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={list}
              placeholder={placeholder}
              onChange={(value) => {
                onChangeValue(value);
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 8,
                controlHeight: 20,
                colors: {
                  ...theme.colors,
                },
              })}
              value={value}
            />
          )}
        </>
      ) : isTextArea ? (
        <textarea
          placeholder={placeholder}
          onChange={(value) => {
            onChangeValue(value.target.value);
          }}
          value={value}
        />
      ) : (
        <input
          placeholder={placeholder}
          disabled={disableTextInput}
          value={disableTextInput ? disableValue : value}
          // value={value}
          onChange={(value) => {
            onChangeValue(value.target.value);
          }}
          defaultValue={value}
        />
      )}
    </div>
  );
};
