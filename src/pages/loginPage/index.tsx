import {
  LoginContainer,
  LoginImage,
  FormTitle,
  FormEmail,
  LogingForm,
  FormParagraph,
  FormLink,
  // IllustrationImage,
  LineBreak,
  EmailLabel,
  LoginDiv,
  ImageTextContainer,
  Heading,
  ImageParagraph,
  LogoImage,
} from "./style";

import Logo from "../../assets/images/logo-large.svg";
import { Button } from "../../components/Buton/style";

export default function LoginPag() {
  return (
    <>
      <LoginDiv>
        <LoginContainer>
          <LoginImage>
            <LogoImage src={Logo} />
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
          <LogingForm>
            <FormTitle>Login</FormTitle>
            <EmailLabel>Email</EmailLabel>
            <LineBreak />
            <FormEmail type="email" />
            <LineBreak />
            <EmailLabel>Password</EmailLabel>
            <LineBreak />
            <FormEmail type="password" />
            <LineBreak />

            <Button>Login</Button>
            <FormParagraph>
              Need to create an account?
              <FormLink to="/signup">Sign Up</FormLink>
            </FormParagraph>
          </LogingForm>
        </LoginContainer>
      </LoginDiv>
    </>
  );
}
