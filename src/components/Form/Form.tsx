import { FormEventHandler, ReactNode } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import styled from "@emotion/styled";

type FormProps = {
  id?: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

const Form = (props: FormProps) => {
  const formAttributes = useForm({});

  return (
    <FormProvider {...formAttributes}>
      <CustomForm id={props.id} onSubmit={props.onSubmit}>
        {props.children}
      </CustomForm>
    </FormProvider>
  );
};

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Form;