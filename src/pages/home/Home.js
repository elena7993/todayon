import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .btn {
    margin-top: 60px;
  }
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      <InnerWrap>
        <Title>Today, ON</Title>
        <img src="/homebg.png" alt="homebg" />
        <div className="btn">
          <Button to="/main">Get Started</Button>
          <Button to="/profile">Create Profile</Button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
};

export default Home;
