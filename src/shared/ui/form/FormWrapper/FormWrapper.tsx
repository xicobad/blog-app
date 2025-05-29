import { Wrapper } from "./styles";

interface FormWrapperProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  title?: string;
}

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};
