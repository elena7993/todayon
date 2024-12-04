import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 282px;
  height: 60px;
  background-color: black;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Button = ({ children, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
