import styled from "styled-components";

export const LoginButtonViewer = styled.button`
  width: 250px;
  height: 40px;

  border: 0;
  border-radius: 2px;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #ffe6f1;
  }
`;

export const SignupButtonViewer = styled.button`
width: 250px;
height: 40px;

border: 0;
border-radius: 2px;
font-size: 14px;
text-align: center;

&:hover {
  background-color: #ffe6f1;
}
`;

export const FindButtonViewer = styled.button`
  height: 30px;

  border: none;
  color: #cccccc;
  font-size: 11px;
  outline: 0;
`;

export const ButtonGroupViewer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0 0 0;

  *:nth-child(1) {
    margin: 0 10px 0 0;
  }


`;

export default ButtonGroupViewer;