// src/pages/signUp/index.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buton/style";
import Logo from "../../assets/images/logo-large.svg";

import {
  EmailLabel,
  FormEmail,
  FormTitle,
  LineBreak,
  LoginContainer,
  LogingForm,
  FormParagraph,
  LoginDiv,
  LoginImage,
  ImageTextContainer,
  LogoImage,
  Heading,
  ImageParagraph,
} from "../loginPage/style";

import { NameLabel, NameInput, FormLink, SpanError } from "./style";

/* ---------- Types ---------- */
interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

/* ---------- Component ---------- */
export default function SignUpPage(): JSX.Element {
  const navigate = useNavigate();

  const initialValue: FormValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState<FormValues>(initialValue);
  const [formError, setFormError] = useState<FormErrors>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  function handleView() {
    navigate("/view");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormError(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    // debug
    // console.log("errors:", formError);
    if (isSubmit && Object.keys(formError).length === 0) {
      // form is valid — do signup logic here
      console.log("Form submitted successfully:", formValues);
    }
    // run when formError changes
  }, [formError, isSubmit, formValues]);

  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Full Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    }

    return errors;
  };

  return (
    <LoginDiv>
      <LoginContainer>
        <LoginImage>
          <LogoImage src={Logo} alt="logo" />
          <ImageTextContainer>
            <Heading>
              Keep track of your money <LineBreak />
              and save for your future
            </Heading>
            <ImageParagraph>
              Personal finance app puts you in control of your spending. Track{" "}
              <LineBreak />
              transactions, set budgets, and add to savings pots easily.
            </ImageParagraph>
          </ImageTextContainer>
        </LoginImage>

        <LogingForm onSubmit={handleSubmit} noValidate>
          <FormTitle>Sign Up</FormTitle>

          <NameLabel>Name</NameLabel>
          <NameInput
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <SpanError>{formError.name}</SpanError>

          <LineBreak />

          <EmailLabel>Email</EmailLabel>
          <FormEmail
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <SpanError>{formError.email}</SpanError>

          <LineBreak />

          <EmailLabel>Create Password</EmailLabel>
          <FormEmail
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <SpanError>{formError.password}</SpanError>

          <LineBreak />

          <Button type="submit">Create Account</Button>

          <FormParagraph>
            Already have an account?{" "}
            <FormLink onClick={handleView}>Login</FormLink>
          </FormParagraph>
        </LogingForm>
      </LoginContainer>
    </LoginDiv>
  );
}
