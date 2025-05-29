import React from "react";
import * as S from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormCheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, ...rest }, ref) => {
    return (
      <S.Label>
        <input type="checkbox" ref={ref} {...rest} />
        {label}
      </S.Label>
    );
  }
);

export default FormCheckbox;
