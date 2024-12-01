import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Button from "../../components/Button";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const PoseImg = styled.div`
  margin-top: 50px;
  img {
    width: 337px;
    height: 218px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 22px;
  }

  .desc {
    margin: 20px 0;
  }

  .desc_2 {
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyStreching = ({ text, BackBtn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const stretching = location.state;

  return (
    <Wrapper>
      <Header text="Body Streching" />
      <PoseImg>
        <img src={stretching.img} alt={stretching.img} />
      </PoseImg>
      <TextBox>
        <h3>{stretching.title}</h3>
        <p className="desc">{stretching.desc}</p>
        <p className="desc_2">{stretching.desc_2}</p>
      </TextBox>
      <BtnWrap>
        <Button onClick={() => navigate("/main")}>Complited</Button>
      </BtnWrap>
    </Wrapper>
  );
};

export default BodyStreching;
