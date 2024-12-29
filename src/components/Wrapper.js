import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 20px ${mainStyle.Padding_main};
  margin: 0 auto;
  border: 1px solid #dbdbdb;
`;

const Wrapper = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Wrapper;
