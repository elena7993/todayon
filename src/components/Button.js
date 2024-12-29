import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
  width: 282px;
  height: 60px;
  /* background-color: black; */
  background-color: ${(props) => (props.$noBg ? "transparent" : "#000")};
  /* color: #fff; */
  color: ${(props) => (props.$addColor ? "#000" : "#fff")};
  border: ${(props) => (props.$addBorder ? "1px solid #000" : "none")};
  font-size: 20px;
  font-weight: 400;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Button = ({
  children,
  to,
  onClick,
  noBg,
  addColor,
  addBorder,
  ...RestProps
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <StyledButton
      $noBg={noBg}
      $addColor={addColor}
      $addBorder={addBorder}
      {...RestProps}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
