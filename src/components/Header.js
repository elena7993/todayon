import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 16px;
    text-align: center;
    flex: 1;
  }
`;

const Header = ({ text }) => {
  const navigate = useNavigate();

  const BackBtn = () => {
    navigate(-1);
  };

  return (
    <HeaderWrap>
      <FontAwesomeIcon
        icon={faAngleLeft}
        style={{ cursor: "pointer" }}
        onClick={BackBtn}
      />
      <h3>{text}</h3>
    </HeaderWrap>
  );
};

export default Header;
