import React from "react";

// type CustomButtonProps = {
//   type: "radio" | "checkbox" | "button";
//   value: string;
//   placeholder: string,
// } & Omit<React.ComponentProps<"button">, "value">;

type CustomButtonProps = {
  id?: string;
  label: string;
} & React.ComponentProps<"input">;

const CustomButton = ({ id, type, label, ...rest }: CustomButtonProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...rest} />
    </>
  );
};

export default CustomButton;
