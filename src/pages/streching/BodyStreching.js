import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import stretchingData from "./stretchingData";

const PoseImg = styled.div`
  margin: 50px 0 20px 0;
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
  font-family: "IBM Plex Sans KR", sans-serif;
  font-style: normal;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  .desc {
    margin: 26px 0;
    opacity: 0.7;
  }

  .desc_2 {
    opacity: 0.7;
    margin-bottom: 34px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 90px;
  height: 36px;
  background-color: #000;
  border-radius: 15px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

const BodyStreching = ({ text, BackBtn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // const stretching = location.state;
  const { randomStretch } = location.state;
  const [currentStretching, setCurrentStretching] = useState(randomStretch);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * stretchingData.length);
    const randomStretch = stretchingData[randomIndex];
    setCurrentStretching(randomStretch);
  };

  return (
    <Wrapper>
      <Header text="Body Streching" />
      <PoseImg>
        <img src={currentStretching.img} alt={currentStretching.img} />
      </PoseImg>
      <TextBox>
        <h3>{currentStretching.title}</h3>
        <p className="desc">{currentStretching.desc}</p>
        <p className="desc_2">{currentStretching.desc_2}</p>
        {/* <h3>{stretching.title}</h3>
        <p className="desc">{stretching.desc}</p>
        <p className="desc_2">{stretching.desc_2}</p> */}
      </TextBox>
      <BtnWrap>
        <Button onClick={() => navigate("/main")}>Done</Button>
        <Button onClick={handleNext}>Next</Button>
      </BtnWrap>
    </Wrapper>
  );
};

export default BodyStreching;
