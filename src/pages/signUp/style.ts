import styled from "@emotion/styled";
import colors from "../../style/colors";

export const NameLabel = styled.label`
  color: ${colors.secondary02};
  font-weight: bold;
  font-size: 12px;
  // margin-bottom: 5px;
`;
export const NameInput = styled.input`
  border: 1.5px solid ${colors.secondary04};
  color: ${colors.secondary04};
  width: 95%;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  background-color: ${colors.white};
`;
export const FormLink = styled.a`
  color: ${colors.primary03};
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;
export const SpanError = styled.span`
  color: red;
  margin-bottom: 15px;
  font-size: 10px;
`;
