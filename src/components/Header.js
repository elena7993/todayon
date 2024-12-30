import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

  const BackBtn = () => {
    if (location.pathname === "/notes" || location.pathname === "/todo") {
      console.log("dd");
      navigate("/main", { replace: true });
    } else {
      navigate(-1);
    }
  };

  // *추천: 헤더가 경로 기반 뒤로가기나 네비게이션 로직을 담당하는 경우.

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
