import styled from "@emotion/styled";
import colors from "../../style/colors";
import { Link } from "react-router-dom";
import BackgroundImg from "../../assets/images/illustration-authentication.svg";
export const LoginDiv = styled.div`
  background: ${colors.primary01};
  height: 100vh;
  width: 100%;
`;
export const LoginContainer = styled.div`
  display: flex;
  gap: 50px;
  height: 96.5%;
  padding: 10px;
`;

export const LoginImage = styled.div`
  height: 100%;
  width: 36%;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  position: relative;
`;

// export const IllustrationImage = styled.img`
//   height: 100%;
//   background-size: cover;
//   border-radius: 12px;
//   position: absolute;
// `;
export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 120px;
`;
export const ImageTextContainer = styled.div`
  position: absolute;
  bottom: 20px;
  // top: 20px;
  left: 20px;
`;
export const Heading = styled.h2`
  color: ${colors.white};
  fornt-weight: bold;
  font-size: 30px;
`;
export const ImageParagraph = styled.p`
  font-weight: regular;
  color: ${colors.white};
  font-size: 12px;
`;
export const LogingForm = styled.form`
  height: fit-content;
  background-color: ${colors.white};
  width: 25%;
  padding: 20px;
  margin-top: 7rem;
  border-radius: 12px;
`;
export const LineBreak = styled.br``;
export const FormTitle = styled.h2`
  font-weight: bold;
  font-size: 32px;
  margin-top: 0px;
  color: ${colors.secondary01};
`;
export const EmailLabel = styled.label`
  color: ${colors.secondary02};
  font-weight: bold;
  font-size: 12px;
  margin-top: 0px;
`;
export const FormEmail = styled.input`
  border: 1.5px solid ${colors.secondary04};
  color: ${colors.secondary04};
  width: 95%;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  // margin-bottom: 15px;
  background-color: ${colors.white};
`;
export const FormParagraph = styled.p`
  color: ${colors.secondary03};
  font-size: 14px;
  font-weight: regular;
  text-align: center;
  justify-content: center;
  display: flex;
  gap: 5px;
  margin-top: 25px;
`;
export const FormLink = styled(Link)`
  color: ${colors.primary03};
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
`;
export const SpanError = styled.span`
  color: red;
  margin-top: -20px;
`;
