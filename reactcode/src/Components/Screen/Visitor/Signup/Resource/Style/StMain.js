import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가


export const Viewer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%
  height: 50px;

  margin: 0 0 20px 0;

  font-size: 25px;
  font-weight: 600;
`;
