import React from "react";
import * as S from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...rest }, ref) => {
    const hasError = Boolean(error);

    return (
      <div>
        <S.Label>{label}</S.Label>
        <S.Input ref={ref} hasError={hasError} {...rest} />
        {hasError && <S.ErrorText>{error}</S.ErrorText>}
      </div>
    );
  }
);

export default FormInput;
